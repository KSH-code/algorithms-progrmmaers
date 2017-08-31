/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 03:04:28
 * @modify date 2017-08-30 03:04:28
 * @desc [행렬의 곱셈]
 */
function productMatrix(A, B) {
    return A.map(function(row) {
        return row.map(function(_, i) {
            return row.reduce(function(sum, cell, j) {
                return sum + cell * B[j][i];
            }, 0);
        });
    });
}
var a = [
    [5, 6],
    [7, 8]
];
var b = [
    [1, 2],
    [3, 4]
];
console.log(productMatrix(a, b));