function showSubCategory() {
    const mainService = document.getElementById('serviceCategory').value;
    const mainServiceValue = parseInt(mainService);
    if (mainServiceValue > 0) {
        document.getElementById('title-one').removeAttribute('hidden');
        document.getElementById('title-two').removeAttribute('hidden');
        document.getElementById('title-three').removeAttribute('hidden');
        document.getElementById('title-four').removeAttribute('hidden');
    }
    else {
        document.getElementById('title-one').setAttribute('hidden', true);
        document.getElementById('title-two').setAttribute('hidden', true);
        document.getElementById('title-three').setAttribute('hidden', true);
        document.getElementById('title-four').setAttribute('hidden', true);
    }
}