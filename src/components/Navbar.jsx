import React from "react";
import { Link } from 'react-router-dom'; 

function Navbar() {
    const links = [
        { text: 'Классные фотки', url: '/photos' },
        { text: 'Цитаты и пожелания', url: '/quotes' },
        { text: 'Творчество', url: '/creation' },
        { text: 'Любимые треки', url: '/music' }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md p-4 shadow-2xl flex justify-center gap-x-6 z-50 relative">
            <Link 
                to="/" 
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition duration-200 border border-white/10 text-sm shadow-sm">
                ☰ Меню
            </Link>

            {links.map((link) => (
                <Link 
                    key={link.url} 
                    to={link.url} 
                    className="rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 text-white font-medium px-6 py-2 shadow-md hover:scale-105 transition-all duration-200 whitespace-nowrap block">
                    {link.text}
                </Link>
            ))}
            
        </div>
    );
}

export default Navbar;