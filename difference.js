// remove the items from first array that are present in second array


function difference(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return new Error("Check your array");
    }
    let newSet = new Set(arr2);
    return arr1.filter(item => !newSet.has(item));
}

console.log(difference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [1, 2, 3]