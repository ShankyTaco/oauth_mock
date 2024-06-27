'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-8">
        <nav className="flex gap-6">
          <Link href="/home" className="text-lg hover:underline">Home</Link>
          <Link href="/features" className="text-lg hover:underline">Features</Link>
          <Link href="/about" className="text-lg hover:underline">About</Link>
          <Link href="/contact" className="text-lg hover:underline">Contact</Link>
        </nav>
      </header>
      {/* Footer with legal links */}
      <footer className="w-full max-w-5xl mx-auto py-8 flex justify-between items-center border-t border-gray-300">
        <div className="flex gap-4">
          <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
          <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}