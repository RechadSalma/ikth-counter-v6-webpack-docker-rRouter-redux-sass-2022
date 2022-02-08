import React from "react";

export default function Form() {
  return (
    <form name="iKcontactForm" method="POST">
      <input type="hidden" name="form-name" value="iKcontactForm" />
      <p>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="NAME" />
      </p>
      <p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="EMAIL" />
      </p>
      <p>
        <label htmlFor="message">Message: </label>
        <textarea id="message" name="MESSAGE"></textarea>
      </p>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
