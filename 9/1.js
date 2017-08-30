/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 02:16:34
 * @modify date 2017-08-30 02:16:34
 * @desc [행렬의 덧셈]
 */
function sumMatrix(A, B) {
    var answer = [];
    for (let i in A) {
        answer.push([])
        for (let j in A[i]) {
            answer[i].push(A[i][j] + B[i][j])
        }
    }
    return answer;
}