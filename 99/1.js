/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 01:20:54
 * @modify date 2017-08-28 01:20:54
 * @desc [문자열 다루기 기본]
 */
function alpha_string46(s) {
    var result = (s.length == 4 || s.length == 6 || false) && (s.replace(/\d/g, '').length == 0)
    return result;
}