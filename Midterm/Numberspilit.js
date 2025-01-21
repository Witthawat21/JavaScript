function numberSplit(num) {
    const left = Math.floor(num / 2); // ครึ่งซ้าย
    const right = Math.ceil(num / 2); // ครึ่งขวา
    return [left, right];
}

// ตัวอย่างการใช้งาน
console.log(numberSplit(4));  // [2, 2]
console.log(numberSplit(10)); // [5, 5]
console.log(numberSplit(11)); // [5, 6]
console.log(numberSplit(-9)); // [-5, -4]
