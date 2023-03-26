function map(arr, callback) {
    if (!arr || !callback)
        return;
    if (arr && !callback)
        return arr;
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var mappedElement = callback(element, i, arr);
        if (mappedElement === undefined) {
            output.push(element);
            continue;
        }
        output.push(mappedElement);
    }
    return output;
}
function inc(item) {
    return item + 1;
}
console.log(map([1, 2, 3,], inc));
var testType = {
    name: 'kkmdaklsd'
};
console.log(testType);
