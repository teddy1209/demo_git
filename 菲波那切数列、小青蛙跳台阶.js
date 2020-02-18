function fib(n){
    function fib_(k,a,b){
        if(k==n)  return b
        else return fib_(k+1,b,a+b)
    }
    let k = 0
    return fib_(k,0,1)
}
console.log(fib(6))