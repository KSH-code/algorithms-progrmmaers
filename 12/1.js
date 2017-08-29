/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-29 10:46:38
 * @modify date 2017-08-29 10:46:38
 * @desc [최대공약수 최소공배수 리턴]
 */
function gcdlcm(a, b) {
    var answer = [gcd(a, b)];
    answer.push(a * b / answer[0])
    return answer;
}

function gcd(a, b) {
    if (b == 0) {
        return a
    }
    return gcd(b, a % b)
}