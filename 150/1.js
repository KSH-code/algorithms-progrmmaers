/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-01 02:09:18
 * @modify date 2017-09-01 02:09:18
 * @desc [콜라츠 추측]
 */
function collatz(num) {
    var answer = 0;
    for (let i = 0; i < 500 && num > 1; i++) {
        answer++
        if (num % 2 == 0) {
            num /= 2
        } else {
            num = num * 3 + 1
        }
    }
    if (answer == 500) {
        answer = -1
    }
    return answer;
}