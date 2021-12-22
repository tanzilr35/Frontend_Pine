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
          Pink beach merupakan salah satu pulau yang berada di Pulau Komodo, Flores Barat, Nusa Tenggara Timur. Untuk datang kemari kamu harus menempuh perjalanan darat dan laut karena letaknya yang ada di Pulau Komodo. Pantai ini berjarak
          82 kilometer dari Kota Mataram.
        </p>
        <p className="am-desc">
          Selain bermain-main di Pink beach, Labuan Bajo, aktivitas favorit lainnya adalah melakukan snorkeling dan diving. Berbagai jenis terumbu karang dan ragam ikan yang indah, bisa kamu nikmati di taman bawah lautnya.
          <br></br>
          <br></br>
          Nah, untuk sampai ke Pink beach, Labuan Bajo, kamu harus menaiki pesawat menuju Bandar Udara Internasional Komodo. Kmau bisa menginap semalam dahulu di Labuan Bajo, untuk berangakt dengan kapal keesokan paginya, atau pilih rute
          pesawat subuh, untuk langsung berlayar ketika tiba di Labuan Bajo.
          <br></br>
          <br></br>
          Dari Labuan Bajo, kamu akan berlayar dari Dermaga Loh Liang, Pulau Komodo.
          <br></br>
          <br></br>
          Dari Dermaga Loh Liang, biasanya paket wisata kamu sudah termasuk kunjungan ke beberapa lokasi, termasuk pink beach. Ke Pink beach sendiri bisa ditempuh 30 menit menggunakan kapal atau 4 jam trekking melalui tebing karang dan
          hutan bakau. Mungkin akan lebih lama, akan tetapi panorama yang bisa kamu nikmati lebih indah.
        </p>
        <div className="am-award">
          <img src={Bromom} alt="" className="am-award-img" />
          <div className="am-award-texts">
            <h4 className="am-award-title">Biaya Transportasi dan Tiket Masuk</h4>
            <p className="am-award-desc">
              Untuk harga menuju ke Pantai Pink sangat beragam, kamu bisa naik private boat seharga Rp 800 ribu - Rp 900 ribu satu kapal pulang-pergi, ataupun public boat seharga Rp30 ribu hingga Rp 40 ribu/ orang untuk sekali jalan.
              Sedangkan untuk tiket masuknya, hanya Rp10 ribu untuk wisatawan lokal dan Rp50 ribu untuk wisatawan mancanegara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
