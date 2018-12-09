//simple function to add 2 numbers.
function addTwoNumbers(x, y) {
  return x + y;
}

//function to add 2 numbers, then see if their result
//matches the function's internal testing logic (5 + 1 = 6).
//then, output the Failed or Passed result.
function testAddTwoNumbers() {
  var x = 5;
  var y = 1;
  var sum1 = x + y;
  var sum2 = addTwoNumbers(5,1);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');

  if ( sum1 === sum2)
    return console.log('Passed.');

  console.log('Failed.');
}

testAddTwoNumbers();
