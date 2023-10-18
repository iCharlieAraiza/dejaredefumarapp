import React from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import HandIcon from "../assets/hero/hand_icon.png";
import ArmIcon from "../assets/hero/arm_icon.png";
import ArrowIcon from "../assets/hero/arrow_icon.png";
import CigarreteIcon from "../assets/hero/cigarrete_icon.png";

import ChromeBtn from "../assets/hero/chrome-btn1.png";
import WebAppBtn from "../assets/hero/webapp-btn.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background">
        <div className="hero__bg-svg top-left">
          <Suspense fallback={<div>Loading...</div>}>
            <img src={HandIcon} alt="Hand icon" />
          </Suspense>
        </div>
        <div className="hero__bg-svg top-right">
          <Suspense fallback={<div>Loading...</div>}>
            <img src={CigarreteIcon} alt="Hand icon" />
          </Suspense>
        </div>
        <div className="hero__bg-svg bottom-left">
          <Suspense fallback={<div>Loading...</div>}>
            <img src={ArmIcon} alt="Hand icon" />
          </Suspense>
        </div>
        <div className="hero__bg-svg bottom-right">
          <img src={ArrowIcon} alt="Hand icon" />
        </div>
      </div>
      <div className="container">
        <h1 className="big-display">
          Deja de fumar{" "}
          <span className="featured-text">
            hoy mismo
            <svg
              className="hero-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="86"
              fill="none"
              viewBox="0 0 85 86"
            >
              <path
                fill="#DF4646"
                d="M84.218 58.925c-14.904-14.259-33.913-24.05-54.333-28.13.262-4.933.632-9.86 1.111-14.777a.816.816 0 00-.48-.859l.028-.012c1.08-.436.37-2.062-.71-1.627a77.165 77.165 0 00-5.793 2.616c-.03.013-.054.033-.082.052A87.565 87.565 0 002.633 28.914c-.551.447-.377 1.246.228 1.517a147.69 147.69 0 0125.143 14.55c.498.357 1.422.064 1.431-.624.05-3.917-.15-6.666.037-10.578 15.897 1.295 34.389 11.53 38.773 15.627 4.875 3.294 9.948 7.37 14.189 11.428 0 0 2.612-1.112 1.785-1.907l-.001-.002zM28.1 30.453s-.035-.007-.053-.009a1.5 1.5 0 01-.097.553c.036.158.054.32.036.484-.01.104-.032.204-.044.306-.016.159-.06.307-.128.443l.191.033a335.377 335.377 0 00-.336 10.273A150.096 150.096 0 004.88 29.389 85.836 85.836 0 0125.2 17.583a.984.984 0 00.297-.194c1.228-.6 2.47-1.169 3.73-1.703-.01.044-.022.084-.025.13a334.17 334.17 0 00-1.105 14.633l.006.004z"
              ></path>
              <path
                stroke="#DF4646"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M28.89 15.283s.195.282.19.285c-.023.016-1.193 1.262-1.22 1.281-.044.029 1.543 2.24 1.513 2.263-.062.04-3.58-2.368-3.619-2.345-.066.045 4.099 6.008 4.043 6.045-.081.055-5.196-4.586-5.28-4.53-.09.058 4.712 6.885 4.64 6.936-.11.074-5.572-5.342-5.69-5.265-.13.086 6.319 9.128 6.169 9.229-.174.114-7.684-8.426-7.85-8.315-.165.111 7.111 10.286 6.95 10.392-.212.14-8.609-10.245-8.808-10.113-.151.098 8.654 12.564 8.478 12.68-.205.134-9.654-11.418-9.828-11.304-.238.156 10.28 14.934 10.076 15.068-.182.118-11.577-14.429-11.816-14.27-.21.137 11.952 17.13 11.605 17.36-.258.17-13.46-17.389-13.654-17.26-.276.182 13.007 18.681 12.647 18.919-.36.238-14.14-18.577-14.338-18.445-.182.118 10.213 14.714 9.953 14.886-.21.137-11.24-14.382-11.513-14.202-.153.102 9.698 14.084 9.5 14.212-.237.155-10.15-12.615-10.376-12.465-.161.106 7.696 11.16 7.532 11.267-.227.15-8.765-10.09-8.943-9.97-.125.084 4.058 5.832 3.948 5.905-.127.085-5.396-5.235-5.514-5.157-.08.05 2.932 4.193 2.843 4.251-.09.059-4.813-4.305-4.9-4.247-.035.025 1.383 1.994 1.348 2.019"
              ></path>
            </svg>
          </span>
        </h1>
        <p className="big-paragrah">
          Aplicación web gratuita que te ayudará y acompañará en tu proceso de
          dejar el tabaco
        </p>
        <div className="hero_button-section">
          <Link
            to="/signup"
            className="btn btn-big hero_button hero_button--primary"
          >
            Regístrate gratis
          </Link>
          <Link to="/login" className="hero_button hero_button--secondary">
            Inicia sesión →
          </Link>
        </div>
        <div className="hero-status">
          <p>
            Actualmente disponible fase <b>Alfa 2.1</b>
          </p>
        </div>
        <div className="hero-download">
          <Link to="/login">
            <img src={WebAppBtn} alt="Abrir la aplicaicón web" loading="lazy"  />
          </Link>
          <Link to="/login" className="disabled">
            <img
              src={ChromeBtn}
              alt="Descargar la extensión en Chrome"
              loading="lazy" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
