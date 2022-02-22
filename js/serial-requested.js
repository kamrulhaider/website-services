
const serialStatus = document.getElementsByClassName("serial-status");
console.log(serialStatus)
function serialChange(row) {
  const serialValue = serialStatus[row].value;
  if (parseInt(serialValue) > 0) {
    serialStatus[row].setAttribute("disabled", true)
  }
};

function editCategory() {
  document.getElementById('categoryTable').classList.add('col-md-7');
  document.getElementById('categoryEdit').removeAttribute("hidden");
}

function fullTable() {
  document.getElementById('categoryEdit').setAttribute("hidden", true);
  document.getElementById('categoryTable').classList.remove('col-md-7');
};

function filterSerial() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("request-serial-search");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {

    var rowContent = tr[i].textContent;
    rowContent = rowContent.replace(/[\s]+/g, ' ');
    console.log(rowContent);

    if (rowContent) {
      if (rowContent.toUpperCase().includes(filter)) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }

  }
}