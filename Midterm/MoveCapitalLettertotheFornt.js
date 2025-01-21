function capToFront(str) {
    const upperCase = str.split("").filter(char => char === char.toUpperCase()); // ตัวพิมพ์ใหญ่
    const lowerCase = str.split("").filter(char => char === char.toLowerCase()); // ตัวพิมพ์เล็ก
    return upperCase.join("") + lowerCase.join(""); // รวมกัน
}

// ตัวอย่างการใช้งาน
console.log(capToFront("hApPy"));       // "APhpy"
console.log(capToFront("moveMENT"));    // "MENTmove"
console.log(capToFront("shOrtCAKE"));   // "OCAKEshrt"
