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



// const someCheck = new Date().toISOString().split("T");
// let newDate = someCheck[0].substring(8, 10);
// let newTime = new Date().getUTCDate();
// let finalDate;
// if (parseInt(newTime) >= 18 && parseInt(newTime) <= 10) {
//     const dateParse = "0" + (parseInt(newDate) + 1);
//     finalDate = new Date().toISOString().substring(0, 8) + dateParse;
// } else {
//     finalDate = new Date().toISOString().substring(0, 10);
// }

// console.log(newTime)
// document.getElementById('txtDate').min = finalDate;

// document.getElementById('txtDate').min = ;

const date = new Date().getDate();
let dateVal;
if (date < 10) {
    dateVal = "0" + date;
} else {
    dateVal = date;
}
const month = new Date().getMonth() + 1;
let monthVal;
if (month < 10) {
    monthVal = "0" + month;
} else {
    monthVal = month;
}
const year = new Date().getFullYear();
const time = new Date().getHours();
let finalDate;
if (time >= 16) {
    finalDate = year + "-" + monthVal + "-" + dateVal;
} else {
    finalDate = new Date().toISOString().substring(0, 10);
}

document.getElementById('txtDate').min = finalDate;
console.log(finalDate, dateVal)