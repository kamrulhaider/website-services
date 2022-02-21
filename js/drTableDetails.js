function editCategory() {
  document.getElementById('categoryEdit').removeAttribute("hidden");
}

function fullTable() {
  document.getElementById('categoryEdit').setAttribute("hidden", true);
}



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
}