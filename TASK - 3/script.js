function func() {
let son = document.getElementById('input').value;
let result1;
let result2;
let birlar = son % 10;
let onlar = Math.trunc(son / 10)
switch (onlar) {
    case 1:
        result1 = 'o`n'
        break;
    case 2:
        result1 = 'yigirma'
        break;
    case 3:
        result1 = 'o`ttiz'
        break;
    case 4:
        result1 = 'qirq'
        break;
    case 5:
        result1 = 'ellik'
        break;
    case 6:
        result1 = 'oltmish'
        break;
    case 7:
        result1 = 'yetmush'
        break;
    case 8:
        result1 = 'sakson'
        break;
    case 9:
        result1 = 'to`qson'
        break;
    default:
        result1 = 'Notogri son'
        break;
}
switch (birlar) {
    case 1:
        result2 = 'bir'
        break;
    case 2:
        result2 = 'ikki'
        break;
    case 3:
        result2 = 'uch'
        break;
    case 4:
        result2 = 'tort'
        break;
    case 5:
        result2 = 'besh'
        break;
    case 6:
        result2 = 'olti'
        break;
    case 7:
        result2 = 'yetti'
        break;
    case 8:
        result2 = 'sakkiz'
        break;
    case 9:
        result2 = 'toqqiz'
        break;
    default:
        result2 = ''
        break;
}
let result = result1 + " " + result2
document.getElementById("result1").innerHTML = result;
}
btn.addEventListener("click", () => 
func() )  ;