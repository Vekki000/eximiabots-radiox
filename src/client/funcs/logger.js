module.exports = function (area, text){
    let date = new Date();
    console.log('[' + area + '](' + date.toISOString() + ') – ' + text);
}