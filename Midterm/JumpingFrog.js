function jumpingFrog(n, stones) {
    const queue = [[0, 0]]; // [position, jumps]
    const visited = new Set();

    while (queue.length > 0) {
        const [pos, jumps] = queue.shift();
        if (pos === n) return jumps;

        if (!visited.has(pos)) {
            visited.add(pos);

            for (let nextPos = 0; nextPos < stones.length; nextPos++) {
                if (nextPos !== pos && Math.abs(nextPos - pos) === stones[pos]) {
                    queue.push([nextPos, jumps + 1]);
                }
            }
        }
    }

    return "no chance :-(";
}

// ตัวอย่างการใช้งาน
console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // 4
console.log(jumpingFrog(5, [1, 1, 0, 0, 1])); // "no chance :-("
