function bombLocation(sensors) {
    const speedOfSound = 0.343; // km/sec

    const distances = sensors.map(([x, y, t]) => t * speedOfSound);

    const x =
        ((sensors[1][1] - sensors[2][1]) * (Math.pow(distances[0], 2) - Math.pow(distances[1], 2) - Math.pow(sensors[0][0], 2) + Math.pow(sensors[1][0], 2)) -
            (sensors[0][1] - sensors[1][1]) * (Math.pow(distances[1], 2) - Math.pow(distances[2], 2) - Math.pow(sensors[1][0], 2) + Math.pow(sensors[2][0], 2))) /
        (2 * ((sensors[1][1] - sensors[2][1]) * (sensors[0][0] - sensors[1][0]) - (sensors[0][1] - sensors[1][1]) * (sensors[1][0] - sensors[2][0])));

    const y =
        ((sensors[0][0] - sensors[1][0]) * (Math.pow(distances[1], 2) - Math.pow(distances[2], 2) - Math.pow(sensors[1][0], 2) + Math.pow(sensors[2][0], 2)) -
            (sensors[1][0] - sensors[2][0]) * (Math.pow(distances[0], 2) - Math.pow(distances[1], 2) - Math.pow(sensors[0][0], 2) + Math.pow(sensors[1][0], 2))) /
        (2 * ((sensors[1][0] - sensors[2][0]) * (sensors[0][1] - sensors[1][1]) - (sensors[0][0] - sensors[1][0]) * (sensors[1][1] - sensors[2][1])));

    return [Math.round(x), Math.round(y)];
}

// ตัวอย่างการใช้งาน
console.log(bombLocation([[0, 0, 72.886], [50, 0, 72.886], [25, 25, 72.886]])); // [0, 25]
console.log(bombLocation([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // [0, 0]
