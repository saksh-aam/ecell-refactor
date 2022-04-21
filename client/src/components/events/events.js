import React from "react";
import "./events.css";

const Events = () => {
  return (
    <div className="eventbody p-5" id="event">
        <h2 style={{ fontSize: "55px", color: "white", fontWeight: "bold" }}>
          Eve
          <span
            style={{
              fontSize: "55px",
              color: "#FDCA40",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            nts
          </span>
        </h2>
      <div className="bigbox1">
        {/* <div xl="6" className="box" style={{ textAlign: "center" }}>
          <img className="thumbnail image" src={require("./idea.jpg")} />
          <div className="text" >
            <h1
              style={{
                marginTop: "-6vh",
                marginBottom: "3vh",
                lineHeight: "5vh",
                color: "#FDCA40",
              }}
            >
              IDEATHON
            </h1>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              Ideathon is about curating ideas and contemplating their probable
              benefit to the society. It's rightly said, "A good idea becomes
              great when you let it out." It's an opportune moment for you to
              propose a rational solution to the challenges existing in the
              society or come forth with the best possible mix of idea and
              innovation, offering authentic products to the society.
            </p>
            <div style={{ margin: "2vh" }}>
              <button href="https://ideathon.ecelliiitp.org" className="button">
                {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }} />}{" "}
                Explore
              </button>
            </div>
          </div>
        </div> */}
        <div className="div-xl-6 box">
          <img className="thumbnail image" src={require("../../images/esummit.png")} alt="Esummit-IIITP"/>
          <div className="text" >
            <h1
              style={{
                marginTop: "-6vh",
                marginBottom: "3vh",
                lineHeight: "5vh",
                color: "#FDCA40",
              }}
            >
              E-Summit'22
            </h1>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              E-Summit '22 is the flagship event of E-Cell IIIT Pune that aims at Making Impossible Inevitable. The event focuses on activities that will make students aware of the business environment and trigger them to create an innovative start-up. E-Summit will include speaker sessions, workshops, business-oriented tournaments, contests that will build entrepreneur talent and help students to learn and grow.
            </p>
            <div style={{ margin: "2vh" }}>
              <button
                
                className="button"
              >
                {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }}/> */}{" "}
              <a href="https://esummit.ecelliiitp.org" > Explore </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bigbox2">
        <div className="div-xl-4 box">
          <img className="thumbnail image" src={require("../../images/Hack.jpg")} alt="Hackathon"/>
          <div className="text text1" >
            <h1
              style={{
                marginTop: "-6vh",
                marginBottom: "3vh",
                lineHeight: "5vh",
                color: "#FDCA40",
              }}
            >
              Hackathon
            </h1>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              An inventive mind creates resourceful products inspired from the best. Designing software based products with accurate amounts of innovation, design and user-friendly techniques to solve the given problems is the gist of any Hackathon. Connect with like-minded people to combine your enthusiasm levels to come up with authentic software solutions.
            </p>
            <div style={{ margin: "2vh" }}>
              <button className="button"><a href="https://hackathon.ecelliiitp.org">Explore</a></button>
            </div>
          </div>
        </div>
        <div className="box">
          <img className="thumbnail image" src={require("../../images/quiz.jpg")} alt="Silk Route"/>
          <div className="text text1" >
            <h1
              style={{
                marginTop: "-6vh",
                marginBottom: "3vh",
                lineHeight: "5vh",
                color: "#FDCA40",
              }}
            >
              Silk Route Quiz
            </h1>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              Entrepreneurship is a dynamic concept. It changes as the nations
              develop. The millennials aiming to be the exemplar figures of
              tomordiv ought to keep themselves informed of the history and
              future of entrepreneurship as success in any domain demands
              awareness. Test your knowledge and responsiveness in the field of
              entrepreneurship through the Quiz.
            </p>
            <div style={{ margin: "2vh" }}>
              <button className="button">
                {/*<FiberManualRecordIcon style={{ color: 'red', paddingRight: '4px', fontSize: '20px' }} />*/}
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        <div className="div-xl-4 box">
          <img className="thumbnail image" src={require("../../images/Speaker.jpg")} alt="Ideathon"/>
          <div className="text text1">
            <h1
              style={{
                marginTop: "-6vh",
                marginBottom: "3vh",
                lineHeight: "5vh",
                color: "#FDCA40",
              }}
            >
              Ideathon
            </h1>
            <p
              style={{
                textAlign: "justify",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              Ideathon is about curating ideas and contemplating their probable benefit to the society. It's rightly said, "A good idea becomes great when you let it out." It's an opportune moment for you to propose a rational solution to the challenges existing in the society or come forth with the best possible mix of idea and innovation, offering authentic products to the society.
            </p>
            <div style={{ margin: "2vh" }}>
              <button className="button">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
