
❕ Fazer push:
git add .
git commit -m "Corrige entry point e garante base para GitHub Pages"
git push origin main

❕ Commit vazio para forçar o workflow
git commit --allow-empty -m "Força rebuild e deploy limpo para GitHub Pages"
git push origin main
