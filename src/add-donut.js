function addDonut(parentElement, donutFlavor) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(donutFlavor);

    parentElement.appendChild(span);
}

export default addDonut;