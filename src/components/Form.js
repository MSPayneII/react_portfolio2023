import React, { useRef } from "react";
import "../css/form.css";
import { BiErrorAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";

import emailjs from "emailjs-com";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = (data, e) => {
    console.log(data);

    emailjs
      .sendForm(
        "portfolio_contact_form",
        "template_3gye8df",
        form.current,
        "rhG0TCy6RzdJNY_8q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset(); // reset after form submit
  };
  return (
    <form
      action=""
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      <fieldset>
        <legend className="form-legend">Contact Form</legend>
        <label htmlFor="name" className="form-label">
          First name (required)
          {errors.firstName && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> First name cannot be empty
            </div>
          )}
        </label>

        <input
          type="text"
          placeholder="e.g. Jacob"
          id="first-name"
          className="form-input-field"
          aria-label="first name text field"
          {...register("firstName", { required: true })}
        />
        <label htmlFor="name" className="form-label">
          Last name (required)
          {errors.lastName && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> Last name cannot be empty
            </div>
          )}
        </label>
        <input
          type="text"
          placeholder="e.g. Smith"
          id="last-name"
          className="form-input-field"
          aria-label="last name text field"
          {...register("lastName", { required: true })}
        />
        <label htmlFor="email" className="form-label">
          Email (required)
          {errors.email && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> An email with an '@' sign is
              required
            </div>
          )}
        </label>
        <input
          type="text"
          placeholder="e.g. johndoe@gmail.com"
          id="email"
          className="form-input-field"
          aria-label="email text field"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <label htmlFor="message" className="form-label">
          Message (required)
          {errors.message && (
            <div className="form-error-msg">
              <BiErrorAlt className="error-icon" /> Message cannot be empty
            </div>
          )}
        </label>

        <input
          type="text"
          name="message"
          placeholder="Type message here"
          className="form-input-field form-input-message"
          id="message"
          aria-label="message text field"
          {...register("message", { required: true })}
        />

        <input type="submit" className="form-submit-btn action-btn" />
      </fieldset>
    </form>
  );
};

export default Form;
