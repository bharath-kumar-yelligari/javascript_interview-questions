function retryWithPromise(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    const tryCall = attempt => {
      fn().then(resolve).catch(error => {
        if (attempt < retries) {
          setTimeout(() => tryCall(attempt + 1), delay);
        } else {
          reject(error);
        }
      });
    };

    tryCall(0);
  });
}

// Example usage:
const fetchData = () => {
  const randomNumber = Math.random();
  return new Promise((resolve, reject) => {
    console.log(randomNumber)
    if (randomNumber > 0.8) {
      resolve('Data fetched successfully!');
    } else {
      reject('Error: Failed to fetch data.');
    }
  });
};

// retryWithPromise(fetchData, 1, 1000)
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// fetchDataTest = async () => {
//     try{
//         let response = await fetch("https://fake-json-api.mock.beeceptor.com/users")
//         let data = await response.json();
//         console.log(data)

//     }catch(error){
//         console.log('error', error)

//     }
// }


const fetchDataTest = () => {
  return new Promise((resolve, reject) => {
    let random = Math.random()
    if (random > 0.8) {
      resolve('Data fetched successfully!' + random)
    }
    else {
      reject('Error: Failed to fetch data.')
    }
  })
}


// fetchDataTest().then((data) => {
//   console.log('data', data)
// }).catch((error) => {
//   console.log('error', error)
// });

const retryWithPromiseTest = ((fn, retries, delay) => {

  return new Promise((resolve, reject) => {
    tryCall = (attempt) => {
      fn().then(resolve).catch(error => {
        if (attempt < retries) {
          setTimeout(() => tryCall(attempt + 1), delay);
        } else {
          reject(error);
        }
      });
    }
    tryCall(0)
  });
})


retryWithPromiseTest(fetchDataTest, 1, 100)
  .then(data => console.log('Final result:', data))
  .catch(error => console.error('Final error:', error));
