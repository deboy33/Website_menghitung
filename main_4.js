function calculateTabung() {
    const radius = parseFloat(document.getElementById('radius-tabung').value);
    const height = parseFloat(document.getElementById('height-tabung').value);
    const area = Math.PI * Math.pow(radius, 2);
    const volume = area * height;
    document.getElementById('result-tabung').innerText = 
        `Luas Alas: ${area.toFixed(2)} \nVolume: ${volume.toFixed(2)}`;
}

function calculateBola() {
    const radius = parseFloat(document.getElementById('radius-bola').value);
    const area = 4 * Math.PI * Math.pow(radius, 2);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('result-bola').innerText = 
        `Luas Permukaan: ${area.toFixed(2)} \nVolume: ${volume.toFixed(2)}`;
}

function calculateLimas() {
    const base = parseFloat(document.getElementById('base-limas').value);
    const height = parseFloat(document.getElementById('height-limas').value);
    const area = Math.pow(base, 2);
    const volume = (1 / 3) * area * height;
    document.getElementById('result-limas').innerText = 
        `Luas Alas: ${area.toFixed(2)} \nVolume: ${volume.toFixed(2)}`;
}
