import { Outlet } from 'react-router-dom';

import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
    const backgroundImageProps = "https://lh3.googleusercontent.com/d/14Fut2QDUdOQIr4YRBr8c8UzAYuVK3hze";

    return (
        <div className="h-screen w-full flex flex-col justify-between overflow-y-auto m-0 p-0 relative">
            <div 
                className="fixed inset-0 w-full h-full pointer-events-none -z-10"
                style={{
                    backgroundImage: `url('${backgroundImageProps}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div className="w-full h-full bg-black/75 backdrop-blur-md"></div>
            </div>

            <Navbar />

            <main className="flex-grow pt-24 pb-44 w-full flex flex-col flex-shrink-0 bg-transparent">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;
