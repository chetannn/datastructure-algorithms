function binarySearch(arr, val) {
    var left = 0;
    var right = arr.length - 1;

    while(left <= right) {
       var mid = Math.floor((left + right) / 2);
       if(arr[mid] === val) return true;
       else if(arr[mid] < val) left = mid + 1;
       else right = mid + 1;
    }
    return false;
}

console.log(binarySearch([1,2,3,4,5], 5));