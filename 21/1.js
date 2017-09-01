/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-01 02:00:20
 * @modify date 2017-09-01 02:00:20
 * @desc [소수 찾기]
 */
function numberOfPrime(n) {
    var result = 0
    let check = 0
    for (let i = 2; i <= n; i++) {
        for (let j = 2, f = i / 2 + 1; j <= f; j++) {
            if (i % j == 0) {
                check++
            }
        }
        if (check == 0 || i == 2)
            result++
            check = 0
    }
    return result;
}
console.log(numberOfPrime(10))