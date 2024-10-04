export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <body
          className="bg-black-300 "
        >
          {children}
        </body>
      
    );
  }