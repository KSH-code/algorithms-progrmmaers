/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 02:38:11
 * @modify date 2017-08-31 02:38:11
 * @desc [두 정수 사이의 합]
 */
function adder(a, b) {
    var result = 0
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }
    for (; a <= b; a++) {
        result += a
    }

    return result;
}