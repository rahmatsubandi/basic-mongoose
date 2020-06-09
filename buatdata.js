// Membuat koneksi ke mongoosenya
// lalu require ke mongoosenya
const mongoose = require("mongoose");

// Koneksikan
mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// membuat satu variable dan panggil variabel mongoose dan menggunakan metod scheme
// dan buat Schemenya
const buahScheme = new mongoose.Schema({
  name: String,
  harga: Number,
  review: String,
});

// Membuat modelnya dan membuat variabel untuk modelnya
// Nama modelnya disini Buah kalo sudah di save maka di aplikasi MongoDB di Collections namanya Buah atau ada tambahan s nya di akhir menjadi "buahs"
// Memanggil variabel mongoosenya
// setelah "Buah", maka memanggil schemenya
const Buah = mongoose.model("Buah", buahScheme);

// ============================ //

// Cara insert data satuan
// // Membuat data
// const apel = new Buah({
//   name: "Salak",
//   harga: 8000,
//   review: "Gurih enyoyy",
// });

// // Untuk save ke databasenya, panggil dulu schemenya dan membuat function untuk parameter kalo error
// apel.save(function (error) {
//   if (error) {
//     // Jika error
//     console.log(error);
//   } else {
//     // kalo berhasil
//     console.log("save data success in database");
//   }
// });

// ============================ //

// ============================ //

// Cara insert data dalam skala banyak.//
// Membuat data
const salak = new Buah({
  name: "Salak",
  harga: 8000,
  review: "Kenapa aku selalu salak :(",
});

const anggur = new Buah({
  name: "Anggur",
  harga: 50000,
  review: "Kalo Cap orang tua bikin mabok euy!",
});

const duren = new Buah({
  name: "Duren",
  harga: 8000,
  review: "Belah duren dimalam hari.....",
});

// Menyimpan di dalam model Buah
// Dan membuat array di dalam []
// Dan membuat function kalo error
Buah.insertMany([salak, anggur, duren], function (error) {
  if (error) {
    // jika error
    console.log(error);
  } else {
    // Ini untuk menutup databse setealh diinputkan lewat terminal, kalo perintah di atas hanya input dan tidak close database
    mongoose.connection.close();
    // Jika bener
    console.log("Tambah data dalam skala banyak berhasil");
  }
});

// ============================ //
