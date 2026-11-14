
import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const directions = {
    up: { y: 65, x: 0 },
    down: { y: -65, x: 0 },
    left: { x: 65, y: 0 },
    right: { x: -65, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directions[direction],
        scale: 0.97,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
