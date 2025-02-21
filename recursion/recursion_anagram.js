function anagrams_of(string) {
    if(string.length === 1) return [string[0]];

    const collection = [];

    const substring_anagrams = anagrams_of(string.slice(1));

    for (let i = 0; i< substring_anagrams.length; i++) {
        for (let j = 0; j <= substring_anagrams[i].length; j++) {
            const copy = new String(substring_anagrams[i]);

            collection.push(
                copy.slice(0,j) + string[0] + copy.slice(j, copy.length)
            );
        }
    }

    return collection;
}

console.log(anagrams_of("abc"));
