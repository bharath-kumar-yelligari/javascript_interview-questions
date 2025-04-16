async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data = await response.json();
        console.log(data)
    } catch {
        console.log('error')
    }
}

console.log('async await start')
fetchData();
console.log('async await end')


function fetchDataWithPromise(value) {
    let promise = new Promise((resolve, reject) => {
        if(value > 5) {
            reject('value is greater than 5')
        }
        resolve("Hi Bharath")
    })
    return promise
}


async function fetchWithPromise() {
    try {
        let response = await fetchDataWithPromise(6)
        console.log(response)
    } catch(error) {
        console.log('error',error)
    }
}

console.log('fetch with resolve')
fetchWithPromise()
console.log('fetch with resolve end')
