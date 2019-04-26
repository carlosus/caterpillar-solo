const test = QUnit.test;

function addDonut(parentElement, donutFlavor) {
    const span = document.createElement('span');
    span.classList.add('part');
    span.classList.add(donutFlavor);

    parentElement.appendChild(span);
}

test('append selected donut to dog element', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const donutFlavor = 'purple-donut';
    const dogParentElement = document.createElement('div');
    const expected = '<span class="part purple-donut"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    addDonut(dogParentElement, donutFlavor);

    //Assert
    const parentInnerHTML = dogParentElement.innerHTML; 
    assert.equal(parentInnerHTML, expected);
});