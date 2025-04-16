const fetchFakeApi = (url) => {
    return new Promise((resolve) => {
        const data = {
            'https://api.com/user/1': { id: 1, name: 'Alice' },
            'https://api.com/user/2': { id: 2, name: 'Bob' }
        };
        setTimeout(() => {
            resolve({ json: () => data[url] })
        }, 1000)
    })
}

async function* fetchData(urls) {
    for (const url of urls) {
        const response = await fetchFakeApi(url);
        yield response.json(); // Removed "as any"
    }
}

async function run() {
    const urls = ['https://api.com/user/1',
        'https://api.com/user/2'];

    for await (let val of fetchData(urls)) {
        console.log(val);
    }
}

run();