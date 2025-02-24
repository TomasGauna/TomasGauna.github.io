'use client'

import { quicksand } from './fonts';
import { ThemeProvider, useTheme } from './context/ThemeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <title>Tomas Gauna | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width" initial-scale="1.0" />
        </head>
        <Body>{children}</Body>
      </html>
    </ThemeProvider>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <body
      className={`${quicksand.className} h-screen w-full overflow-auto overflow-x-hidden transition-colors duration-500 ${theme === 'black' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      {children}
    </body>
  );
}