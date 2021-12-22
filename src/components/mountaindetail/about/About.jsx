import React, { Component } from "react";
import "./aboutm.css";
import Bromom from "../../../img/bromom.jpg";

const About = () => {
  return (
    <div className="am">
      <div className="am-left">
        <div className="am-card bg"></div>
        <div className="am-card">
          <img src="../images/bromo6.jpg" alt="" className="am-img" />
        </div>
      </div>
      <div className="am-right">
        <h1 className="am-title">
          <br></br>
          <br></br>
          <br></br>Apa saja aktivitas yang bisa kita lakukan di sekitar Gunung Bromo?
        </h1>
        <p className="am-sub">
          Meskipun mungkin relatif kecil bila dibandingkan gunung berapi lainnya di Indonesia, Gunung Bromo yang megah tidak akan mengecewakan dengan pemandangan spektakuler dan pemandangan dramatisnya. Dengan ketinggian 2.392 meter, Gunung
          Bromo tidak termasuk pegunungan tertinggi di Indonesia namun keindahannya sangat menakjubkan. Terletak sekitar 4 jam perjalanan dari Surabaya, ibu kota Jawa Timur, Gunung Bromo adalah bagian dari Taman Nasional
          Bromo-Tengger-Semeru yang luasnya mencapai 800 km persegi.
        </p>
        <p className="am-desc">
          Berdiri anggun di dalam kaldera besar Gunung Tengger, Gunung Bromo dikelilingi oleh hamparan pasir vulkanik yang melebar yang memancarkan keindahan mistis tertentu. Gunung Bromo dan daerah Tengger juga merupakan rumah dari
          kelompok sub-etnis Tengger yang masih melestarikan tradisi dan cara hidup mereka yang sudah tua. Di sini, Anda dapat mengamati budaya dan tradisi lokal dari 'orang Tengger' yang unik termasuk ritual dan upacara mereka.
          <br></br>
          <br></br>
          Sejauh yang bisa dilihat mata, padang pasir seperti lautan pasir di sekitar Gunung Bromo juga menawarkan petualangan lain. Karena Jeep adalah satu-satunya kendaraan yang mampu melewati medan yang sulit di sekitar Gunung Bromo,
          mengapa tidak memanfaatkannya sebaik-baiknya dan mengarahkan diri pada petualangan jip off-road yang seru di lautan pasir? Ada banyak operator yang dengan senang hati akan mengatur tur off-road di sekitar gunung, jadi Anda hanya
          perlu mempersiapkan diri dan bersiap menikmati sensasi yang luar biasa.
          <br></br>
          <br></br>
          Cara lain yang bagus untuk menikmati sensasi lautan pasir adalah dengan mengendarai kuda poni. Anda tidak perlu takut bahkan jika belum pernah naik kuda sebelumnya, Karena kuda biasanya dipegang oleh pemilik. Jauh dari kehidupan
          sehari-hari yang ramai, inilah salah satu cara terbaik untuk menikmati ketenangan alam.
          <br></br>
          <br></br>
          Setelah aktivitas petualangan dan fisik, iklim Gunung Bromo yang sejuk dan menyegarkan juga merupakan tempat yang indah dan tempat yang sempurna untuk menikmati secangkir kopi yang mengepul. Rasakan keindahan magis Gunung Bromo
          sembari menikmati secangkir kopi panas dan makanan ringan. Restoran dan kafe terdekat menawarkan beberapa pemandangan gunung terbaik, sehingga Anda dapat menikmati Coffee Break yang sempurna.
        </p>
        <div className="am-award">
          <img src={Bromom} alt="" className="am-award-img" />
          <div className="am-award-texts">
            <h4 className="am-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="am-award-desc">
              Menuju lokasi gunung Bromo ada beberapa rute dan jalur umum yang sudah dikenal umum, diantaranya adalah jalur selatan yaitu menuju Bromo dari Tumpang Malang - Gubugklakah, yang juga searah dengan rute menuju Ranu Pani dan
              Semeru. Kemudian jalur dari kota Pasuruan serta yang paling populer yaitu jalur ke Bromo via Probolinggo. Jalur via probolinggo lebih diminati karena banyaknya tersedia penginapan dan hotel dekat dengan kawasan gunung Bromo.
              Untuk kendaraan roda 4 sekali masuk bisa Rp 10.000, kendaraan roda 2 yaitu Rp 5.000, sepeda pascal Rp 2.000, dan kuda yaitu Rp 1.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
