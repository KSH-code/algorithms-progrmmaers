/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-09-07 09:48:48
 * @modify date 2017-09-07 09:48:48
 * @desc [야근시간]
 */
function noOvertime(no, works) {
    var result = 0;
    while (no) {
        let idx = 0
        let max = 0
        for (let i in works) {
            if (max < works[i]) {
                idx = i
                max = works[i]
            }
        }
        works[idx]--, no--
    }
    for (let work of works) {
        result += work * work
    }
    return result;
}