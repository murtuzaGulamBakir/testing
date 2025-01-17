import React, { useEffect, useState } from "react";
import ballImage from "../assets/725e29b112f241f223437fbe8d0d299b.png";
import Navbar from "./Navbar";
import "../styles/Result.css";
import axios from "axios";
export default function Result() {
  const [resultData, setresultData] = useState([""]);

  useEffect(() => {
    // Make a request for result data fetch
    axios
      .get("https://murtuza-express-app.herokuapp.com/api/results") // hosted backend url
      .then(function (response) {
        // handle success
        console.log("Calling..");
        return setresultData(response.data); // setting state of component
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="main">
        <section className="glass">
          <Navbar />
          <div className="result-card-rapper">
            {resultData.map((element) => (
              <div className="result-card">
                <div className="result-card-content-wrapper">
                  <div className="result-country-name-image-wrappers">
                    <img
                      src={`${element.teamOneImage}`}
                      alt={`${element.teamOneName}`}
                      className="teamOneImage"
                    />
                    <h2 className="teamOneName">{element.teamOneName}</h2>
                  </div>

                  <p className="vs">Vs</p>
                  <div className="country-name-image-wrappers">
                    <img
                      src={`${element.teamTwoImage}`}
                      alt={`${element.teamTwoName}`}
                      className="teamTwoImage"
                    />
                    <h2 className="teamTwoName">{element.teamTwoName}</h2>
                  </div>
                  <p className="date">Date : {element.matchDate}</p>
                  <p className="winnerTeam">Winner : {element.winner}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glass Design design */}

        <marquee behavior="alternate" scrollamount="40">
          <marquee behavior="alternate" direction="down" scrollamount="30">
            <img className="moving-circle" src={ballImage} alt="" />
          </marquee>
        </marquee>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}
