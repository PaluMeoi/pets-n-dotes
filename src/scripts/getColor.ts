export function getColor(i: string, colors: string[]) {
    let x = i.split("");
    const y = x.reduce((a, b) => (
        b.charCodeAt(0) + (a << 6) + (a << 16) - a), 0
    )
    const idx = Math.abs(y) % colors.length
    return colors[idx]
}