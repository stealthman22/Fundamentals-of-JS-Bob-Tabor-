
function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('If previous line of code throws an exception you\'ll never be able to see this.')
}