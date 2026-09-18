import React from "react";

import PageTransition from "../components/PageTransition";

function LoveMusicPage() {
    return (
        <PageTransition>
            <div className="w-full flex-grow bg-slate-950 text-white px-10">
                <h1 className="text-3xl font-bold text-blue-400">
                    Любимые треки
                </h1>
            </div>
        </PageTransition>
    );
}

export default LoveMusicPage;
