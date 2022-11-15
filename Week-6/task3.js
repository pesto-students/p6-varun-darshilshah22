
function sort012(a, arr_size) {

    let lo = 0;
    let hi = arr_size - 1;
    let mid = 0;
    let temp = 0;
    
    while (mid <= hi) {
        if (a[mid] == 0) {
            temp = a[lo];
            a[lo] = a[mid];
            a[mid] = temp;
            lo++;
            mid++;
        }

        else if (a[mid] == 1) {
            mid++;
        }
        // If the element is 2
        else {
            temp = a[mid];
            a[mid] = a[hi];
            a[hi] = temp;
            hi--;
        }

    }
}

function printArray(arr, arr_size) {
    let i;
    let a = [];
    for (i = 0; i < arr_size; i++) {
        a.push(arr[i]);
    }
    return a.toString();
}

/*Driver function to check for above functions*/
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

let arr_size = arr.length;
sort012(arr, arr_size);
console.log(printArray(arr, arr_size));


