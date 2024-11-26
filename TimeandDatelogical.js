// กำหนดวันและเวลา 2 ค่า (ใช้รูปแบบ 'YYYY-MM-DD HH:mm:ss')
let date1 = new Date('2024-11-25 14:30:00');
let date2 = new Date('2024-11-26 18:45:00');

// คำนวณความแตกต่างในมิลลิวินาที
let timeDifference = date2 - date1;

// แปลงจากมิลลิวินาทีเป็นชั่วโมงและนาที
let hours = Math.floor(timeDifference / (1000 * 60 * 60)); // แปลงเป็นชั่วโมง
let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // แปลงเป็นนาที

// แสดงผลลัพธ์
console.log(`ความแตกต่างคือ ${hours} ชั่วโมง ${minutes} นาที`);
