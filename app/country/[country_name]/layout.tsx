export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body
          className="bg-slate-300 "
        >
          {children}
        </body>
      
    );
  }