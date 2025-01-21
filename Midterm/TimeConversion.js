function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600) % 24; // คำนวณชั่วโมง (วนกลับเมื่อเกิน 24 ชม.)
    const minutes = Math.floor((seconds % 3600) / 60); // คำนวณนาที
    const secs = seconds % 60; // คำนวณวินาที
    
    // แปลงตัวเลขให้เป็น 2 หลักเสมอ
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ตัวอย่างการใช้งาน
console.log(digitalClock(5025)); // "01:23:45"
console.log(digitalClock(61201)); // "17:00:01"
console.log(digitalClock(87000)); // "00:10:00"
