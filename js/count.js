const plusBed = document.getElementById('plusBed');

plusBed.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('bedroomCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    const newValue = previousValue + 1;
    document.getElementById('bedroomCount').value = newValue + " " + arr[1];

});

const minusBed = document.getElementById('minusBed');

minusBed.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('bedroomCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    if (previousValue > 0) {
        const newValue = previousValue - 1;
        document.getElementById('bedroomCount').value = newValue + " " + arr[1];
    }
    else {
        document.getElementById('bedroomCount').value = 0 + " " + arr[1];
    }
});

const plusBath = document.getElementById('plusBath');

plusBath.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('bathroomCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    const newValue = previousValue + 1;
    document.getElementById('bathroomCount').value = newValue + " " + arr[1];

});

const minusBath = document.getElementById('minusBath');

minusBath.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('bathroomCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    if (previousValue > 0) {
        const newValue = previousValue - 1;
        document.getElementById('bathroomCount').value = newValue + " " + arr[1];
    }
    else {
        document.getElementById('bathroomCount').value = 0 + " " + arr[1];
    }
});

const plusDraw = document.getElementById('plusDraw');

plusDraw.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('drawingCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    const newValue = previousValue + 1;
    document.getElementById('drawingCount').value = newValue + " " + arr[1] + " " + arr[2];

});

const minusDraw = document.getElementById('minusDraw');

minusDraw.addEventListener('click', function (event) {
    event.preventDefault();
    const bedroomValue = document.getElementById('drawingCount').value;
    const arr = bedroomValue.split(" ");
    const previousValue = parseInt(arr[0]);
    if (previousValue > 0) {
        const newValue = previousValue - 1;
        document.getElementById('drawingCount').value = newValue + " " + arr[1] + " " + arr[2];
    }
    else {
        document.getElementById('drawingCount').value = 0 + " " + arr[1] + " " + arr[2];
    }
});

document.getElementById('txtDate').min = new Date().toISOString().substring(0, 10);