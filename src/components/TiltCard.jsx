
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
  });

  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((centerY - y) / centerY) * 7);
    rotateY.set(((x - centerX) / centerX) * 7);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
