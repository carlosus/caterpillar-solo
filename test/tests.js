import addDonut from '../src/add-donut.js';
const test = QUnit.test;
 
test('append selected donut to dog element', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const donutFlavor = 'purple-donut';
    const mockDog = document.createElement('div');
    const expected = '<span class="part purple-donut"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    addDonut(mockDog, donutFlavor);

    //Assert
    const parentInnerHTML = mockDog.innerHTML; 
    assert.equal(parentInnerHTML, expected);
});