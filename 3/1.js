/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 02:32:11
 * @modify date 2017-08-30 02:32:11
 * @desc [약수의 합]
 */
function sumDivisor(num) {
    var answer = 0,
        n = (num / 2) + 1;
    for (let i = 1; i <= n; i++) {
        if (num % i == 0) {
            answer += i
        }
    }
    if (num > 2) {
        answer += num
    }
    return answer;
}
console.log(sumDivisor(12));