'use client';
import React from 'react';

// 💡 Le chemin doit être relatif : de app/themeWrapper.tsx à app/theme/themeContext.tsx
import { ThemeProvider } from './themeContext';

// Ce composant est marqué 'use client' et englobe ThemeProvider
export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}