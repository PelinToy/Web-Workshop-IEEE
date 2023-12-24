// CTRL Ö ile yorum satırı açılıyor.
console.log("Hello World");
let isim="Pelin";
console.log(isim);

let sayi=5;
sayi=0.3;
console.log(sayi);

const pi=3.14;
console.log(pi);

let renkler = ['kırmızı','mavi','yeşil'];
renkler[3]="mor";
console.log(renkler);
console.log(renkler.length);

function selam(){
    console.log("Hello World");
}
selam();

function greet(isim){
    console.log("Hello"+ isim);
}
greet('Pelin');

function kareAl(sayi){
    return sayi*sayi;
}
console.log(kareAl(3));

let sifre = prompt("Şifre giriniz:")
if(sifre.length>0){
    console.log('Şifre bilginiz:', {sifre});
}
else{
    console.log("Bilgi yok");
}