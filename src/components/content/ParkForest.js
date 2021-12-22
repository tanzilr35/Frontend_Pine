import React from "react";
import Colors from "../Colors";
import { Link } from "react-router-dom";
import DetailsThumb from "../DetailThumb";
import "../../index.css";
import "../../App.css";
import "../Content.css";

class ParkForest extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Hutan Pinus Mangunan, Jogjakarta",
        src: ["../images/mangunan.jpg", "../images/mangunan2.jpg", "../images/mangunan3.jpg", "../images/mangunan4.jpg", "../images/mangunan5.jpg"],
        description: "Inilah beberapa detail lokasi, rute, aktivitas dan biaya yang dibutuhkan untuk wisata ke Hutan Pinus Mangunan, Jogjakarta.",
        content:
          "Daya tarik Hutan Pinus Mangunan lainnya yang tidak bisa dilewatkan oleh pengunjung ialah bersantai dan menikmati udara segar dan damainya suasana dengan berayun-ayun di atas hammock. Pengunjung bisa melepas segala kepenatan dan merasakan embusan angin yang disertai gemerisik dedaunan. ",

        link: "/ParkForestDetail",
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="content">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <p>{item.content2}</p>
              <Link to={item.link}>Klik untuk informasi selengkapnya</Link>
              <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ParkForest;
