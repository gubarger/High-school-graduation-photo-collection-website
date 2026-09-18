import React from "react";

import PageTransition from "../components/PageTransition";

function PhotosPage() {
    return (
        <PageTransition>
            <div className="w-full flex-grow bg-slate-950 text-white px-10">
                <h1 className="text-3xl font-bold text-blue-400">
                    Фотки класса
                </h1>
            </div>
        </PageTransition>
    );
}

export default PhotosPage;
