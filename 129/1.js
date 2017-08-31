/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 10:47:21
 * @modify date 2017-08-31 10:47:21
 * @desc [하샤드 수]
 */
function Harshad(n) {
    var result;
    var temp = n,
        sum = 0
    for (; temp > 0; temp = Math.floor(temp / 10)) {
        sum += temp % 10
    }

    return (n % sum == 0);
}
Harshad(1000)