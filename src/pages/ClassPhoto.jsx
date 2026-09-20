import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import PageTransition from "../components/PageTransition";

function PhotosPage() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        { id: 1, src: "https://lh3.googleusercontent.com/d/1nvQOl74uNu_o2D4SjdwcFPfqsCczhxyl", caption: "В школе на кануне Нового Года 🎅" },
        { id: 2, src: "https://lh3.googleusercontent.com/d/1aopnNkNWXqC74h_FSDOaWHWEXGBBNv3F", caption: "Гуляем в жаркий день лета 😂" },
        { id: 3, src: "https://lh3.googleusercontent.com/d/13iIWhw9Sg1zunckXFB9W0plODBqqUNh5", caption: "Победители алгебры в школе 🏆" },
        { id: 4, src: "https://lh3.googleusercontent.com/d/1OS80tdSgS2NChlQCj3Or4wbjLmTErVYs", caption: "На мероприятии (^///^)" },
        { id: 5, src: "https://lh3.googleusercontent.com/d/1EJ2GbCzm2m21gZLjcwgCGb4nMi2SdP-d", caption: "С Газанчиком 🥵" },
        { id: 6, src: "https://lh3.googleusercontent.com/d/1Vtjx6u0A2oZAXqVgxZtOXOOTmdvNh6UF", caption: "Красивый уход на каникулы ✨" },
        { id: 7, src: "https://lh3.googleusercontent.com/d/1vitKBdH9iRBjwS_r_rJjECW4WMSkoyWy", caption: "Средняя школа 🎒" },
        { id: 8, src: "https://lh3.googleusercontent.com/d/1NCDw_b0JTfmJhxQ62Nm39AheMgxEERB5", caption: "Отличники 5️⃣" },
        { id: 9, src: "https://lh3.googleusercontent.com/d/1OU0PDGRaBTX382TEpS0GNHH-p5DOgIbE", caption: "Пришли на урок русского вовремя ⌛" },
        { id: 10, src: "https://lh3.googleusercontent.com/d/1q1DF_bfzP77ofdgokwZkzm7WlCfBxEC-", caption: "Решаем вместе 😊" },
        { id: 11, src: "https://lh3.googleusercontent.com/d/1LUye22xpGkv9j0kRE-TeejzBssZcKrqz", caption: "Все в сборе 🙌" },
        { id: 12, src: "https://lh3.googleusercontent.com/d/1NDsZslvvBsaoe0qqy1FLNxvjav-Eh_El", caption: "Классная фотка ❤️" },
        { id: 13, src: "https://lh3.googleusercontent.com/d/1d0hNHJV7jaBz1TKseNwTXgz4qLwwKP0G", caption: "Малышарики 🐤" },
        { id: 14, src: "https://lh3.googleusercontent.com/d/1TYZZyrWw4Y6_WCbfAF9zQFaA4b1PtWXD", caption: "Трио подружек 💅" },
        { id: 15, src: "https://lh3.googleusercontent.com/d/1voQvN1NgTa9Wb6yzTw3PdBorzqDwI0QY", caption: "Дружный класс 🔥" },
        { id: 16, src: "https://lh3.googleusercontent.com/d/1Kpr6mGsyurUMzs1r5h8K969WqoJFRIBC", caption: "Смирно! 🎖️" },
        { id: 17, src: "https://lh3.googleusercontent.com/d/1yGEePHlujROmy_oeSSad35uRKzUpezTB", caption: "Лемболово 🍄‍🟫" },
        { id: 18, src: "https://lh3.googleusercontent.com/d/1uJeUQNMNqdzO9EYZutUnMAYaCWYt3VlN", caption: "В отличном школьном музее 🗝️" },
        { id: 19, src: "https://lh3.googleusercontent.com/d/1RD35FTB9YEBymloyfFrTVi4GMrENXJJi", caption: "Концерт 🎸" },
        { id: 20, src: "https://lh3.googleusercontent.com/d/1xQ8xeCZggqTidnwPefQBVfCI5Yfcj3nb", caption: "Что за реперы!? 🫜" },
    ];

    return (
        <PageTransition>
            <div className="w-full flex-grow bg-transparent text-white px-4 md:px-10 pb-12">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-8 mb-8 mt-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-1 shadow-lg">
                        <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                            11-Б
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold tracking-wide">наш_любимый_класс</h2>
                        <p className="text-zinc-400 text-sm mt-1">История нашей школьной жизни в кадрах 📸</p>
                        <div className="flex gap-6 mt-3 justify-center sm:justify-start text-sm font-semibold">
                            <span><strong className="text-white">{photos.length}</strong> публикаций</span>
                            <font color="#94a3b8">|</font>
                            <span><strong className="text-white">2026</strong> выпуск</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {photos.map((photo) => (
                        <div  
                            key={photo.id} 
                            onClick={() => setSelectedPhoto(photo)}
                            className="relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-white/5 shadow-md group cursor-pointer">
                            <img 
                                src={photo.src} 
                                alt={photo.caption} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                loading="lazy"/>

                            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                                <span className="text-2xl mb-2">❤️</span>
                                <p className="text-white text-xs font-medium leading-snug max-w-[80%]">
                                    {photo.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedPhoto && (
                        <motion.div 
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            onClick={() => setSelectedPhoto(null)}
                            className="fixed inset-0 z-100 bg-black/70 flex flex-col justify-center items-center p-4 cursor-zoom-out">
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-3xl w-full bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                                <button 
                                    onClick={() => setSelectedPhoto(null)}
                                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition text-sm cursor-pointer">
                                    ✕
                                </button>

                                <img 
                                    src={selectedPhoto.src} 
                                    alt={selectedPhoto.caption} 
                                    className="w-full h-auto max-h-[70vh] object-contain bg-black/40"/>
                                <div className="p-4 bg-zinc-950/90 border-t border-white/5 text-center">
                                    <p className="text-white text-sm md:text-base font-medium">
                                        {selectedPhoto.caption}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
}

export default PhotosPage;
