function canMove(piece, from, to) {
    const columns = "ABCDEFGH";
    const startX = columns.indexOf(from[0]);
    const startY = parseInt(from[1], 10);
    const endX = columns.indexOf(to[0]);
    const endY = parseInt(to[1], 10);

    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);

    switch (piece) {
        case "Pawn":
            return startX === endX && (endY - startY === 1 || (startY === 2 && endY - startY === 2));
        case "Knight":
            return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
        case "Bishop":
            return dx === dy;
        case "Rook":
            return dx === 0 || dy === 0;
        case "Queen":
            return dx === dy || dx === 0 || dy === 0;
        case "King":
            return dx <= 1 && dy <= 1;
        default:
            return false;
    }
}

// ตัวอย่างการใช้งาน
console.log(canMove("Rook", "A8", "B8")); // true
console.log(canMove("Bishop", "A7", "G1")); // true
console.log(canMove("Queen", "C4", "D6")); // false
