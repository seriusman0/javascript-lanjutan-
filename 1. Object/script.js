// let mahasiswa1 = {
//     nama: 'Seriusman',
//     energi: 10,
//     makan: function(porsi){
//         this.energi=this.energi+porsi;
//         console.log(
//             `Hai ${this.nama}, selamat makan`
//         )
//     }
// }

//object declration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan= function(porsi){
//         this.energi += porsi;
//     }

//     return mahasiswa;
// }

// let serius = Mahasiswa("Serius", 10);

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//     },
//     main: function(jam){
//         this.energi-=jam;
//     }
// };

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = methodMahasiswa.makan;
//     this.main = methodMahasiswa.main;
// }

// let serius = new Mahasiswa("Seriusman Waruwu", 10);


// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//     },
//     main: function(jam){
//         this.energi-=jam;
//     },
//     tidur: function(jam){
//         this.energi+= jam*2;
//     }
// };

// function Mahasiswa(nama, energi){
//     mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     return mahasiswa;
// }

// let serius = Mahasiswa("Seriusman Waruwu", 10);


// PROTOTYPE
// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }  

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Hai ${this.nama}, Selamat Makan`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Energi ${this.nama} berkurang hingga ${this.energi}`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam*2;
//     return `Energi ${this.nama} bertambah menjadi ${this.energi}`;
// }

// let serius = new Mahasiswa("Seriusman Waruwu", 10);


//CLASS
class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi){
        this.energi += porsi;
        return `Selamat Makan ${this.nama}, energi = ${this.energi}`;
    }

    main (jam){
        this.energi -= jam;
        return `Selamat Main ${this.nama}, energi = ${this.energi}`;
    }

    tidur(jam){
        this.energi += jam*2;
        return `Selamat Tidur ${this.nama}, energi = ${this.energi}`;
    }
}