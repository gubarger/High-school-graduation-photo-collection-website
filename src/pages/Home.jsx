import { motion } from "framer-motion";

import PageTransition from "../components/PageTransition";

function ScrollAnimatedBlock({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex justify-center">
            {children}
        </motion.div>
    );
}

function HomePage() {
    return (
        <PageTransition>
            <div className="w-full min-h-screen bg-transparent text-white flex flex-col items-center !overflow-y-auto pb-32">
                <div className="w-full h-auto flex flex-col justify-center items-center text-center px-4 pt-12 pb-16">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-sm">
                    Добро пожаловать
                </h1>

                <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-md font-medium tracking-wide">
                    в цифровой альбом воспоминаний нашего класса
                </p>
                
                <motion.div 
                    animate={{ y: [0, 8, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-zinc-500 text-sm mt-6 cursor-default">
                    Листайте вниз ↓
                </motion.div>
            </div>
                <div className="w-full max-w-4xl px-6 flex flex-col gap-32 mt-12">
                    <ScrollAnimatedBlock>
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl text-center md:text-left">
                            <h2 className="text-2xl font-bold text-zinc-400 mb-4">Как это было</h2>
                            <p className="text-zinc-300 leading-relaxed">
                                Кажется, что только вчера мы пришли на наш первый урок, а сегодня уже открываем двери во взрослую жизнь. Этот сайт — наша общая машина времени. Листайте галерею, читайте пожелания и не забывайте тех, с кем разделили эти школьные годы.
                            </p>
                        </div>
                    </ScrollAnimatedBlock>
                    <ScrollAnimatedBlock>
                        <div className="w-full flex flex-col items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-zinc-900 aspect-video w-full max-w-2xl">
                                <img 
                                    src="https://lh3.googleusercontent.com/d/1qANRaTxRn04quxebfrPcpn3wjRLTzUuL"
                                    alt="Наш класс" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-zinc-400 text-sm mt-4 italic">Старые будни в школе</span>
                        </div>
                    </ScrollAnimatedBlock>
                    <ScrollAnimatedBlock>
                        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl text-center md:text-left">
                            <h2 className="text-2xl font-bold text-zinc-400 mb-4">Оставьте свой след</h2>
                            <p className="text-zinc-300 leading-relaxed">
                                В разделе цитат каждый может оставить теплое слово, забавное воспоминание или напутствие одноклассникам. Давайте соберем здесь всё то, что будет согревать нас спустя годы на встречах выпускников.
                            </p>
                        </div>
                    </ScrollAnimatedBlock>
                    <ScrollAnimatedBlock>
                        <div className="w-full flex flex-col items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-zinc-900 aspect-video w-full max-w-2xl">
                                <img 
                                    src="https://lh3.googleusercontent.com/d/1rZtBd6uBj5uugMQs7znttGU8PcHabXau" 
                                    alt="Школьные будни" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-zinc-400 text-sm mt-4 italic">Кушаем в столовой</span>
                        </div>
                    </ScrollAnimatedBlock>
                </div>
            </div>
        </PageTransition>
    );
}

export default HomePage;