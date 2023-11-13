function EX2Q1(array, n) {
    if (array == null || n<=0)
    return [];
    if (n == null)
    return array[0];
    return array.slice(0, n);
}
module.exports = EX2Q1;