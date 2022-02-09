const editIcon = document.getElementsByClassName("editIcon");
const categoryExistingName = document.getElementsByClassName("docCategoryName");
let count;
for (let i = 0; i < editIcon.length; i++) {
  editIcon[i].addEventListener("click", function triggerModal() {
    // console.log(i);
    const categoryExistingNameText = categoryExistingName[i].innerHTML;
    const editInputField = document.getElementById("docCategoryNameEdit");
    editInputField.value = categoryExistingNameText;
    count = i;
  })
};

document.getElementById("changeCategoryName").addEventListener("click", function () {
  const newInput = document.getElementById("docCategoryNameEdit").value;
  categoryExistingName[count].innerHTML = newInput;
}
);