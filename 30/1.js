/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-03 07:11:21
 * @modify date 2017-09-03 07:11:21
 * @desc [최소 공배수]
 */
function nlcm(num) {
    let temp = [...num]
    for (let n of num) {
        answer *= n
    }
    var g = temp.pop();
    var answer = g;
    while (temp.length) {
        let num1 = answer,
            num2 = temp.pop()
        g = gcd(num1, num2)
        answer *= num2 / g
    }
    return answer;

    function gcd(a, b) {
        if (b == 0)
            return a
        return gcd(b, a % b)
    }
}
console.log(nlcm([2, 6, 8, 14]));