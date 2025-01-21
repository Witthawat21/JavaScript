function frequencySort(s) {
    const freqMap = {};

    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    return [...s]
        .sort((a, b) =>
            freqMap[b] - freqMap[a] || // เรียงตามความถี่
            b.localeCompare(a) || // ตัวใหญ่ก่อนตัวเล็ก
            a.localeCompare(b) // เรียงตามลำดับตัวอักษร
        )
        .join("");
}

// ตัวอย่างการใช้งาน
console.log(frequencySort("tree")); // "eert"
console.log(frequencySort("cccaaa")); // "aaaccc"
console.log(frequencySort("Aabb")); // "bBaA"
