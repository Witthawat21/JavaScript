function isAdditiveSequence(num) {
    function isValid(start, n1, n2) {
        if (start === num.length) return true;

        let sum = (BigInt(n1) + BigInt(n2)).toString();
        return num.startsWith(sum, start) && isValid(start + sum.length, n2, sum);
    }

    for (let i = 1; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let n1 = num.slice(0, i);
            let n2 = num.slice(i, j);

            if ((n1[0] === '0' && n1.length > 1) || (n2[0] === '0' && n2.length > 1)) continue;

            if (isValid(j, n1, n2)) return true;
        }
    }

    return false;
}

// ตัวอย่างการเรียกใช้งาน
console.log(isAdditiveSequence("112358")); // true
console.log(isAdditiveSequence("199100199")); // true
console.log(isAdditiveSequence("123456789")); // false
console.log(isAdditiveSequence("300450075007")); // true
