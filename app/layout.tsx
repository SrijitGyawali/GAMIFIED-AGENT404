import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hedera Learn - Gamified Web3 Learning Platform',
  description: 'Learn Blockchain, Earn Rewards - Master Web3 technology through gamified quests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

