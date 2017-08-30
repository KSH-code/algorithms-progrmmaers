/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 02:45:59
 * @modify date 2017-08-30 02:45:59
 * @desc [최솟값 만들기]
 */
function getMinSum(A, B) {
    var answer = 0,
        length = A.length
    A.sort((a, b) => {
        if (a > b) return 1
        else return -1
    })
    B.sort((a, b) => {
        if (a > b) return 1
        else return -1
    })
    for (let i = 0; i < length; i++) {
        answer += A.pop() * B.shift()
    }
    return answer;
}
var tA = [1, 2],
    tB = [3, 4];

console.log(getMinSum(tA, tB));