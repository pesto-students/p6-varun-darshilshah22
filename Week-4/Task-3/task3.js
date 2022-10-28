const Fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 0;
        let x = 0;
        let y = 0; 
        return { 
            next : () => {
                if( i++ <  n){
                    [x , y] = [y , (x + y) || 1];
                    return {
                        value: x,
                        done: false,
                    }
                }else{
                    return {
                        done : true,
                    }
                }
            } 
        }
    }
});


console.log( [...Fib(6)] );

for( let num of Fib(6) ){
    console.log(num);
}