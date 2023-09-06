import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

const poppin = Poppins({
  variable: '--font-Poppins',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Avatar Ai',
  description: 'Bring your imaginary friend to life',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} ${poppin.variable}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
