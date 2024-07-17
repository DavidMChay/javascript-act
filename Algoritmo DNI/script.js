document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dniNumber = parseInt(document.getElementById('dniNumber').value);
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    if (dniNumber >= 0 && dniNumber <= 99999999) {
        const letter = letters[dniNumber % 23];
        document.getElementById('result').textContent = `La letra de tu DNI es: ${letter}`;
    } else {
        document.getElementById('result').textContent = 'Número de DNI no válido. Debe estar entre 0 y 99999999.';
    }
});
