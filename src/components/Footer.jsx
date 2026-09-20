function Footer() {
    return (
        <footer className="relative md:fixed md:bottom-0 md:left-0 md:right-0 bg-zinc-900/80 md:bg-zinc-900/60 backdrop-blur-xl border-t border-white/20 p-4 md:p-6 shadow-2xl z-50">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="hidden md:block max-w-sm bg-zinc-950/40 p-3 rounded-xl border border-white/5">
                    <h3 className="text-white font-extrabold text-lg tracking-wide">
                        Выпускной Альбом
                    </h3>
                    <p className="text-slate-100 text-xs mt-1 leading-relaxed">
                        Сборник лучших воспоминаний, фотографий и теплых пожеланий нашего любимого класса.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                    <a 
                        href="https://github.com/gubarger" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-white font-bold px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm shadow-lg hover:bg-zinc-700 hover:scale-105 transition-all duration-200 text-center flex-grow md:flex-grow-0"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://www.gnu.org/licenses/gpl-3.0.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm shadow-lg hover:bg-zinc-700 hover:scale-105 transition-all duration-200 text-center flex-grow md:flex-grow-0"
                    >
                        GPLv3
                    </a>
                    <a 
                        href="https://drive.google.com/drive/folders/1u-v_5-88a--eB35GOUII4akBkUPLilxB?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm shadow-lg hover:bg-zinc-700 hover:scale-105 transition-all duration-200 text-center flex-grow md:flex-grow-0"
                    >
                        Google disc
                    </a>
                    <a 
                        href="https://sites.google.com/view/liminalwebsite65and/paintings?pli=1&authuser=0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm shadow-lg hover:bg-zinc-700 hover:scale-105 transition-all duration-200 text-center flex-grow md:flex-grow-0"
                    >
                        LiMiNal
                    </a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto border-t border-white/10 mt-2 md:mt-4 pt-2 text-center text-[9px] md:text-[10px] text-slate-300 font-medium">
                <p>© 2026 Наш Класс. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;