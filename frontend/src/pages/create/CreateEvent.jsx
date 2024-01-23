import React, { useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import "./CreateEvent.css";

export const CreateEvent = () => {
  const [showMerchForm, setShowMerchForm] = useState(false);

  const handleCheckboxChange = () => {
    setShowMerchForm(!showMerchForm);
  };

  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>

      <div className="form-field">
        <h1>New Event</h1>
        <form action="#">
          <input type="text" placeholder="Give a title" /><br></br>
          <textarea rows={10} placeholder="Give a details" /><br></br>

          <input type="date" /><br></br>
          <input type="date" /><br></br>

          <input type="number" placeholder="number of participants" /><br></br>
          <input type="number" placeholder="event fee" /><br></br>
          <input
            className="chk"
            type="checkbox"
            id="merchCheckbox"
            onChange={handleCheckboxChange}
          />
          <label className="merchCheckbox">Do you want to add Merch?</label>
        </form>

        <div className={`createrc ${showMerchForm ? "center" : ""}`}>
          <button className="creater">Create</button>
        </div>
      </div>

      {showMerchForm && (
        <div className="form-field2">
          <h1 className="merch">Merch</h1>
          <form action="#">
            <input type="text" placeholder="Name of the Merch" /><br></br>
            <textarea rows={10} placeholder="Give a details" /><br></br>
            <label className="size">Select the size of the Tee</label>
            <select name="size" id="">
              <option value="1">S</option>
              <option value="1">M</option>
              <option value="1">L</option>
              <option value="1">XL</option>
              <option value="1">XXL</option>
            </select>
          </form>
        </div>
      )}
    </div>
  );
};
