import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealImage = ({ src, alt, className, ...props }) => {
    const imgRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle color when image is roughly 40-60% visible (center of screen)
                setIsInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5, // Trigger when 50% of the item is visible
                rootMargin: "-10% 0px -10% 0px" // Narrow the "active" area slightly to focus on center
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    // Logic:
    // Base: w-full h-full object-cover transition-all duration-700
    // Mobile Default: grayscale
    // Mobile In-View: grayscale-0 (via style/class)
    // Desktop: lg:grayscale lg:hover:grayscale-0 (controlled by Tailwind classes passed in, or default)

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            {...props}
            className={`${className} ${isInView ? 'grayscale-0' : 'grayscale'}`}
        />
    );
};

export default ScrollRevealImage;
