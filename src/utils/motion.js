export const slideInVariant = (slideFrom, delay) => {
    return {
        initial: {
            opacity: 0,
            scale: 0.5,
            x: slideFrom === 'left' ? '-100%' : slideFrom === 'right' ? '100%' : '0%',
            y: slideFrom === 'up' ? '-100%' : slideFrom === 'down' ? '100%' : '0%'
        },
        show: {
            opacity: 1,
            scale: 1,
            x: '0%',
            y: '0%',
            transition: {
                duration: 0.8,
                delay: delay || 0.1,
            },
        }
    };
};

export const zoomVariant = () => {
    return {
        initial: {
            opacity: 0,
            scale: 0,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8
            }
        }
    }
}

export const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
