import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition";

function ScrollAnimatedBlock({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            {children}
        </motion.div>
    );
}

function QuotesPage() {
    const quotes = [
        {
            id: 1,
            text: "Я крутой",
            author: "Кирилл",
            border: "border-l-blue-500 shadow-blue-500/5"
        },
        {
            id: 2,
            text: "Carpe diem",
            author: "Миша",
            border: "border-l-purple-500 shadow-purple-500/5"
        },
    ];

    return (
        <PageTransition>
            <div className="w-full flex-grow bg-transparent text-white px-4 md:px-10 pb-20 flex flex-col items-center">
                <div className="text-center my-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Цитаты и пожелания
                    </h1>
                    <p className="text-slate-400 text-sm mt-2">Мудрость, юмор и теплые слова на память друг другу 💬</p>
                </div>

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {quotes.map((quote) => (
                        <ScrollAnimatedBlock key={quote.id}>
                            <div className={`relative bg-zinc-900/40 border border-white/10 border-l-4 ${quote.border} rounded-2xl p-6 backdrop-blur-md shadow-xl hover:-translate-y-1.5 hover:bg-zinc-900/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden`}>
                                <span className="absolute -top-4 -right-2 text-8xl font-serif text-white/5 select-none pointer-events-none group-hover:text-white/10 transition duration-300">
                                    “
                                </span>

                                <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                                    {quote.text}
                                </p>

                                <div className="mt-6 border-t border-white/5 pt-3 flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold tracking-wide">
                                        <span className="text-sm">©</span>
                                        <span>{quote.author}</span>
                                    </div>
                                    
                                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/60 transition duration-300"></div>
                                </div>
                            </div>
                        </ScrollAnimatedBlock>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}

export default QuotesPage;
