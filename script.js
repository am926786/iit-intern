const data = [
    { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.631, packaging: "Bag", packSize: 100.00, unit: "kg", quantity: 6495.18 },
    { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100.00, unit: "kg", quantity: 8751.90 },
    { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75.00, unit: "L", quantity: 5964.61 },
    { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105.00, unit: "kg", quantity: 8183.73 },
    { id: 5, name: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105.00, unit: "kg", quantity: 4154.33 },
    { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250.00, unit: "kg", quantity: 8749.54 }
];

function loadTableData() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = `<tr onclick="selectRow(this)">
            <td>${item.id}</td>
            <td contenteditable="true">${item.name}</td>
            <td contenteditable="true">${item.vendor}</td>
            <td contenteditable="true">${item.density}</td>
            <td contenteditable="true">${item.viscosity}</td>
            <td contenteditable="true">${item.packaging}</td>
            <td contenteditable="true">${item.packSize}</td>
            <td contenteditable="true">${item.unit}</td>
            <td contenteditable="true">${item.quantity}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

let selectedRow = null;

function selectRow(row) {
    if (selectedRow) {
        selectedRow.classList.remove('selected');
    }
    selectedRow = row;
    selectedRow.classList.add('selected');
}

function sortTable(columnIndex) {
    data.sort((a, b) => {
        const key = Object.keys(a)[columnIndex];
        return a[key] > b[key] ? 1 : -1;
    });
    loadTableData();
}

function addRow() {
    const newRow = { id: data.length + 1, name: "New Chemical", vendor: "", density: 0, viscosity: 0, packaging: "", packSize: 0, unit: "", quantity: 0 };
    data.push(newRow);
    loadTableData();
}

function moveRowUp() {
    if (selectedRow) {
        const index = selectedRow.rowIndex - 1;
        if (index > 0) {
            const temp = data[index];
            data[index] = data[index - 1];
            data[index - 1] = temp;
            loadTableData();
            selectRow(document.getElementById('tableBody').rows[index - 1]);
        }
    }
}

function moveRowDown() {
    if (selectedRow) {
        const index = selectedRow.rowIndex - 1;
        if (index < data.length - 1) {
            const temp = data[index];
            data[index] = data[index + 1];
            data[index + 1] = temp;
            loadTableData();
            selectRow(document.getElementById('tableBody').rows[index + 1]);
        }
    }
}

function deleteRow() {
    if (selectedRow) {
        const index = selectedRow.rowIndex - 1;
        data.splice(index, 1);
        loadTableData();
        selectedRow = null;
    }
}

function refreshData() {
    loadTableData();
}

function saveData() {
    console.log("Data saved:", data);
    alert("Data saved!");
}

window.onload = loadTableData;
