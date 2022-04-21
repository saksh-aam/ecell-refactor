import './contact.css';
import { useState } from "react";


const Contact = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        subject: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    //change the url here to change database source
    const url = "https://contact-form-5db31-default-rtdb.firebaseio.com/users.json";

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        //initiating variables
        const { userName, email, subject, message } = userData;

        if (userName && email && subject && message) {
            const res = fetch(
                url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName,
                        email,
                        subject,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    userName: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Our Team will get back to you soon");
            }
        } else {
            alert("Fill the required data");
        }
    };

    return (
        <div className="mainb">
            <h1 style={{ color: "#001427" }} data-aos="fade-up">Get in <span style={{ color: "#FDCA40" }}>Touch</span></h1>
            <p
                style={{
                    color: "rgba(0, 20, 39, 0.75)",
                    marginTop: "-9px",
                    marginBottom: "10vh",
                }}
            >Leave a message to contact our team
            </p>
            <div className="form_con">
                <form method="POST" className='form-section' onSubmit={submitData}>
                    <div className='input-block'>
                        <div className="col-1" style={{ display: "inline-block" }}>
                        <div className="fields">
                            {/* <fieldset> */}
                            <input
                                name="userName"
                                type="text"
                                className="input_con"
                                placeholder="Name"
                                value={userData.userName}
                                onChange={postUserData}

                            ></input>
                            <input
                                name="email"
                                type="email"
                                className="input_con"
                                placeholder="Email"
                                value={userData.email}
                                onChange={postUserData}

                            ></input>
                            <input
                                name="subject"
                                type="text"
                                className="input_con"
                                placeholder="Subject"
                                value={userData.subject}
                                onChange={postUserData}
                            ></input>
                            {/* </fieldset> */}
                        </div>
                    </div>
                    <div className="col-2" style={{ display: "inline-block" }}>
                        <div className="fields">
                            {/* <fieldset> */}
                            <textarea
                                name="message"
                                cols="40"
                                className="textarea_con"
                                placeholder="Message"
                                value={userData.message}
                                onChange={postUserData}
                            ></textarea>
                            {/* </fieldset> */}
                        </div>
                        {/* Use fieldset if div.fields not works */}
                    </div>
                    </div>
                    <div className='btn-block'>
                        <button id="submit" type="submit" >Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;