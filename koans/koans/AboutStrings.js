describe('about a string', function() {

  it('should have a known type', function() {
    expect(typeof('what am i?')).toBe(FILL_ME_IN);
  })

  it("should know it's length", function() {
    var hello = 'hello world';
    expect(hello.length).toEqual(FILL_ME_IN);

    var empty = '';
    expect(empty.length).toEqual(FILL_ME_IN); 
  });

  it('should know when to be truthy and falsy', function() {
    var something = 'something',
        nothing = '';

    expect(FILL_ME_IN_TOO).toBeTruthy();
    expect(FILL_ME_IN).toBeFalsy();
  });

  it('should be aware of characters', function() {
    var str = 'hello';

    expect(str[1]).toBe(FILL_ME_IN);
  });

  it('should know how to capitalize itself', function() {
    var str = 'hello';

    expect(str.fillMeInAsTheRightMethod()).toBe('HELLO');
  });

});