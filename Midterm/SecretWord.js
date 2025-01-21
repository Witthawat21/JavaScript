function secretWord(str, len) {
    for (let i = 0; i <= str.length - len * 3; i++) {
        const triplets = str.slice(i, i + len * 3).match(/.{3}/g);
        const values = triplets.map(t => t.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0));

        if (values.every((v, idx, arr) => idx === 0 || v - arr[idx - 1] === arr[1] - arr[0])) {
            return triplets.map(t => t[1]).join('');
        }
    }
    return '';
}

// ตัวอย่างการใช้งาน
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); // "brake"
console.log(secretWord("aheiyad", 3)); // "hey"
