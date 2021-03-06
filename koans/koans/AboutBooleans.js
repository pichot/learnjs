describe('about a boolean', function() {

  // it('should know its type', function() {
  //   expect(true).toHaveType(true);
  //   expect(false).toHaveType(false);
  // });

  // it('should know about negation', function() {
  //   expect(!true).toBe(false);
  //   expect(!false).toBe(true);
  // });

  // it('should be the result of comparisons', function() {
  //   expect(4 > 3).toBe(true);
  //   expect(4 < 3).toBe(false);
  //   expect(4 <= 4).toBe(true);
  //   expect(5 >= 8).toBe(FILL_ME_IN);
  //   expect(4 == '4').toBe(FILL_ME_IN);
  //   expect(4 === 4).toBe(FILL_ME_IN);
  //   expect(4 === '4').toBe(FILL_ME_IN);
  //   expect(4 == 4).toBe(FILL_ME_IN);
  // });

  // it('should be useful in branching', function() {
  //   var result = 'hello';
  //   if (true) {
  //     result += ' world';
  //   }
  //   expect(result).toEqual(FILL_ME_IN);

  //   var result2 = 'hello';
  //   if (false) {
  //     result2 += ' there';
  //   }
  //   expect(result2).toEqual(FILL_ME_IN);

  //   var result3 = 'say';
  //   if (!true) {
  //     result3 += ' what';
  //   } else {
  //     result3 += ' anything';
  //   }
  //   expect(result3).toEqual(FILL_ME_IN);

  //   var result4 = 'one',
  //       test = 4;

  //   switch(test) {
  //     case 2:
  //       result4 += ' two';
  //       break;
  //     case 3:
  //       result4 += ' three';
  //       break;
  //     case 4:
  //       result4 += ' four';
  //       break;
  //   }
  //   expect(result4).toEqual(FILL_ME_IN);
  // });

  // it('should be useful in looping', function() {
  //   var i = 1,
  //       result = 'blast off!';

  //   while(i < 4) {
  //     result = (i  + ' ' + result);
  //     i++;
  //   }

  //   expect(result).toEqual(FILL_ME_IN);

  //   var chars = ['a', 's', 'b', 'e', 'c', 'c', 'd', 'r', 'e', 'e', 'f', 't'],
  //       result2 = '';

  //   for(var i = 0; i < chars.length; i++) {
  //     var oneMore = i + 1;
  //     if ((oneMore % 2) == 0) {
  //       result2 += chars[i];
  //     }
  //   }

  //   expect(result2).toEqual(FILL_ME_IN);
  // });

  it('should take part in logical expressions', function() {
    expect(true && true).toBe(true);
    expect(true && false).toBe(false);
    expect(false || true).toBe(true);
    expect(true || false).toBe(true);
    expect(true && true && true).toBe(true);

    expect('truthy' && 'burger').toEqual('burger');
    expect(undefined || 'hello').toEqual('hello');
  });

});
