function caesar(s, n) {
    var result = ''
    for (let i in s.split(' ')) {
        for (let ss of s.split(' ')[i]) {
            let f
            if (ss.charCodeAt() < 97) {
                f = 65 + ((ss.charCodeAt() + n) - 65) % 26
            } else {
                f = 97 + ((ss.charCodeAt() + n) - 97) % 26
            }
            result += String.fromCharCode(f)
        }
        if (i < s.split(' ').length - 1)
            result += ' '
    }
    return result;
}

// 실행을 위한 테스트코드입니다.
console.log('s는 "a B z", n은 4인 경우: ' + caesar("faa p Z z", 30));