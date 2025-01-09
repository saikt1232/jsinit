// flatten the array deeply

function flatten(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Check your array");
  }
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
}
  console.log(flatten([1,2,3,[4,5,6,[7,8,9]]]));
