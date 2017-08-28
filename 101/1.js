/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 01:08:58
 * @modify date 2017-08-28 01:08:58
 * @desc [삼각형 만들기]
 */
function printTriangle(num) {
    var result = ''
    for (let i = 0; i < num; i++) {
        for (let j = i; j >= 0; j--) {
            result += '*'
        }
        result += '\n'
    }
    return result
}