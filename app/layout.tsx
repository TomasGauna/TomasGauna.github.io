import { quicksand } from './fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tomas Gauna | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" initial-scale='1.0' />
      </head>
      <body className={`${quicksand.className} bg-black h-screen w-full overflow-auto`}>
        {children}
      </body>
    </html>
  );
}
