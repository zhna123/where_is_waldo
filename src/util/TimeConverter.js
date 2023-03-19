export const minuteTime = (time) => {
    return Math.floor(time / (1000 * 60));
}

export const secondTime = (time) => {
    return Math.floor((time / 1000) % 60);
}