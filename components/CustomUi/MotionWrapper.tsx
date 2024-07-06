import { AnimatePresence, motion } from "framer-motion";

type MotionWrapperProps = {
    children: React.ReactNode;
    key: number | string;
}

const MotionWrapper = ({ children, key } : MotionWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionWrapper;