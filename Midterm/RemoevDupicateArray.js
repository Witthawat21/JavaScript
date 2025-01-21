function removeDups(arr) {
    return [...new Set(arr)]; // ใช้ Set เพื่อเก็บค่าไม่ซ้ำ
}

// ตัวอย่างการใช้งาน
console.log(removeDups([1, 0, 1, 0]));                // [1, 0]
console.log(removeDups(["The", "big", "cat", "big"])); // ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"]));   // ["John", "Taylor"]
