const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    if(typeof n === "string"){
        n = parseInt(n);
        if (isNaN(n)) {
            return "OOPS";
        }
    }
    let fibbonaciA = 0;
    let fibbonaciB = 1;
    let FibNum;
    for(let i = 2;i<=n; i++){
        FibNum = fibbonaciA + fibbonaciB;
        fibbonaciA = fibbonaciB;
        fibbonaciB = FibNum;
    }
    return FibNum;
};

// Do not edit below this line
module.exports = fibonacci;
