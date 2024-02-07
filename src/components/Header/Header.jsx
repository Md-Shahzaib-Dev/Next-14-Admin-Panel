import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 p-6">
            <nav className="flex items-center justify-between max-w-8xl mx-auto">
                <div className="space-x-4 w-full text-right">
                    <Link href="/profile" className="text-white hover:text-gray-300">Profile</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
