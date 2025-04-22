let draggableElement = document.getElementById('draggableElement');
let offsetX, offsetY;

draggableElement.addEventListener('mousedown', startDragging);
draggableElement.addEventListener('mouseup', stopDragging);

function startDragging(e) {
    e.preventDefault();
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;
    draggableElement.classList.add('dragging');
    document.addEventListener('mousemove', dragElement);
}

function dragElement(e) {
    e.preventDefault();
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    draggableElement.style.left = x + 'px';
    draggableElement.style.top = y + 'px';
}

function stopDragging() {
    draggableElement.classList.remove('dragging');
    document.removeEventListener('mousemove', dragElement);
}