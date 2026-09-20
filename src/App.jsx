import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Layout from "./components/Layout";
import HomePage from './pages/Home';
import PhotosPage from './pages/ClassPhoto';
import QuotesPage from './pages/Quotes';
import AboutClassPage from './pages/AboutClass';
import CreationPage from './pages/Creation';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} /> 
                    <Route path="photos" element={<PhotosPage />} />
                    <Route path="quotes" element={<QuotesPage />} />
                    <Route path="about" element={<AboutClassPage />} />
                    <Route path="creation" element={<CreationPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <BrowserRouter basename="/High-school-graduation-photo-collection-website">
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;
