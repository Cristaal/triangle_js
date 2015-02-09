describe('triangleCalculator', function() {
  it ('returns false if the length of sides are equal to or less than zero', function() {
	triangleCalculator(0, 1, 2).should.equal(false);
  });

  it ('returns false if the length of one side is greater than the sum of the other two', function() {
  	triangleCalculator(4, 4, 10).should.equal(false);
  });

  it ('returns true if the length of sides are equal', function() {
  	triangleCalculator(3, 3, 3).should.equal('equilateral');
  });
  
  it ('returns true if the length of any two sides are equal', function() {
  	triangleCalculator(1, 1, 2).should.equal('isoceles');
  });

  it ('returns true if the length of sides are not equal', function() {
  	triangleCalculator(1, 2, 3).should.equal('scalene');
  });

});
