import { Link } from 'react-router-dom'; 

function Navbar() {
    const links = [
        { text: 'Классные фотки', url: '/photos' },
        { text: 'Цитаты и пожелания', url: '/quotes' },
        { text: 'О выпускниках', url: '/about' },
        { text: 'Творчество', url: '/creation' }
    ];

    return (
        <div className="fixed top-0 left-0 right-0 h-20 bg-zinc-900/70 backdrop-blur-xl shadow-2xl flex items-center z-50 border-b border-white/10 relative px-4">
            <Link 
                to="/" 
                className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition duration-200 border border-white/10 text-sm shadow-sm z-10">
                ☰ Меню
            </Link>

            <div className="w-full flex justify-start md:justify-center items-center overflow-x-auto space-x-4 py-2 md:px-24">    
                {links.map((link) => (
                    <Link 
                        key={link.url} 
                        to={link.url} 
                        className="flex-shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-zinc-500 to-zinc-600 text-white font-semibold text-xs md:text-sm px-5 py-2.5 shadow-md shadow-zinc-500/10 border border-white/10 hover:scale-105 transition-all duration-200 whitespace-nowrap tracking-wide">
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;