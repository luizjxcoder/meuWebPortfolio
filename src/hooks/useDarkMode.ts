
import { useState } from 'react';

export const useDarkMode = () => {
  const [isDarkMode] = useState(false);
  
  return { isDarkMode, toggleDarkMode: () => {} };
};
