import React from "react";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/60 backdrop-blur-xl border-t border-white/20 p-6 shadow-2xl z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left max-w-sm bg-slate-950/40 p-4 rounded-xl border border-white/5">
                    <h3 className="text-white font-extrabold text-xl tracking-wide">
                        Выпускной Альбом
                    </h3>
                    <p className="text-slate-100 text-sm mt-2 leading-relaxed">
                        Сборник лучших воспоминаний, фотографий и теплых пожеланий нашего любимого класса.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center gap-4">
                    <a 
                        href="https://github.com/gubarger" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-white font-bold px-6 py-3 shadow-lg hover:bg-slate-700 hover:scale-105 transition-all duration-200 text-center"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.gnu.org/licenses/gpl-3.0.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold px-6 py-3 shadow-lg hover:bg-slate-700 hover:scale-105 transition-all duration-200 text-center"
                    >
                        GNU GPLv3
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto border-t border-white/10 mt-6 pt-4 text-center text-xs text-slate-300 font-medium">
                <p>© 2026 Наш Класс. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;