function spiralPrint(m, n, arr) {
	let i, k = 0, l = 0;
    let a = [];

	while (k < m && l < n) {
		for (i = l; i < n; ++i) {
            a.push(arr[k][i]);
			// console.log(arr[k][i] + ' ');
		}
		k++;

		for (i = k; i < m; ++i) {
            a.push(arr[i][n - 1]);
			// console.log(arr[i][n - 1] + ' ');
		}
		n--;

		if (k < m) {
			for (i = n - 1; i >= l; --i) {
                a.push(arr[m - 1][i]);
				// console.log(arr[m - 1][i] + ' ');
			}
			m--;
		}

		if (l < n) {
			for (i = m - 1; i >= k; --i) {
                a.push(arr[i][l]);
				// console.log(arr[i][l] + ' ');
			}
			l++;
		}
	}

    return a.toString();
}

let arr = [[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]];
let r = arr.length;
let c = arr[0].length;

console.log(spiralPrint(r, c, arr));