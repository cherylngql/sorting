
function swapWithNext(arr, j) {
  let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function bubbleSort(arr) {
  let lastUnsorted = arr.length - 1;
  // O(n^2)
  while (lastUnsorted > 0) {
    for (let j = 0; j < lastUnsorted; j++) {
    if (arr[j] > arr[j + 1]) {
      swapWithNext(arr, j);
    }
    }
    lastUnsorted--;
  }
  return arr;
}
