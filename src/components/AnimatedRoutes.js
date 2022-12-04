import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../Home';
import Works from '../Works';
import About from '../About';
import Contact from '../Contact';
import ArtPerformance from './ArtPerformance';
import VideoArt from './VideoArt';
import Gallery from '../Gallery';
import PaintingsList from './PaintingsList';
import Painting from './Painting';
import ShowShoppingCart from './ShowShoppingCart';
import CheckData from './CheckData';
import Success from './Success';
import ContactsClients from './ContactsClients';
import PaintingsCarousel from './PaintingsCarousel';
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<PaintingsCarousel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paintings" element={<PaintingsList />} />
        <Route path="/performance" element={<ArtPerformance />} />
        <Route path="/video-art" element={<VideoArt />} />
        <Route path="/art/:title" element={<Painting />} />
        <Route path="/shopping-cart" element={<ShowShoppingCart />} />
        <Route path="/contacts-clients" element={<ContactsClients />} />
        <Route path="/check-data" element={<CheckData />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;