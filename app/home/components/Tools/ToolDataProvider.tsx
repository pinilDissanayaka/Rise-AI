"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    description?: string;
    tool_name?: string;
}

const ToolDataProvider = ({ src, width, height, index, description, tool_name } : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
            className="flex flex-col items-center justify-center max-w-[300px] text-center"
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={tool_name || 'Service image'}
                className="mb-4"
            />
            {tool_name && (
                <h3 className="text-xl font-bold text-[#939aff] mb-2">{tool_name}</h3>
            )}
            {description && (
                <p className="text-white/80 text-sm">{description}</p>
            )}
        </motion.div>
    )
}

export default ToolDataProvider