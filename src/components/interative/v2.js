export default {
    add(...v) {
        return v.reduce((a, b) => a.map((x, i) => x + b[i]))
    },
    sub(a, b) {
        return a.map((x, i) => x - b[i])
    },
    scale(a, f) {
        return a.map(x => x * f)
    },
    dot(a, b) {
        return a.map((x, i) => x * b[i]).reduce((a, b) => a + b)
    },
    cross(a, b) {
        return a[0] * b[1] - a[1] * b[0]
    },
    lensq(a) {
        return a.map(x => x * x).reduce((a, b) => a + b)
    },
    len(a) {
        return Math.sqrt(this.lensq(a))
    },

    normalize(a) {
        let l = this.len(a)
        return this.scale(a, 1 / l)
    }
}