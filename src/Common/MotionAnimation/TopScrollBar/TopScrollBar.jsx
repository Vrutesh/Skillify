import { motion, useScroll } from "framer-motion";
import "./TopScrollBar.css";

export default function TopSceollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
