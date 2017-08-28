/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 12:29:50
 * @modify date 2017-08-28 12:29:50
 * @desc [수박수박]
 */
function waterMelon(n) {
    var result = "";
    let 수 = true
    for (let i = 0; i < n; i++) {
        switch (수) {
            case true:
                result += '수'
                break
            default:
                result += '박'
                break
        }
        수 = !수
    }
    return result;
}