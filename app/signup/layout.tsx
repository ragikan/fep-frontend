export const metadata = {
    title: 'Signup',
    description: 'Signup to FTP Portal',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    )
  }
  