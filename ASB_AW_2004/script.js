console.log("Script loaded and running!");

let drag = false;
let offsetX, offsetY, coordX, coordY;

function startDrag(e) {
    e.preventDefault();

    const targ = e.target;
    if (!targ.classList.contains('dragme')) return;

    offsetX = e.clientX;
    offsetY = e.clientY;

    if (!targ.style.left) targ.style.left = '0px';
    if (!targ.style.top) targ.style.top = '0px';

    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = targ;

    document.addEventListener('mousemove', dragDiv);
}

function dragDiv(e) {
    if (!drag) return;

    drag.style.left = coordX + e.clientX - offsetX + 'px';
    drag.style.top = coordY + e.clientY - offsetY + 'px';
}

function stopDrag() {
    drag = false;
    document.removeEventListener('mousemove', dragDiv);
}

// function scaleImage(e) {
//     if (!e.target.classList.contains('dragme')) return;

//     e.preventDefault();

//     let scale = parseFloat(e.target.getAttribute('data-scale')) || 1;
//     if (e.deltaY < 0) {
//         scale += 0.1;
//     } else {
//         scale = Math.max(0.1, scale - 0.1);
//     }
//     e.target.setAttribute('data-scale', scale);
//     e.target.style.transform = `scale(${scale})`;
// }

function scaleImage(e) {
    if (!e.target.classList.contains('dragme')) return;

    e.preventDefault();

    let scale = parseFloat(e.target.getAttribute('data-scale')) || 1;

    // Sensitivity controls the scaling speed — lower = slower
    const sensitivity = 0.001;

    // Adjust scale based on deltaY
    scale += -e.deltaY * sensitivity;

    // Clamp to a minimum and maximum scale
    scale = Math.max(0.1, Math.min(5, scale));

    e.target.setAttribute('data-scale', scale);
    e.target.style.transform = `scale(${scale})`;
}



window.addEventListener('DOMContentLoaded', () => {
    const draggableImages = document.querySelectorAll('.dragme');
    
    draggableImages.forEach(img => {
        img.addEventListener('mousedown', startDrag);
        img.addEventListener('wheel', scaleImage);
    });

    document.addEventListener('mouseup', stopDrag);
});

