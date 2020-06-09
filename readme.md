# Belajar Database Basic Menggunakan Mongoose

#### Author

[Rahmat Subandi](https://rhmtin.com/)

#### Another Project

[Lazadi](https://lazadi.rhmtin.com/)

## Awalan

untuk bisa mengikuti step dibawah ini silahkan terlebih dahulu download MongoDB dulu di link ini [Download MongoDB](https://www.mongodb.com/try/download/community) klik On-Premises pilih sesuai OS pilih package msi

- untuk cara menginstallnya next2 saja dan pilih complete
- tujuan file biarkan default saja
- dan pastikan kamu ceklis Install MongoDB Compasnya .

Jangan lupa terkoneksi internet juga ya

kalo sudah sampai masuk ke dalam Aplikasinya klik Connect ya
And baru ikuti step dibawah ini

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
scriptnya bisa liat di file buatdata.js
```

Di file itu juga sudah ada penjelasanya.

untuk dokumentasi mongoose resmi bisa kamu baca disini [Dokumentasi dan cara koneksi](https://mongoosejs.com/)

untuk menjalankan filenya ketikan ini di terminal

```
node .\buatdata.js
```

Penjelasan :

```
.\nama_file_kamu.js
```

Lalu silahkan kamu cek di MongoDB, maka akan bertambah db yang kamu buat

### Info

Untuk mengstop proses yang sedang berjalan caranya :

```
ctrl+c
```

Kerana kalo input data satuan tidak memakai fungsi close database saat sudah berhasil insert data
