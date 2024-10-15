import { motion, px } from "framer-motion";

export const FlowerAnimation = ({ isVisible }: { isVisible: boolean }) => {
  const flowers = ["🌸", "🌼", "🌷", "🌹", "💖", "❤️"];
  return (
    <div className="relative w-full">
      {isVisible &&
        flowers.map((flower, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: [0, -50, 0] }}
            transition={{
              duration: 2,
              delay: index * 0.5,
              repeat: 1,
              yoyo: true,
            }}
            className="absolute text-2xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {flower}
          </motion.div>
        ))}
    </div>
  );
};

export const sendEmail = () => {
  window.location.href = "mailto:zeyulong0908@gmail.com?subject=Hello";
};
