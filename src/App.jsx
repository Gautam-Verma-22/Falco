import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Threads from "./components/Threads";
import SplashCursor from './components/cursor'



const VideoShowcase = lazy(() => import("./components/VideoShowcase"));
const IndiaMapSection = lazy(() => import("./components/IndiaMapSection"));
const DroneRepairSection = lazy(() => import("./components/DroneRepairSection"));
const PressReleaseSection = lazy(() => import("./components/PressReleaseSection"));
const StatsSection = lazy(() => import("./components/StatsSection"));
const TrustedBySection = lazy(() => import("./components/TrustedBySection"));

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.3, ease: "easeOut" },
};

function App() {
  return (
    <div className="font-sans scroll-smooth" style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <SplashCursor />
      <Threads
        color={[0.2, 0.4, 0.8]}
        amplitude={0.8}
        distance={0.2}
        enableMouseInteraction={true}
        className="interactive"
      />
      <Navbar />
      <main style={{ maxWidth: '100vw', overflowX: 'hidden', paddingTop: '72px' }}>
        <motion.section {...fadeIn}>
          <HeroSection />
        </motion.section>
        <Suspense fallback={<div style={{textAlign:'center',padding:'2rem'}}>Loading...</div>}>
          <motion.section {...fadeIn}>
            <VideoShowcase />
          </motion.section>
          <motion.section {...fadeIn}>
            <IndiaMapSection />
          </motion.section>
          <motion.section {...fadeIn}>
            <DroneRepairSection />
          </motion.section>
          <motion.section {...fadeIn}>
            <PressReleaseSection />
          </motion.section>
          <motion.section {...fadeIn}>
            <StatsSection />
          </motion.section>
          <motion.section {...fadeIn}>
            <TrustedBySection />
          </motion.section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App; 