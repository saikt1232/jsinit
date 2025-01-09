function simpleCompact(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }

  return arr.filter(Boolean);
}

function compactUsingForLoop(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

function compactUsingForLoopnew(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  let result = [];
  arr.forEach((item) => {
    if (item) {
      result.push(item);
    }
  });
  return result;
}

function compactUsingRecurrsion(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  let [head, ...tail] = arr;
  return head ? [head, ...tail] : compactUsingForLoop(tail);
}

function compactUsingtruthyfasly(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  return arr.filter((item) => !!item);
}

function compactUsingAllChecks(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  return arr.filter(
    (item) =>
      item !== null &&
      item !== undefined &&
      item !== false &&
      item !== 0 &&
      item !== "" &&
      !Number.isNaN(item)
  );
}

console.log(simpleCompact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compactUsingForLoop([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compactUsingForLoopnew([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compactUsingRecurrsion([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compactUsingtruthyfasly([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compactUsingAllChecks([0, 1, false, 2, "", 3])); // [1, 2, 3]

