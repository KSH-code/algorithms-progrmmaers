/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 03:04:28
 * @modify date 2017-08-30 03:04:28
 * @desc [행렬의 곱셈]
 */
function productMatrix(A, B) {
    var answer = [];
    for (let i in B[0]) {
        answer[i] = 0
        for (let j in A) {
            answer[i][j] = 0
        }
    }
    for (let i in A[]) {
        for (let j in A[i]) {

            answer[i][j] +=
        }
    }
    return answer;
}