const nilaiJohn = [75, 80, 79, 90];
const nilaiEd = [66, 77, 88, 99];

const gabunganNilai = [...nilaiJohn, ...nilaiEd];
let jumlah = gabunganNilai.length

let max=0
let min=0
let total=0
let rata=0

for (let i = 0; i < jumlah; i++) {
    // console.log(gabunganNilai[i]);
    max = gabunganNilai[i]
    min = gabunganNilai[0]
    
    if (max > gabunganNilai[i+1]){
        max = gabunganNilai[i]
    }
    total += gabunganNilai[i]

    
}
for(let i = 0; i < jumlah; i++){
    // console.log(gabunganNilai[i])
    min = gabunganNilai[0]
    if (min < gabunganNilai[i]){
        min = gabunganNilai[i]
        if(min > gabunganNilai[i]){
            min = gabunganNilai[i]
        }
    }

}
rata = total / jumlah
console.log(max)
console.log(min)
console.log(total)
console.log(rata)