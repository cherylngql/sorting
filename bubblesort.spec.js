describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swapWithNext').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('handles an empty array', function(){
    expect(bubbleSort( [] )).toEqual( [] );
  });
  it('sorts an array from smallest to largest', function(){
    expect(bubbleSort([20, 8, 5, 34, 51, 55, 2, 1])).toEqual([1, 2, 5, 8, 20, 34, 51, 55]);
  });
  it('sorting involves 16 swaps', function () {
    expect(swapWithNext.calls.count()).toEqual(16);
  });
});
