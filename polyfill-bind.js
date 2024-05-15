// Ploy fill for bind method

// Resource -> https://www.youtube.com/watch?v=ke_y6z0xRpk&list=PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks

Function.prototype.mybind = function(...args){
    let obj = this;
    let params = args.slice(1);

    return function(...arg1) {
        obj.apply(args[0],[...params, ...arg1]);
    }
}