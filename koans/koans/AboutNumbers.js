describe('about a number', function() {

  it('should encompass all the numeric things', function() {
    expect(0).toHaveType(FILL_ME_IN);
    expect(3.5).toHaveType(FILL_ME_IN);
    expect(.3333).toHaveType(FILL_ME_IN);
    expect(3.54e23).toHaveType(FILL_ME_IN);
    expect(NaN).toHaveType(FILL_ME_IN);
  });

  it('should know when to be truthy and falsy', function() {
    var negative = -1,
        zero = 0;

    expect(FILL_ME_IN_TOO).toBeTruthy();
    expect(FILL_ME_IN).toBeFalsy();
  });


  it('should be capable of arithmetic', function() {
    expect(4 + 4).toEqual(FILL_ME_IN);
    expect(7 - 4).toEqual(FILL_ME_IN);
    expect(8 * 8).toEqual(FILL_ME_IN);
    expect(14 / 7).toEqual(FILL_ME_IN);
  });

  it('should allow concatenation with a string', function() {
    expect('4' + 3).toEqual(FILL_ME_IN);
  });

  it('should know what a number is', function() {
    var result = 0 / 0;
    expect(isNaN(result)).toBe(FILL_ME_IN);
  });

});
