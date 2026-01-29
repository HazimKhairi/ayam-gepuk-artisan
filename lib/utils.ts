import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

export function mapRange(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
): number {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
}

export function getFrameIndex(scrollProgress: number, totalFrames: number): number {
    return Math.floor(scrollProgress * (totalFrames - 1));
}
