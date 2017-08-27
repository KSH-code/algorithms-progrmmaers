/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-27 11:25:13
 * @modify date 2017-08-27 11:25:13
 * @desc [핸드폰번호 가리기]
 */
function hide_numbers(s) {
    var result = "";
    //함수를 완성해주세요
    var star = s.substr(0, s.length - 4).replace(/\d/g, '*')
    result = star + s.substr(s.length - 4, s.length)
    return result;
}