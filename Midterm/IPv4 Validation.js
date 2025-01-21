function isValidIP(ip) {
    // แยกค่า IP ด้วยเครื่องหมายจุด
    const parts = ip.split('.');
    if (parts.length !== 4) return false; // IPv4 ต้องมี 4 ส่วน

    for (let part of parts) {
        if (!/^\d+$/.test(part)) return false; // ตรวจสอบว่ามีแค่ตัวเลข
        const num = Number(part);
        if (num < 0 || num > 255 || String(num) !== part) return false; // ตรวจสอบช่วงและนำหน้าด้วย 0
    }

    return true;
}

// ตัวอย่างการใช้งาน
console.log(isValidIP("1.2.3.4")); // true
console.log(isValidIP("1.2.3")); // false
console.log(isValidIP("1.2.3.4.5")); // false
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("123.456.78.90")); // false
console.log(isValidIP("123.045.067.089")); // false
