function bubbleSortString(str) {
    let arr = str.split('');
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              //  Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

               // [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }

    return arr.join('');
}



const sortWithWhile = (str) => {

    let arra= str.split("");
    let n = arra.length;
    let swapped;
    do{
        swapped = false
        for(let i = 0; i< n-1 ; i++){
            if(arra[i] > arra[i+1]){
                [arra[i], arra[i+1]] = [arra[i+1], arra[i]];
                swapped = true;
            }
        }

    }while(swapped)
    return arra.join("");
}


// // Example usage
const sortedString = bubbleSortString("javascript");
console.log(sortedString); // Output: "aacijprstv"

// Example usage
const sortStringWhile = sortWithWhile("bharath");
console.log(sortStringWhile); // Output: "aabhhrt"