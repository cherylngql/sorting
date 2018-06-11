describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[1, 3, 5], [2, 6, 8, 10]])).toEqual([1, 2, 3, 5, 6, 8, 10]);
  });
});
describe('MergeSort function', function(){
  it('is able to sort array', function(){
    expect(mergeSort([3,6,8,1,2])).toEqual([1,2,3,6,8]);
  });
});
