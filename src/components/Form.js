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
        <legend className="form-legend">
          Please feel free to contact me using the form below. I'd love to hear
          about what you're working on and how I could help.
        </legend>
        <label htmlFor="name" className="form-label">
          First name
        </label>

        {errors.firstName && (
          <p className="form-error-msg">
            <BiErrorAlt className="error-icon" /> A first name is required
          </p>
        )}
        <input
          type="text"
          placeholder="e.g. Jacob"
          id="first-name"
          className="form-input-field"
          aria-label="first name text field"
          {...register("firstName", { required: true })}
        />
        <label htmlFor="name" className="form-label">
          Last name
        </label>
        {errors.lastName && (
          <p className="form-error-msg">
            <BiErrorAlt className="error-icon" /> A last name is required
          </p>
        )}
        <input
          type="text"
          placeholder="e.g. Smith"
          id="last-name"
          className="form-input-field"
          aria-label="last name text field"
          {...register("lastName", { required: true })}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        {errors.email && (
          <p className="form-error-msg">
            <BiErrorAlt className="error-icon" /> A valid email is required
          </p>
        )}
        <input
          type="text"
          placeholder="e.g. johndoe@gmail.com"
          id="email"
          className="form-input-field"
          aria-label="email text field"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <label htmlFor="message" className="form-label">
          Message
        </label>

        {errors.message && (
          <p className="form-error-msg">
            <BiErrorAlt className="error-icon" /> Message is required
          </p>
        )}
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
