const customPointer = document.getElementById('custom-pointer');

const skillTiles = document.getElementsByClassName('skill-item');

for (let i = 0; i < skillTiles.length; i++) {
    const skillTile = skillTiles[i];
    skillTile.onpointerenter = (e) => {
        customPointer.style.opacity = '0';
    };
    skillTile.onpointerleave = (e) => {
        customPointer.style.opacity = '1';
    };
}

function putCustomPointerTo(x, y) {
    customPointer.style.transform = "translate(" + x + "px, " + y + "px)";
}

function resizeCustomPointer(radius) {
    customPointer.style.width = radius + 'px';
    customPointer.style.height = radius + 'px';
}

function getXCoordinate(radius, x) {
    return Math.round(x) - radius / 2;
}

document.onpointermove = function (e) {
    const radius = 20;
    const x = getXCoordinate(radius, e.pageX);
    const y = getXCoordinate(radius, e.pageY);
    putCustomPointerTo(x, y);
};

document.onscroll = (e) => {
    const radius = 20;
    const x = getXCoordinate(radius, e.pageX);
    const y = getXCoordinate(radius, e.pageY);
    putCustomPointerTo(x, y);
};

document.onpointerdown = function (e) {
    resizeCustomPointer(40);
    setTimeout(
        resizeCustomPointer(20),
        1000,
    );
}

document.onpointerup = function (e) {
    resizeCustomPointer(20);
}