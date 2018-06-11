function split(wholeArray) {
  let splitPoint = Math.floor((wholeArray.length + 1) / 2)
  return [wholeArray.slice(0, splitPoint), wholeArray.slice(splitPoint)];
}

function merge(splittedArr) {
  let arr1 = splittedArr[0];
  let arr2 = splittedArr[1];
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  if (arr1[i]) {
    mergedArray = mergedArray.concat(arr1.slice(i));
  } else {
    mergedArray = mergedArray.concat(arr2.slice(j));
  }
  return mergedArray;
}

// [5,3,1]
// [[5,3],[1]] anytime, only 2 ele in arr
// [[[5],[3]],[1]] split is done!
// [[5,3],[1]]
// [1,3,5]

// mergeSort(array)
// arr1 = split(array)[0] arr2=split(array)[1]

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let arr1 = split(array)[0], arr2 = split(array)[1];
    return merge([mergeSort(arr1), mergeSort(arr2)]);
  }
}
