/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 02:20:45
 * @modify date 2017-08-30 02:20:45
 * @desc [피보나치 수]
 */

function fibo(n) {
    let pre1 = 0,
        pre2 = 1,
        result = 0
    for (let i = 2; i <= n; i++) {
        result = pre1 + pre2
        pre1 = pre2
        pre2 = result
    }
    return result
}

function fibonacci(num) {
    return fibo(num)
}