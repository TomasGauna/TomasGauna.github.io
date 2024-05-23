// "use client"

// import React, { useEffect, useRef } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';

// interface Props {
//     children: React.ReactNode;
//     width?: "fit-content" | "100%";
//     delay?: number;
//     duration?: number;
// }

// export const Reveal = ({ children, width = "fit-content", delay = 0.25, duration = 0.5 }: Props) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const mainControls = useAnimation();
//     const slideControls = useAnimation();

//     useEffect(() => {
//         if (isInView) {
//             mainControls.start("visible");
//             slideControls.start("visible");
//         }
//     }, [isInView, mainControls, slideControls]);

//     return (
//         <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }}>
//             <motion.div
//                 variants={{
//                     hidden: { opacity: 0, y: 75 },
//                     visible: { opacity: 1, y: 0 },
//                 }}
//                 initial="hidden"
//                 animate={mainControls}
//                 transition={{ duration, delay }}
//             >
//                 {children}
//             </motion.div>

//             <motion.div
//                 variants={{
//                     hidden: { left: 0 },
//                     visible: { left: "100%" },
//                 }}
//                 initial="hidden"
//                 animate={slideControls}
//                 transition={{ duration, ease: "easeIn" }}
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background: "var(--brand)",
//                     zIndex: 10,
//                 }}
//             />
//         </div>
//     );
// }


"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    width?: string;
    delay?: number;
    duration?: number;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25, duration = 0.5 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0, width: '100%' },
                    visible: { left: '100%', width: 0 },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration, ease: "easeIn" }}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    background: "var(--brand)",
                    zIndex: 10,
                }}
            />
        </div>
    );
}
