// Debounce Function
// https://www.youtube.com/watch?v=Zo-6_qx8uxg&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=12

const getData = () => {
    console.log('Data');
}

function debounce(fn, time) {
    let timer;
    return function () {
        let context = this,
            params = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            fn.apply(context, params);
        }, time);
    }
}
debounce(getData, 300);



// Throttling Function
// https://www.youtube.com/watch?v=81NGEXAaa3Y&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks&index=9

function throttling(fn, delay) {
    let isFlag = true;
    return function () {
        let context = this,
            params = arguments;
        if (isFlag) {
            fn.apply(context, params);
            isFlag = false;
            setTimeout(() => {
                isFlag = true;
            }, delay);
        }
    }
}

throttling(getData,300);