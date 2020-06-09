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

// Cara insert data satuan
// Membuat data
const melon = new Buah({
  name: "Melon",
  harga: 10000,
  review: "Seger abiiieezzz!!!",
});

// Untuk save ke databasenya, panggil dulu schemenya dan membuat function untuk parameter kalo error
melon.save(function (error) {
  if (error) {
    // Jika error
    console.log(error);
  } else {
    // membuat fungsi untuk close koneksi database ketika sudah merun aplikasi
    mongoose.connection.close();
    // kalo berhasil
    console.log("save data success in database");
  }
});
