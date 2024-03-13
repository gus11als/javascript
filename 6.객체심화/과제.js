function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i];
        maxWidth = Math.max(maxWidth, Math.max(width, height));
        maxHeight = Math.max(maxHeight, Math.min(width, height));
    }
    
    return maxWidth * maxHeight;
}

// Example usage:
const sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40]
];

console.log(solution(sizes)); // Output: 4000
