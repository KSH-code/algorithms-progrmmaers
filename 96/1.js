/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-29 10:42:27
 * @modify date 2017-08-29 10:42:27
 * @desc [문자열 내 p와 y의 개수]
 */
function numPY(s) {
    var result = true;
    var p_count = 0,
        y_count = 0
    for (let char of s) {
        if (char.toLowerCase() === 'p')
            p_count++;
        if (char.toLowerCase() === 'y')
            y_count++;
    }
    return p_count == y_count;
}