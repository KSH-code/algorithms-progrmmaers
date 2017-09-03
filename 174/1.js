/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-03 06:12:28
 * @modify date 2017-09-03 06:12:28
 * @desc [가장 큰 숫자]
 */
function nextBigNumber(n) {
    var answer = n + 1;
    let length = n.toString(2).replace(/[0]/g, '').length
    while (answer.toString(2).replace(/[0]/g, '').length != length) {
        answer++
    }
    return answer;
}
console.log(nextBigNumber(78))