function highestDigit(num) {
    const digits = String(num).split(""); // แปลงตัวเลขเป็น string และแยกเป็น array
    return Math.max(...digits.map(Number)); // หาค่าสูงสุดใน array
}

// ตัวอย่างการใช้งาน
console.log(highestDigit(379));    // 9
console.log(highestDigit(2));      // 2
console.log(highestDigit(377401)); // 7
