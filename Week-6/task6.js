function find3Numbers(A, arr_size, sum) {
    let l, r;

    for (let i = 0; i < arr_size - 2; i++) {
        for (let j = i + 1; j < arr_size - 1; j++) {

            for (let k = j + 1; k < arr_size; k++) {
                if (A[i] + A[j] + A[k] == sum) {
                    console.log("Triplet is " + A[i] +
                        ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }

    return false;
}

let A = [1, 4, 45, 6, 10, 8];
let sum = 22;
let arr_size = A.length;
find3Numbers(A, arr_size, sum);

