function vowelCount(str) {
    const vowels = new Map();

    for (let c of str) {
        if ('aeiou'.includes(c)) {
            if (vowels.has(c)) {
                vowels.set(c, vowels.get(c) + 1);
            } else {
                vowels.set(c, 1);
            }
        }
    }

    return vowels;
}

console.log(vowelCount('My Name is Darshilaaaa'));
