function editCategory() {
    document.getElementById('categoryTable').classList.add('col-md-7');
    document.getElementById('categoryEdit').removeAttribute("hidden");
}

function fullTable() {
    document.getElementById('categoryEdit').setAttribute("hidden", true);
    document.getElementById('categoryTable').classList.remove('col-md-7');
}

function deactivate() {
    const active = document.getElementById('activeSwitch').value;
    const activeInt = parseInt(active);
    if (activeInt === 0) {
        document.getElementById('activeSwitch').value = 1;
    }
    else {
        document.getElementById('activeSwitch').value = 0;
    }
}