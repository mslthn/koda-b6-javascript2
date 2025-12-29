const nilaiJohn = [75, 80, 79, 90];
const nilaiEd = [66, 77, 88, 99];
const gabunganNilai = [...nilaiJohn, ...nilaiEd];
let jumlah = gabunganNilai.length
let total=0
let rata=0
let max = gabunganNilai[0]
let min = gabunganNilai[0]

for (let i = 0; i < jumlah; i++) {
    // console.log(gabunganNilai[i]);
    
    if (gabunganNilai[i] > max){
        max = gabunganNilai[i]
    }
    total += gabunganNilai[i]

    if (gabunganNilai[i] < min){
        min = gabunganNilai[i]
    }    
}
rata = total / jumlah

console.log(max)
console.log(min)
console.log(total)
console.log(rata)