# Belajar Database Basic Menggunakan Mongoose

#### Author

[Rahmat Subandi](https://rhmtin.com/)

#### Another Project

[Lazadi](https://lazadi.rhmtin.com/)

## Awalan

Untuk bisa menjalankan semua perintah dibawah yang paling utama adalah menginstal node.js

cara installnya silahkan klik [Link ini](https://nodejs.org/en/download/)

Cara installnya seperti install aplikasi pada umumnya ya.

untuk bisa mengikuti step dibawah ini silahkan terlebih dahulu download MongoDB dulu di link ini [Download MongoDB](https://www.mongodb.com/try/download/community) klik On-Premises pilih sesuai OS pilih package msi

- untuk cara menginstallnya next2 saja dan pilih complete
- tujuan file biarkan default saja
- dan pastikan kamu ceklis Install MongoDB Compasnya .

Jangan lupa terkoneksi internet juga ya

kalo sudah sampai masuk ke dalam Aplikasinya klik Connect ya
And baru ikuti step dibawah ini

## Part 1 Mmebuat Database dan menambhakan database

## Step pertama untuk instalasi

Buat folder baru, namanya bebas.

Ketikan perintah dibawah ini di dalam terminal

```
npm init
```

Lalu kamu bisa mengisinya atau bisa saja langsung enter saja, kosong juga tidak masalah

Sampai ada option (yes)

Setelah selesai pasti akan ada file yang namanya package.json

lalu ketikan

```
clear
```

untuk membersihkan terminal. kalo tidak juga tidak masalah.

## Step dua yaitu menginstal mongoose nya itu sendiri

cara menginstallnya ketikan perintah dibawah ini di terminal

```
npm i mongoose
```

Jangan lupa setiap installasi membutuhkan koneksi internet ya

Dan ketika berhasil akan mendaptkan file package-lock.json dan folder node_modules

Juga ketika kalo kamu cek file package.json akan menambahkan dependencies seperti dibawah ini :

```json
"dependencies": {
    "mongoose": "^5.9.18"
  }
```

Untuk bagian mongoosenya mungkin saat kamu mencobanya saat panduan ini dipublish dan jaraknya beda beberapa bulan akan mengalami perbedaan versi. It's oke, no problem. :)

## Step ketiga konek ke database

buat file baru namanya seterah.

lalu ketikan script yang ada di file

```
scriptnya bisa liat di file create_data.js
```

Di file itu juga sudah ada penjelasanya.

untuk dokumentasi mongoose resmi bisa kamu baca disini [Dokumentasi dan cara koneksi](https://mongoosejs.com/)

Lalu silahkan kamu cek di MongoDB, maka akan bertambah db yang kamu buat

### Info

untuk menjalankan filenya ketikan ini di terminal

```
node .\create_data.js
```

Penjelasan :

```
.\nama_file_kamu.js
```

Untuk mengstop proses yang sedang berjalan caranya :

```
ctrl+c
```

Kerana kalo input data satuan tidak memakai fungsi close database saat sudah berhasil insert data

## Part 2 Read Data

## Step keempat Membuat Koneksi dengan Database

Caranya sama dengan Part 1 yaitu membuat koneksinya terlebih dahulu

Silahkan kamu buka saja file yang pertama kamu buat. kalo saya nama filenya create_data.js

Dan ambil script bagian koneksi dan modelnya ya..

atau kalo kamu bingung bisa liat script dibawah ini untuk koneksi dan modelnya

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db-belajar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const buahScheme = new mongoose.Schema({
  name: String,
  harga: Number,
  review: String,
});

const Buah = mongoose.model("Buah", buahScheme);
```

Lalu copy script di atas atau script di file read_data.js

Lalu buat file namanya read_data.js nama filenya bebas. sesuka kamu saja ya.

Untuk menjalankanya kamu bisa cek di bagian info di atas ya.

## Part 3 Validasi Data

## Step kelima untuk melakukan pengecekan terhadap data sebelum data tersimpan kedalam database

buat file baru seperti biasa, nama file yang saya buat validation_data.js kamu bebas membuat namanya seperti apa.

Untuk membuat fungsi validation kamu bisa membaca documen resminya dari mongoose [disini](https://mongoosejs.com/docs/validation.html#built-in-validators)

Agak bingung ? oke coba buka file saya yang bernama validation_data.js untuk melihar script dan penjelasan yang sudah saya buat .

Untuk mencobanya silahkan scroll diatas pada bagian info

## Part 4 Update dan Delete Data

## Step keenam membaca documment mongoose untuk update dan delete

buat file baru seperti biasa, nama file yang saya buat update_delete_data.js kamu bebas membuat namanya seperti apa.

Untuk membuat fungsi update kamu bisa membaca documment resminya dari mongoose [disini](https://mongoosejs.com/docs/api/model.html#model_Model.updateOne)

Untuk membuat fungsi delete kamu bisa membaca documment resminya dari mongoose [disini](https://mongoosejs.com/docs/api/model.html#model_Model-deleteOne)

Kalo bingung lagi coba buka lagi ya file saya yang bernama update_delete_data.js

Sebenernya kamu bisa copy file yang dari Step kelima, dari membuat koneksi dan membuat model saja yang di copy

Untuk mencobanya silahkan scroll diatas pada bagian info

## Part 5 Relationship atau menghubungkan one-to-one anatar dua model buah dan pelanggan

## Step Ketujuh membuat data baru dan saling tehubung

buat file baru seperti biasa, nama file yang saya buat relationship_data.js kamu bebas membuat namanya seperti apa.

Silahkan buka file relationship_data.js untuk melihat script dan penjelasanya

## Selesai, cukup sampai disini dulu yah untuk basic mongoose. Terimakasih telah membaca

# Cooming Soon untuk Step atau Part Selanjutnya ya.
