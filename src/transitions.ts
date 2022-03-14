export const defaultStyle = (duration = 150) => {
    return {
        transition: `opacity ${duration}ms ease-in-out`,
    }
};

export const fadeStyles: Map<string, any> = new Map([
    ['entering', { opacity: 0 }],
    ['entered', { opacity: 1 }],
    ['exiting', { opacity : 1 }],
    ['exited', { opacity: 0 }],
]);
