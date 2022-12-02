import React,{useEffect,useRef} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Card = ({id,divId,setActive,title,year}) => {
    const control = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            console.log(id);
            setActive(id)
        }
    }, [inView])

    const headingAnimate = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const spanAnimate = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    };

    const divAnimate = {
        hidden: {
            opacity: 0.3,
            scaleX: 0.95,
        },
        visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: 0.7,
            },
        },
    };
    return (
        <motion.div
            id={divId}
            ref={ref}
            variants={divAnimate}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: false,
                amount: 0.5,
            }}
            className=" w-[60%] h-[90vh] relative rounded-xl overflow-hidden shadow-lg "
        >
            <img src={`/${divId}.jpg`} alt="Nextjs Logo" className="w-full" />
            <motion.h2
                variants={headingAnimate}
                initial="hidden"
                whileInView="visible"
                className="absolute bottom-0 left-0 p-10 text-white font-bold text-4xl"
            >
                {title}{" "}
                <motion.span
                    initial="hidden"
                    whileInView="visible"
                    variants={spanAnimate}
                    className="font-normal text-gray-300"
                >
                    {year}
                </motion.span>
            </motion.h2>
        </motion.div>
    );
};

export default Card;
