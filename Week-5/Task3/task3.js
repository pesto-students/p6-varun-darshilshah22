function hasDuplicate(arr) {
    const mySet = new Set(arr);

    console.log(mySet.size);
    console.log(arr.length);

    if (mySet.size !== arr.length) {
        console.log('Array has an duplicate value');
        return true;
    } else {
        console.log('Array has no duplicate value');
        return false;
    }
}

console.log(hasDuplicate([1, 2, 3, 5, 5, 6]));