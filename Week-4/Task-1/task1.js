function getNumber() {
    var n = Math.floor(Math.random() * 100);
    console.log("Number is: ",n);
    return n;
}

function resolve(msg){
    console.log(msg);
}

function reject(msg){
    console.log(msg);
}

function getResult(getNumber, resolve, reject) {
    let n = getNumber();
    if(n % 5 == 0){
        resolve("Number is devided by 5 successful.")
    }else{
        reject("The number is not divisible by 5.")
    }
}

getResult(getNumber, resolve, reject);