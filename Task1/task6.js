function memoize(recursiveFunction) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            let val = recursiveFunction.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    }
}

let factorial = memoize(function(n) {
    console.log("computing factorial of: ", n);
    if(n === 1) return 1;
    return n * factorial(n-1);
});

console.log(factorial(3));