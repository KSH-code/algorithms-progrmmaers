/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 10:02:16
 * @modify date 2017-08-28 10:02:16
 * @desc [정수 제곱근 판별]
 */
function nextSqaure(n) {
    if (Number.isInteger(Math.sqrt(n))) {
        return Math.pow(Math.sqrt(n) + 1, 2)
    } else {
        return 'no'
    }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));