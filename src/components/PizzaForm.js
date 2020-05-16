import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const PizzaForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    ham: false,
    cheese: false,
    instructions: "",
  });

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    size: yup.string().required("Must choose a size"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    cheese: yup.boolean(),
    instructions: yup.string(),
  });

  const inputHandler = (event) => {
    event.persist();

    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };

  const validate = (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    yup.reach(formSchema, event.target.name).validate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="PizzaForm">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Name<br></br>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <label htmlFor="size">
          Size<br></br>
          <select
            value={formState.size}
            name="size"
            id="size"
            onChange={inputHandler}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <br></br>
        <p>Select Toppings:</p>
        <label htmlFor="pepperoni">
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            id="pepperoni"
            value={formState.pepperoni}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="sausage">
          Sausage
          <input
            type="checkbox"
            name="sausage"
            id="sausage"
            value={formState.sausage}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="ham">
          Ham
          <input
            type="checkbox"
            name="ham"
            id="ham"
            value={formState.ham}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor="cheese">
          Extra Cheese
          <input
            type="checkbox"
            name="cheese"
            id="cheese"
            value={formState.cheese}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <br></br>
        <label htmlFor="instructions">
          Special Instructions
          <input
            type="text"
            name="instructions"
            id="instructions"
            value={formState.instructions}
            onChange={inputHandler}
          />
        </label>
        <br></br>
        <button className="submit" type="submit">
          Add to Order
        </button>
      </form>
    </div>
  );
};
export default PizzaForm;
