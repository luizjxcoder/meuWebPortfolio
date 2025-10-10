
import { useState, useEffect } from 'react';

interface GitHubCommit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    avatar_url: string;
  } | null;
}

interface GitHubRepo {
  name: string;
  full_name: string;
  private: boolean;
  updated_at: string;
}

interface CommitsByMonth {
  [key: string]: number;
}

interface UseGitHubCommitsReturn {
  commitsByMonth: CommitsByMonth;
  totalCommits: number;
  loading: boolean;
  error: string | null;
  lastCommitDate: string | null;
  repositoriesCount: number;
}

export const useGitHubCommits = (username: string = 'luizjxcoder'): UseGitHubCommitsReturn => {
  const [commitsByMonth, setCommitsByMonth] = useState<CommitsByMonth>({});
  const [totalCommits, setTotalCommits] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastCommitDate, setLastCommitDate] = useState<string | null>(null);
  const [repositoriesCount, setRepositoriesCount] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Data limite para buscar commits (últimos 12 meses)
        const since = new Date();
        since.setFullYear(since.getFullYear() - 1);

        // 1. Buscar repositórios públicos do usuário
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': 'GitHub-Analytics-App'
            }
          }
        );

        if (!reposResponse.ok) {
          if (reposResponse.status === 404) {
            throw new Error('Usuário GitHub não encontrado');
          } else if (reposResponse.status === 403) {
            throw new Error('Limite de API do GitHub excedido');
          } else {
            throw new Error(`Erro na API do GitHub: ${reposResponse.status}`);
          }
        }

        const repositories: GitHubRepo[] = await reposResponse.json();
        setRepositoriesCount(repositories.length);

        // 2. Buscar commits de cada repositório
        const allCommits: GitHubCommit[] = [];
        const monthlyCommits: CommitsByMonth = {};
        let latestCommit: string | null = null;

        // Inicializar todos os meses dos últimos 12 meses com 0
        const currentDate = new Date();
        for (let i = 11; i >= 0; i--) {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
          const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
          monthlyCommits[monthKey] = 0;
        }

        // Buscar commits dos repositórios mais ativos (limitando para evitar rate limit)
        const reposToAnalyze = repositories
          .filter(repo => !repo.private)
          .slice(0, 10); // Analisar até 10 repositórios mais recentes

        for (const repo of reposToAnalyze) {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${repo.full_name}/commits?author=${username}&since=${since.toISOString()}&per_page=100`,
              {
                headers: {
                  'Accept': 'application/vnd.github.v3+json',
                  'User-Agent': 'GitHub-Analytics-App'
                }
              }
            );

            if (commitsResponse.ok) {
              const repoCommits: GitHubCommit[] = await commitsResponse.json();
              allCommits.push(...repoCommits);

              // Processar commits por mês
              repoCommits.forEach((commit) => {
                try {
                  const commitDate = new Date(commit.commit.author.date);
                  const monthKey = `${commitDate.getFullYear()}-${String(commitDate.getMonth() + 1).padStart(2, '0')}`;
                  
                  if (monthlyCommits.hasOwnProperty(monthKey)) {
                    monthlyCommits[monthKey]++;
                  }
                  
                  if (!latestCommit || commitDate > new Date(latestCommit)) {
                    latestCommit = commit.commit.author.date;
                  }
                } catch (dateError) {
                  console.warn('Erro ao processar data do commit:', dateError);
                }
              });
            }

            // Pequena pausa para evitar rate limiting
            await new Promise(resolve => setTimeout(resolve, 100));

          } catch (repoError) {
            console.warn(`Erro ao buscar commits do repositório ${repo.name}:`, repoError);
          }
        }

        setCommitsByMonth(monthlyCommits);
        setTotalCommits(allCommits.length);
        setLastCommitDate(latestCommit);

      } catch (err) {
        console.error('Erro ao buscar dados do GitHub:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        
        // Dados de exemplo em caso de erro
        const exampleData: CommitsByMonth = {};
        const currentDate = new Date();
        for (let i = 11; i >= 0; i--) {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
          const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
          exampleData[monthKey] = Math.floor(Math.random() * 15) + 2;
        }
        setCommitsByMonth(exampleData);
        setTotalCommits(85);
        setRepositoriesCount(12);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return {
    commitsByMonth,
    totalCommits,
    loading,
    error,
    lastCommitDate,
    repositoriesCount
  };
};
