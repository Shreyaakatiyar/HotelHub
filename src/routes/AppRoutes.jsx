import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Loader from "../components/Loader";

const Home = lazy(() => import('../pages/Home/Home'));
const HotelDetails = lazy(() => import('../pages/HotelDetails/HotelDetails'));
const Favourites = lazy(() => import('../pages/Favourites/Favourites'));

import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
    return(
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotel/:id" element={<HotelDetails />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes;
