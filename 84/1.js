/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-01 01:59:05
 * @modify date 2017-09-01 01:59:05
 * @desc [팰린드롬]
 */

function longest_palindrom(s) {
    var result = 1,
        max = 1;
    s = [...s]
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            result = 1
            if (s[i] == s[j]) {
                if (i == j) {
                    break
                }
                let ii = i,
                    jj = j
                result = 0
                while (ii <= jj) {
                    ii++, jj--
                    if (s[ii] == s[jj]) {
                        result += 2
                        if (ii == jj)
                            result--
                    }
                }
            }
            if (result > max) {
                max = result
            }
        }
    }
    return max;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(longest_palindrom("토마토맛토마토"))
console.log(longest_palindrom("토마토맛있어"))