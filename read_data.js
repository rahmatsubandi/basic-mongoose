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

// Cara menampilkan data di MongoDB Compas
// Membuat function yang menerima 2 parameter
Buah.find(function (error, buah) {
  // Jika erro
  if (error) {
    console.log(error);
  } else {
    // membuat fungsi untuk close koneksi database ketika sudah merun aplikasi
    mongoose.connection.close();

    // Cek data yang ingin di tampilkan (Semua data)
    // console.log(buah);

    // Jika hanya ingin menampilkan data salah satunya saja
    // dan membuat metod untuk menampilkan datanya berdasarkan object
    buah.forEach(function (tampilansatuan) {
      // Object yang ingin ditampilkan
      console.log(tampilansatuan.name);
    });
  }
});
