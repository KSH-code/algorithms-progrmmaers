/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-28 09:58:24
 * @modify date 2017-08-28 09:58:24
 * @desc [평균 구하기]
 */
function average(array) {
    //함수를 완성하세요
    let sum = 0
    for (let n of array) {
        sum += n
    }
    return sum / array.length
}