import React, { Component } from "react";
import "./aboutw.css";
import Kanto from "../../../img/kanto.jpg";

const About = () => {
  return (
    <div className="wa">
      <div className="wa-left">
        <div className="wa-card bg"></div>
        <div className="wa-card">
          <img src="../images/kanto1.jpg" alt="" className="wa-img" />
        </div>
      </div>
      <div className="wa-right">
        <h1 className="wa-title">
          <br></br>
          <br></br>
          <br></br>Apa saja yang bisa kita lakukan di Air Terjun Kanto Lampo
        </h1>
        <p className="wa-sub">
          Objek wisata Air Terjun Kanto Lampo terletak di Br. Kelod Kangin, Desa Beng, Kecamatan / Kabupaten Gianyar, Provinsi Bali. Lokasinya berjarak hanya sekitar 30 km dari pusat kota Denpasar, sementara dari arah pusat kota Gianyar
          berjarak 3 km saja terletak di sebelah utaranya.
        </p>
        <p className="wa-desc">
          Untuk menuju ke tempat air terjun kanto lampo maka kita harus terlebih dahulu menuruni puluhan anak tangga, Dan di sepanjang perjalanan ada beberapa tempat peristirahatan dan juga pedagang makanan dan minuman yang bisa anda temui.
          <br></br>
          <br></br>
          Tips Wisata ke Air Terjun Lampo adalah, sebaiknya jika mau berkunjung ke sini hindari saat di musim penghujan, karena jalannya akan menjadi licin. Perlu anda ketahui, sebenarnya jalan setapak yang menuju air terjun Kanto Lampo ini
          sebelumnya sudah lama digunakan warga setempat. Setelah Kanto Lampa menjadi tempat wisata, akses jalan pun lebih ditata menjadi baik untuk kenyamanan para pengunjungnya.
          <br></br>
          <br></br>
          jika anda ingin berkunjung ke Air Terjun Kanto Lampo ini, anda dapat berkunjung pada waktu operasional tempat wisata di Gianyar Bali ini adalah setiap hari, buka mulai dari 08.00 – 17.00 WITA.
          <br></br>
          <br></br>
        </p>
        <div className="wa-award">
          <img src={Kanto} alt="" className="wa-award-img" />
          <div className="wa-award-texts">
            <h4 className="wa-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="wa-award-desc">Setiap pengunjung yang datang ke sana akan dikenai tarif Tiket Masuk Air Terjun Kanto Lampo ini hanya Rp.5.000/orang.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
