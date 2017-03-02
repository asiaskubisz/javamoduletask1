// plik scripts.js
/* komentarz wstawiem tutaj
zeby pokazac jak to sie robie na kilka linijek
aha i wiem, ze powinien byc po angielsku dammit!
*/
// alright, here you go
var a = 3;
var b = 4;
var value = (a*a) + (2 * a * b) - (b*b);
console.log('Wartość rachunku: ' + value );

if (value < 0) {
    console.log('Jest to liczba ujemna');
} else if (value > 0) {
    console.log('Jest to liczba dodatnia');
} else if (value == 0) {
    console.log('Wynik rowna się: zero');
}
