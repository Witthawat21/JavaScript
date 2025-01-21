function sumTwoSmallestNums(numbers) {
    const positiveNums = numbers.filter(num => num > 0); // กรองเฉพาะตัวเลขบวก
    const sortedNums = positiveNums.sort((a, b) => a - b); // เรียงจากน้อยไปมาก
    return sortedNums[0] + sortedNums[1]; // บวกสองตัวแรก
}

// ตัวอย่างการใช้งาน
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])); // 8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); // 563
