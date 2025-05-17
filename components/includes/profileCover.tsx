import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileHeaderProps {
    coverImageSrcs: string[];
    profileImageSrc: string;
    altCover: string;
    altProfile: string;
    transitionInterval?: number;
}

const ProfileCover: React.FC<ProfileHeaderProps> = ({
    coverImageSrcs,
    profileImageSrc,
    altCover,
    altProfile,
    transitionInterval = 3000
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === coverImageSrcs.length - 1 ? 0 : prevIndex + 1
                );
                setIsAnimating(false);
            }, 500);
        }, transitionInterval);

        return () => clearInterval(intervalId);
    }, [coverImageSrcs.length, transitionInterval]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    const direction = 1;

    return (
        <div className="relative">
            <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden rounded-xl">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full h-full"
                    >
                        <Image
                            src={coverImageSrcs[currentImageIndex]}
                            alt={`${altCover} ${currentImageIndex + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                            unoptimized
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {coverImageSrcs.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${currentImageIndex === index
                                ? 'bg-white w-4'
                                : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className="absolute -bottom-16 left-4 md:left-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
            >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                    <Image
                        src={profileImageSrc}
                        alt={altProfile}
                        width={128}
                        height={128}
                        className="rounded-full"
                        priority
                        unoptimized
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCover;