/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-31 02:40:44
 * @modify date 2017-08-31 02:40:44
 * @desc [올바른 괄호]
 */
function is_pair(s) {
    var result = true;
    var list = [],
        ll = []
    for (let char of s) {
        list.push(char)
    }
    while (list.length) {
        let char = list.pop()
        if (char == ')') {
            ll.push(char)
        } else if (char == '(') {
            if (ll.length) {
                ll.pop()
            } else {
                return false
            }
        }
    }
    return ll.length == 0;
}
console.log(is_pair('(()'))