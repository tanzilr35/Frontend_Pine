import React, { Component } from "react";
import "./aboutl.css";
import Toba from "../../../img/toba.jpg";

const About = () => {
  return (
    <div className="al">
      <div className="al-left">
        <div className="al-card bg"></div>
        <div className="al-card">
          <img src="../images/toba1.jpg" alt="" className="al-img" />
        </div>
      </div>
      <div className="al-right">
        <h1 className="al-title">
          <br></br>
          <br></br>
          <br></br>Apa saja yang bisa kita lakukan di Danau Toba?
        </h1>
        <p className="al-sub">
          Sumatra Utara dikenal memiliki keindahan alam yang memesona. Salah satu destinasi favoritnya yakni Danau Toba. Dengan luas sekitar 1.130 kilometer persegi, Danau Toba menjadi salah satu tempat paling diminati para wisatawan. Danau
          Toba terletak di Bukit Barisan, Kabupaten Toba Samosir, Sumatera Utara
        </p>
        <p className="al-desc">
          Terdapat beberapa rute perjalanan yang bisa dipilih, tergantung dari mana kamu memulai perjalanan. Berikut adalah salah satunya
          <br></br>
          Bandara Kualanamu: melajulah menuju Jalan Lintas Tengah Sumatra untuk menuju ke Tebing Tinggi. Kemudian, lanjutkan perjalanan ke Sarbelawan, Pematangsiantar, Seribudolok, dan Parapat. Sesampainya di Parapat, Danau Toba sudah
          berada kanan jalan. Waktu tempuhnya sekitar enam jam perjalanan.
          <br></br>
          <br></br>
          Liburan ke Danau Toba dijamin tak akan membuatmu bosan. Terdapat berbagai aktivitas seru yang bisa dilakukan, salah satunya menjelajahi danau menggunakan kayak.
          <br></br>
          <br></br>
          Dari Labuan Bajo, kamu akan berlayar dari Dermaga Loh Liang, Pulau Komodo.Selain itu, kalau suka berkemah, kamu bisa menuju ke Desa Paropo. Mirip Ranu Kumbolo, pinggiran danau ini dipenuhi anak-anak muda dengan tenda
          berwarna-warni. Suasananya begitu nyaman dan menyenangkan, bermalam sambil dikelilingi pepohonan bukit bisa jadi pengalaman tak terlupakan. Tidak ada biaya berkemah, kamu tinggal membawa peralatan kemahmu saja.
          <br></br>
          <br></br>
          Untuk yang suka mendaki, kamu bisa mendaki Bukit Holbung di Pulau Samosir. Sudah aja jalanan setapak yang akan mengantarmu ke puncak bukit. Sesampainya di puncak bukit, kamu bisa melihat Danau Toba di salah satu sisinya. Sementara
          sisi yang lainnya berupa pemandangan gugusan perbukitan hijau. Dijamin bikin pikiranmu segar kembali, deh.
        </p>
        <div className="al-award">
          <img src={Toba} alt="" className="al-award-img" />
          <div className="al-award-texts">
            <h4 className="al-award-title">Biaya Tiket Masuk</h4>
            <p className="al-award-desc">
              Kamu bisa mendayung jauh menuju perairan danau yang jernih. Di sana bakal terlihat lebih indah panorama danau yang dikelilingi bukit hijau. Harga sewanya gak terlalu mahal, hanya Rp50 ribu untuk dua orang, sudah termasuk
              pelampung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
