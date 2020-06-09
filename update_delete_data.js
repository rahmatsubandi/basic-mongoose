// Membuat koneksi ke mongoosenya
// lalu require ke mongoosenya
const mongoose = require("mongoose");

// Koneksikan
mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// membuat satu variable dan panggil variabel mongoose dan menggunakan metod scheme
// dan buat Schemenya untuk menggunakan validasi dari mongoose yang di doc nya build-in-validators
const buahScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama tidak ada, isi dulu dong!"],
  },
  harga: {
    type: Number,
    min: 5000,
    max: 50000,
  },
  review: String,
});

// Membuat modelnya dan membuat variabel untuk modelnya
// Nama modelnya disini Buah kalo sudah di save maka di aplikasi MongoDB di Collections namanya Buah atau ada tambahan s nya di akhir menjadi "buahs"
// Memanggil variabel mongoosenya
// setelah "Buah", maka memanggil schemenya
const Buah = mongoose.model("Buah", buahScheme);

// ============================================ //
// Fungsi untuk update data
// Update berdasarkan dari id
// Setelah koma pilihan yang ingin di update
// Lalu membuat function error

Buah.updateOne({ _id: "5edf10a560141a09a869bd99" }, { name: "Apel" }, function (
  error
) {
  // Membuat object
  if (error) {
    // Jika error
    console.log(error);
  } else {
    // Jika berhasil update data
    console.log("Data berhasil di update");
  }
});

// ============================================ //

// ============================================ //
// Fungsi untuk update data
// Update berdasarkan dari id
// Lalu membuat function error

// Buah.deleteOne({ _id: "5edf52898493ac1414df320a" }, function (error) {
//   // Membuat object
//   if (error) {
//     // Jika error
//     console.log(error);
//   } else {
//     // Jika berhasil update data
//     console.log("Data berhasil di delete");
//   }
// });

// ============================================ //

// Cara menampilkan data di MongoDB Compas
// Membuat function yang menerima 2 parameter
Buah.find(function (error, buah) {
  // Jika erro
  if (error) {
    console.log(error);
  } else {
    // membuat fungsi untuk close koneksi database ketika sudah merun aplikasi
    mongoose.connection.close();

    // --------------------------------------------- //
    // Cek data yang ingin di tampilkan (Semua data)
    // console.log(buah);
    // --------------------------------------------- //

    // Jika hanya ingin menampilkan data salah satunya saja
    // dan membuat metod untuk menampilkan datanya berdasarkan object
    // memberikan pesan setelah data di delete atau di update
    console.log("Buah yang tersisa setelah berhasil di delete:");
    buah.forEach(function (tampikansemuadata) {
      // Object yang ingin ditampilkan
      console.log(tampikansemuadata.name);
    });
  }
});
