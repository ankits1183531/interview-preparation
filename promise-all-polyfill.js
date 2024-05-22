const p1 = new Promise((resolve, reject) => {
    return resolve(1);
})

const p2 = new Promise((resolve, reject) => {
    return reject(new Error('Rejected'));
})

Promise.all([p1, p2]).then((res) => {
    console.log(res);
})

function myPromise(arr) {
    const promise = new Promise((resolve, reject) => {
        const result = [];
        let total = 0;
        arr.forEach((el, index) => {
            Promise.resolve(el).then((res) => {
                result[index] = res;
                total++;
                if (total === arr.length) {
                    resolve(result);
                }
            })
                .catch((err) => reject(err));
        });
    });
    return promise;
}

myPromise([p1, p2]).then((res) => console.log(res));