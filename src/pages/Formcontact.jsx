import React, { useState } from "react";

const Formcontact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Phone, setPhone] = useState("");
  const [show, setshow] = useState(true);

  const changename = (e) => {
    setname(e.target.value);
  };
  const FormHandelr = (e) => {
    e.preventDefault();
    if (name.length == "") {
      setshow(false);
      return;
    }
    if (email.length == "") {
      setemail(false);
      return;
    }
    if (Phone.length == "") {
      setPhone(false);
      return;
    }
    console.log(name);
    setshow(true);
  };

  return (
    <div>
      
      <form onSubmit={FormHandelr}>
        <div className="form-control">
          <input placeholder="Your Name" onChange={changename} />
          {!show && <p>Please Enter Your Name</p>}
        </div>
        <div className="form-control">
          <input placeholder="Your Email" />
          {!show && <p>Please Enter Your Email</p>}
        </div>
        <div className="form-control">
          <input placeholder="Phone Numpers" />
          {!show && <p>Please Enter Your Phone</p>}
        </div>
        <select>
          <option>Select Depatment </option>
          <option> Ont </option>
          <option>Two </option>
          <option>Three </option>
        </select>
        <div className="form-control">
          <textarea placeholder="Message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Formcontact;
