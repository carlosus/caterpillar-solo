import addDonut from '../src/add-donut.js'
const test = QUnit.test;
 
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
})