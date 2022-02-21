function drTableDetails() {
  window.location.href = "drTableDetails.html";
};

function editCategory() {
  document.getElementById('categoryTable').classList.add('col-md-7');
  document.getElementById('categoryEdit').removeAttribute("hidden");
};

function fullTable() {
  document.getElementById('categoryEdit').setAttribute("hidden", true);
  document.getElementById('categoryTable').classList.remove('col-md-7');
};



function deactivate(number) {
  const activeList = document.getElementsByClassName('activeLabel');
  const active = document.getElementsByClassName('activeSwitch');
  const activeInt = parseInt(active[number].value);

  if (activeInt === 0) {
    active[number].value = 1;
    activeList[number].innerHTML = "inactive";
  }
  else {
    active[number].value = 0;
    activeList[number].innerHTML = "active";
  }
};