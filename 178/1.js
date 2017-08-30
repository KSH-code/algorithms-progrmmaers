/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-30 02:57:15
 * @modify date 2017-08-30 02:57:15
 * @desc [2016년]
 */
function getDayName(a, b) {
    switch (new Date(2016, a - 1, b).getDay()) {
        case 0:
            return 'SUN'
        case 1:
            return 'MON'
        case 2:
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THU'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
    }
}