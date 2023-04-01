const customPointer = document.getElementById('custom-pointer');

document.onpointermove = function (e) {
    // const customPointerDiameter = Number.parseInt(customPointer.style.width); 
    const x = Math.round(e.pageX) - 10;
    const y = Math.round(e.pageY) - 10;
    customPointer.style.transform = "translate(" + x + "px, " + y + "px)";
};

// document.body.onpointermove = function (e) {};