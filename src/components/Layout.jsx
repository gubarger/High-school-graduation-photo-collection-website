import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div className="h-screen w-full bg-slate-950 flex flex-col justify-between overflow-y-auto m-0 p-0">
            <Navbar />

            <main className="flex-grow pt-24 pb-44 w-full flex flex-col flex-shrink-0">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};

export default Layout;
