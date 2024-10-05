import React from "react";

const UniqueForm = () => {
  return (
    <div className="unique-container">
      <form className="unique-form">
        <h1 className="text-danger text-center ">Contact Us</h1>
        <div className="unique-flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="unique-input"
            />
            <span>first name</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="unique-input"
            />
            <span>last name</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="unique-input"
          />
          <span>email</span>
        </label>

        <label>
          <input required type="tel" placeholder="" className="unique-input" />
          <span>contact number</span>
        </label>

        <label>
          <textarea
            required
            rows="3"
            placeholder=""
            className="unique-input01"
          ></textarea>
          <span>message</span>
        </label>

        <button className="unique-fancy" href="/">
          <span className="unique-top-key"></span>
          <span className="unique-text">submit</span>
          <span className="unique-bottom-key-1"></span>
          <span className="unique-bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default UniqueForm;
