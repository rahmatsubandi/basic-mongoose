// Membuat koneksi ke mongoosenya
// lalu require ke mongoosenya
const mongoose = require("mongoose");

// Koneksikan
mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// membuat satu variable dan panggil variabel mongoose dan menggunakan metod scheme
// dan buat Scheme untuk fruit
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
// Mmembuat modelnya
const Buah = mongoose.model("Buah", buahScheme);

// buat Scheme untuk pelanggan
const pelangganScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama tidak ada, isi dulu dong!"],
  },
  umur: Number,
  buahkesukaan: buahScheme, // Untuk relasi anatara buahScheme
});

// Membuat modelnya dan membuat variabel untuk modelnya
// Memanggil variabel mongoosenya
// setelah "Pelanggan", maka memanggil schemenya
const Pelanggan = mongoose.model("Pelanggan", pelangganScheme);

// ============================ //

// Membuat data
const nanas = new Buah({
  name: "Nanas",
  harga: 10000,
  review: "Bukan Nanas Merah woy !!",
});

// Untuk save ke databasenya, panggil dulu schemenya dan membuat function untuk parameter kalo error
nanas.save(function (error) {
  if (error) {
    // Jika error
    console.log(error);
  } else {
    // kalo berhasil
    console.log("save data success di database");
  }
});

// Membuat data Pelanggan
const pelanggan = new Pelanggan({
  name: "Rahmat Subandi",
  umur: 20,
  buahkesukaan: nanas, // mengambil data dari constanta nanas
});

// Untuk save ke databasenya, panggil dulu schemenya dan membuat function untuk parameter kalo error
pelanggan.save(function (error) {
  if (error) {
    // Jika error
    console.log(error);
  } else {
    // membuat fungsi untuk close koneksi database ketika sudah merun aplikasi
    mongoose.connection.close();
    // kalo berhasil
    console.log("save data success di database dengan relationship");
  }
});
