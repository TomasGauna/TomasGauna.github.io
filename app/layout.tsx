import { quicksand } from './fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-slate-200 h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
