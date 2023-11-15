import { useInView, useAnimation, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Motion( { children, duration, delay }: { children: React.ReactNode, duration?: number, delay?: number } ) {

    const ref = useRef( null )
    const isInView = useInView( ref, { once: true } )
    const controls = useAnimation()

    useEffect( () => {
        if ( isInView ) {
            controls.start( 'visible' )
        }
    }, [isInView, controls] )

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75, },
                visible: { opacity: 1, y: 0 },
            }}
            whileInView={{ opacity: 1 }}
            initial={"hidden"}
            animate={controls}
            exit={{ scale: 0.2 }}
            transition={{ duration: duration || 1, delay: delay || 0.10 }}
        >
            {children}
        </motion.div>
    )
}
