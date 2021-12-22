import React, { Component } from "react";
import "./aboutp.css";
import Mangunanm from "../../../img/mangunanm.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="../images/mangunan4.jpg" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>Apa saja yang bisa kita lakukan di Hutan Pinus Mangunan?
        </h1>
        <p className="a-sub">Hutan Pinus Mangunan berada di Hutan Pinus, Sukorame, Mangunan, Imogiri, Bantul, DIY.</p>
        <p className="a-desc">
          Di Hutan Pinus Mangunan, terdapat panggung dengan kursi-kursi kayu yang ditata rapi. Inilah ikon hutan ini. Jangan lupa untuk mengabadikan moment di tempat ini, ya!
          <br></br>
          <br></br>
          Selain itu, ada pula gardu pandang yang menjadi spot menarik untuk dikunjungi wisatawan. Pengunjung bisa melihat pemandangan menakjubkan di sekitar hutan pinus dari gardu pandang ini. Pemandangan itu, di antaranya rindangnya
          pepohonan hijau nan asri, bukit-bukit hijau dari jauh, dan lain sebagainya. Pengunjung juga bisa tracking di sini, lho! Pengunjung bisa berpetualang melalui jalur outbond menuju Watu Abang. Nah, konon, Watu Abang ini merupakan
          tempat pertapaan Sultan Agung Hanyokrokusumo.
          <br></br>
          <br></br>
          Rute menuju destinasi wisata yang satu ini cukup mudah Jika anda dari pusat kota jogja maka anda harus kearah timur melewati Jalan Panembahan senopati, lalu sampai perempatan ke selatan menuju jalan Brigjen Katamso lurus jalan
          terus sampai perempatan lalu ke timur melewati jalan colonel sugiono lurus saja sampai ketemu pertigaan lalu ambil arah selatan melewati Jalan Sisingamangaraja selanjutnya menuju jalan Imogiri barat masih lurus terus sampai
          pertigaan lalu kea rah timur melewati Jalan Makam Raja, dan ikuti jalan tersebut maka anda akan sampai di Hutan Pinus Mangunan.
          <br></br>
          <br></br>
          Dari Dermaga Loh Liang, biasanya paket wisata kamu sudah termasuk kunjungan ke beberapa lokasi, termasuk pink beach. Ke Pink beach sendiri bisa ditempuh 30 menit menggunakan kapal atau 4 jam trekking melalui tebing karang dan
          hutan bakau. Mungkin akan lebih lama, akan tetapi panorama yang bisa kamu nikmati lebih indah.
        </p>
        <div className="a-award">
          <img src={Mangunanm} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="a-award-desc">
              Untuk masuk ke objek wisata ini, pengunjung dikenakan biaya sebesar 2.500,- rupiah per orang. Biaya parkirnya sebesar 3.000,- rupiah untuk motor, 5.000,- rupiah untuk mobil, dan 10.000 ,- rupiah untuk bus. Untuk fasilitasnya
              di antaranya area outbond, toilet/kamar mandi, gardu pandang, mushala, area parkir yang luas, dan warung-warung kecil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
