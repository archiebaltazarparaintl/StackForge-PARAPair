import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: '16px',
              fontWeight: '600',
              fontSize: '14px',
            },
            success: {
              style: {
                background: '#10b981',
                color: 'white',
              },
              iconTheme: {
                primary: 'white',
                secondary: '#10b981',
              },
            },
            error: {
              style: {
                background: '#ef4444',
                color: 'white',
              },
              iconTheme: {
                primary: 'white',
                secondary: '#ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
