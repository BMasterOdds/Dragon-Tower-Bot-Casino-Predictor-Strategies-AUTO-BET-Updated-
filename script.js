const columnsInput = document.getElementById('columns');
const predictButton = document.getElementById('predict');
const towerTable = document.querySelector('.tower table');

function generateTower(columns) {
    towerTable.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        towerTable.appendChild(row);
    }
}

function predictPath() {
    const columns = parseInt(columnsInput.value);
    generateTower(columns);

    // Generate a random path (replace with your desired logic)
    const path = generateRandomPath(columns);

    // Update the tower cells with path colors
    for (let i = 0; i < path.length; i++) {
        const cell = towerTable.rows[i].cells[path[i]];
        cell.style.backgroundColor = path[i]; // Assuming path values are color codes
    }
}

// Function to generate a random path (adjust as needed)
function generateRandomPath(columns) {
    const path = [];
    for (let i = 0; i < 9; i++) {
        path.push(Math.floor(Math.random() * columns));
    }
    return path;
}

predictButton.addEventListener('click', predictPath);