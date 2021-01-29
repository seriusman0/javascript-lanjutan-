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


const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
    },
    main: function(jam){
        this.energi-=jam;
    },
    tidur: function(jam){
        this.energi+= jam*2;
    }
};

function Mahasiswa(nama, energi){
    mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let serius = Mahasiswa("Seriusman Waruwu", 10);