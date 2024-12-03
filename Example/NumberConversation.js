let num1 = '150';
let float1 = '1.50';  // แก้ตัวแปรจาก float เป็น float1

console.log("**********Converting strings to integers**********");
console.log(parseInt('100'));  // แปลงจาก string เป็น integer
console.log(parseFloat(num1));  // แปลงจาก string เป็น float
console.log(parseFloat('ABC'));  // จะเป็น NaN เพราะไม่สามารถแปลงเป็น number ได้
console.log(parseFloat('0xFE'));  // แปลงเลขฐาน 16 เป็น number (เลขฐานสิบหก)
console.log(parseFloat("1.25abc"));  // แปลงเป็น 1.25 เนื่องจาก parseFloat จะหยุดที่อักษรตัวแรกที่ไม่ใช่ตัวเลข
console.log(parseFloat(float1));  // แก้ตัวแปรจาก float1 ซึ่งเป็น '1.50'
console.log(parseFloat('ABC'));  // จะได้ NaN เพราะไม่สามารถแปลงได้

console.log("**********More Conversion Example**********");

console.log(parseFloat('1.+'));  // จะเป็น 1 เนื่องจาก parseFloat จะอ่านแค่ตัวเลขที่ถูกต้องก่อน
console.log(parseFloat('1 + 1'));  // จะได้ 1 เพราะ parseFloat จะหยุดที่เครื่องหมายบวก

console.log(parseInt('1 + 1'));  // จะได้ 1 เพราะ parseInt จะหยุดที่ตัวอักษรที่ไม่ใช่ตัวเลข

console.log("**********Converting number to strings**********");
console.log(num1.toString());  // แปลงตัวแปร num1 (string) เป็น string ซึ่งยังคงเป็น '150'
console.log(float1.toString());  // แปลง float1 (string) เป็น string ซึ่งยังคงเป็น '1.50'
console.log((100).toString());  // แปลงตัวเลข 100 เป็น string, จะได้ '100'

