import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import PageTransition from "../components/PageTransition";

function ScrollAnimatedBlock({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full">
            {children}
        </motion.div>
    );
}

function AboutTeachersPage() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const teachers = [
        {
            id: 1,
            name: "Алёна Сергеевна",
            bio: "Люблю: спорт, рисовать картины по номерам, путешествия (различные вылазки на природу, пляж или лес), пешие прогулки.",
            quote: "Идиоты 🤦‍♀️",
            status: "Классный руководитель 👑",
            photos: [
                "https://lh3.googleusercontent.com/d/14a4mM14cMBjq_c2ae3lL794kaeBqC8B7",
                "https://lh3.googleusercontent.com/d/1VU7om74vP7g56qwiGcmEDzoeCqJsRGKP",
                "https://lh3.googleusercontent.com/d/1gjDkVHjs5Q2eLMQeiIJv8f27B0bEGxdB",
                "https://lh3.googleusercontent.com/d/1iS16t9RMkT7rbYbkmTnBCD24nSyv8frF",
            ]
        }
    ];

    return (
        <PageTransition>
            <div className="w-full flex-grow bg-transparent text-white px-4 md:px-10 pb-20 flex flex-col items-center">                
                <div className="text-center my-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Наши Учителя
                    </h1>
                    <p className="text-zinc-400 text-sm mt-2">Все те, кто вел нас сквозь тернии к знаниям с первого дня 🧑‍🏫</p>
                </div>

                <div className="w-full max-w-4xl flex flex-col gap-12">
                    {teachers.map((teacher) => (
                        <ScrollAnimatedBlock key={teacher.id}>
                            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start">                                
                                <div className="w-full md:w-72 flex-shrink-0">
                                    <div className="w-full flex gap-3 overflow-x-auto snap-x scrollbar-thin scrollbar-thumb-white/10 pb-3">
                                        {teacher.photos.map((photoUrl, index) => (
                                            <div 
                                                key={index} 
                                                onClick={() => setSelectedPhoto({ src: photoUrl, caption: teacher.name })}
                                                className="w-full md:w-64 h-80 rounded-xl overflow-hidden bg-zinc-900 border border-white/5 flex-shrink-0 snap-center shadow-md cursor-zoom-in group relative">
                                                <img 
                                                    src={photoUrl} 
                                                    alt={`${teacher.name} ${index + 1}`} 
                                                    className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                                                    loading="lazy"/>
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
                                                    <span className="text-xl">🔍</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-center text-zinc-500 text-[11px] mt-1 tracking-wider uppercase">
                                        ← Свайп и клик для увеличения →
                                    </p>
                                </div>

                                <div className="flex-grow flex flex-col justify-between w-full h-full">
                                    <div>
                                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 border-b border-white/5 pb-2">
                                            {teacher.name}
                                        </h2>
                                        <p className="text-zinc-300 text-sm md:text-base mt-4 leading-relaxed italic">
                                            {teacher.bio}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3">
                                            <span className="text-xs text-zinc-400 font-bold tracking-wider uppercase block">Коронная фраза</span>
                                            <span className="text-white text-sm font-medium block mt-1">{teacher.quote}</span>
                                        </div>
                                        <div className="bg-zinc-950/40 border border-white/5 rounded-xl p-3">
                                            <span className="text-xs text-zinc-400 font-bold tracking-wider uppercase block">Статус</span>
                                            <span className="text-white text-sm font-medium block mt-1">{teacher.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimatedBlock>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedPhoto && (
                        <motion.div
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            onClick={() => setSelectedPhoto(null)}
                            className="fixed inset-0 z-100 bg-black/70 flex flex-col justify-center items-center p-4 cursor-zoom-out"                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-3xl w-full bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                                <button onClick={() => setSelectedPhoto(null)} className="absolute top-4 right-4 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">✕</button>
                                <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="w-full h-auto max-h-[70vh] object-contain" />
                                <div className="p-4 bg-zinc-950/90 border-t border-white/5 text-center">
                                    <p className="text-white text-sm md:text-base font-medium">Преподаватель: {selectedPhoto.caption}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
}

export default AboutTeachersPage;
