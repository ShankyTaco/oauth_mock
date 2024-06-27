'use client';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const HomePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-green-800">
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center py-8">
        <div className="flex items-center gap-2">
          <Image
            src="/wallet-logo.svg"
            alt="Wallet Logo"
            width={40}
            height={40}
          />
          <h1 className="text-3xl font-bold">MockWallet Home</h1>
        </div>
        <nav className="flex gap-6">
          <a href="/app/home" className="text-lg hover:underline">Home</a>
          <a href="/app/features" className="text-lg hover:underline">Features</a>
          <a href="/app/about" className="text-lg hover:underline">About</a>
          <a href="/app/contact" className="text-lg hover:underline">Contact</a>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="text-lg hover:underline"
          >
            Logout
          </button>
        </nav>
      </header>

      <section className="text-center py-16">
        <h2 className="text-4xl font-semibold mb-4">Welcome to MockWallet</h2>
        <p className="text-lg mb-8">
          Your secure and reliable online wallet application.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-green-100 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Easy to Use</h3>
          <p>
            MyWallet offers a user-friendly interface that is easy to navigate.
          </p>
        </div>
        <div className="p-8 bg-green-100 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Secure Transactions</h3>
          <p>
            We prioritize your security with advanced encryption and fraud protection.
          </p>
        </div>
        <div className="p-8 bg-green-100 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
          <p>
            Our support team is available around the clock to assist you.
          </p>
        </div>
        <div className="p-8 bg-green-100 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-2">Global Access</h3>
          <p>
            Access your wallet from anywhere in the world.
          </p>
        </div>
      </section>

      <footer className="w-full max-w-5xl mx-auto py-8 flex justify-between items-center border-t border-gray-300">
        <p className="text-sm">&copy; 2024 MockWallet. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;