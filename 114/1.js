/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 02:29:31
 * @modify date 2017-08-31 02:29:31
 * @desc [이상한 문자만들기]
 */
function toWeirdCase(s) {
    var result = ''
    var d = s.split(' ')
    let check = 0
    d.map((v, i) => {
        for (let j in v) {
            if (check % 2 == 0) {
                result += d[i].charAt(j).toUpperCase()
            } else
                result += d[i].charAt(j)
            check++
        }
        check = 0
        if (i + 1 != d.length)
            result += ' '
    })
    return result;
}
console.log("결과 : " + toWeirdCase("try hello world"));