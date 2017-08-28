/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 10:07:58
 * @modify date 2017-08-28 10:07:58
 * @desc [역삼각형 별 출력]
 */
function printReversedTriangle(num) {
    var result = ''
        // 함수를 완성하세요
    for (let i = 1; i <= num; i++) {
        for (let j = num; j >= i; j--) {
            result += '*'
        }
        if (i < num)
            result += '\n'
    }
    return result
}