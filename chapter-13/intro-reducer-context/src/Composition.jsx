import { motion } from 'motion/react';
export function Frame({ children }) {
    return (
        <div style={{ width: '200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ scale: 2, transition: { duration: 2 }, opacity: 1 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
