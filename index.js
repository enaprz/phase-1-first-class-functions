function receivesAFunction(callback){
    console.log("do i define call back")
    callback()
}
function returnsANamedFunction(){
    function fn(){
        console.log("this is returning a named function");
    }
    return fn;
}
function returnsAnAnonymousFunction(){
    return function (){
        console.log("I am anonymous");
    };
   
};


