/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-03 06:21:24
 * @modify date 2017-09-03 06:21:24
 * @desc [멀리 뛰기]
 */

function jumpCase(num) {
    return fibo(num);

    function fibo(n) {
        if (n == 1)
            return 1
        else if (n == 2)
            return 2
        return fibo(n - 1) + fibo(n - 2)
    }
}
console.log(jumpCase(2))