function getTempCallback(location, callback){
    callback(undefined, 33);
    callback("City not found");
}

getTempCallback('Berlin', function(err, temp){
    if (err){
        console.log("error", err);
    }else{
        console.log("success", temp);
    }
});


function getTempPromise (location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(33);
            reject("City not found");
        }, 1000);
    });
}

getTempPromise('Berlin').then(function(temp){
    console.log("Promise success", temp);
}, function(err){
    console.log("Promise erroe", err);
});


function addPromise(a, b){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject("Not numbers");
            }
        }, 1000);
    });
}



addPromise(8, 9).then(function(summ){
    console.log("Promise success", summ);
}, function(err){
    console.log("Promise erroe", err);
});

addPromise(8, "h").then(function(summ){
    console.log("Promise success", summ);
}, function(err){
    console.log("Promise erroe", err);
});