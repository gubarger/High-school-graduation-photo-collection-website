import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition";

function ScrollAnimatedBlock({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full">
            {children}
        </motion.div>
    );
}

function CreationPage() {
    const creations = [
        {
            id: 1,
            author: "Кирилл",
            title: "Программирование, математика",
            manifesto: "Логика - это основа математики и программирования, что уж поделать тут.",
            mainImage: "https://lh3.googleusercontent.com/d/1nOx7-tplavXEj1R59YlUg5thReMBDat0",
            tags: ["Программирование", "Бурмалда", "C++"],
            accent: "from-pink-500 to-purple-600 shadow-purple-500/10 border-t-purple-500"
        },
    ];

    return (
        <PageTransition>
            <div className="w-full flex-grow bg-transparent text-white px-4 md:px-10 pb-20 flex flex-col items-center">                
                <div className="text-center my-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Творчество и Хобби
                    </h1>
                    <p className="text-slate-400 text-sm mt-2">Чем живут, чем дышат и что создают наши выпускники 🎨</p>
                </div>

                <div className="w-full max-w-3xl flex flex-col gap-10">
                    {creations.map((item) => (
                        <ScrollAnimatedBlock key={item.id}>            
                            <div className={`w-full bg-zinc-900/40 border border-white/10 border-t-4 ${item.accent} rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6 group`}>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        Автор: {item.author}
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition duration-300">
                                        {item.title}
                                    </h2>
                                </div>

                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-white/5 shadow-inner relative">
                                    <img 
                                        src={item.mainImage} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-102 transition duration-700"
                                        loading="lazy"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="border-l-2 border-white/10 pl-4 py-1">
                                    <p className="text-slate-300 text-sm md:text-base italic leading-relaxed">
                                        "{item.manifesto}"
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                    {item.tags.map((tag, idx) => (
                                        <span 
                                            key={idx}
                                            className="text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg shadow-sm hover:bg-white/10 transition duration-200 cursor-default">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimatedBlock>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}

export default CreationPage;
