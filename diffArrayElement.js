
const diffArrayElement = (arr1, arr2) => {
    return [
        ...arr1.filter((num) => !arr2.includes(num)),
        ...arr2.filter((num) => !arr1.includes(num))
    ]
}

console.log(diffArrayElement([1, 2], [2, 3, 4])); // [1, 5]


const diffArrayElementWithSet = (arr1, arr2) => {
    const set1 = [...new Set(arr1)];
    const set2 = [...new Set(arr2)];
    const result = [];
  
    set1.forEach((element) => {
      if (!arr2.includes(element)) {
        result.push(element);
      }
    });
  
    set2.forEach((element) => {
      if (!arr1.includes(element)) {
        result.push(element);
      }
    });
  
    return result;
}

console.log(diffArrayElementWithSet([1,1, 2], [2, 3, 4])); // [1, 5]
