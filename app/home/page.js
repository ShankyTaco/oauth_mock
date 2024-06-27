'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = document.cookie.includes('isLoggedIn=true');
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, [router]);

    const handleLogout = () => {
      document.cookie = 'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      router.push('/login');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-green-50 to-green-100">
            <header className="w-full bg-white shadow-md">
                <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/wallet-logo.svg"
                            alt="Wallet Logo"
                            width={40}
                            height={40}
                        />
                        <h1 className="text-3xl font-bold text-green-700">MockWallet</h1>
                    </div>
                    <nav className="flex gap-6 items-center">
                        <a href="/features" className="text-lg text-green-600 hover:text-green-800 transition">Features</a>
                        <a href="/about" className="text-lg text-green-600 hover:text-green-800 transition">About</a>
                        <a href="/contact" className="text-lg text-green-600 hover:text-green-800 transition">Contact</a>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Logout
                        </button>
                    </nav>
                </div>
            </header>

            <section className="text-center py-16 px-4">
                <h2 className="text-4xl font-semibold mb-4 text-green-800">Welcome to MockWallet</h2>
                <p className="text-lg mb-8 text-green-700">
                    Your secure and reliable online wallet application.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Get Started
                    </a>
                    <a href="#" className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition">
                        Learn More
                    </a>
                </div>
            </section>

            <section className="w-full max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-green-200 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2 text-green-700">Easy to Use</h3>
                    <p className="text-green-600">MockWallet offers a user-friendly interface that is easy to navigate.</p>
                </div>
                <div className="p-8 bg-white border border-green-200 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2 text-green-700">Secure Transactions</h3>
                    <p className="text-green-600">We prioritize your security with advanced encryption and fraud protection.</p>
                </div>
                <div className="p-8 bg-white border border-green-200 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2 text-green-700">24/7 Support</h3>
                    <p className="text-green-600">Our support team is available around the clock to assist you.</p>
                </div>
                <div className="p-8 bg-white border border-green-200 rounded-lg text-center shadow-md hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2 text-green-700">Global Access</h3>
                    <p className="text-green-600">Access your wallet from anywhere in the world.</p>
                </div>
            </section>

            <footer className="w-full bg-green-800 text-white">
                <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">&copy; 2024 MockWallet. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                        <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}