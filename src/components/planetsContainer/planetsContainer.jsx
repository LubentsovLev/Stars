import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addPlanets } from "../../redux/planets_reducer";
import Planet from "../planet/planet";
import s from "./planetsContainer.module.scss";

const PlanetsContainer = () => {
  const planOnSub = (val) => {
    console.log(val);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(addPlanets());
  }, []);
  return (
    <div className={s.main}>
      <PlanetsFromReduxSearch onSubmit={"l"} />
      <Planet />
    </div>
  );
};

let PlanetsFromSearch = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field
          className={s.input}
          name="Date_one"
          placeholder=""
          component="input"
          //   class="form-control"
          required
        ></Field>
        {/* <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <Field
          className={s.input}
          name="Date_two"
          placeholder=""
          component="input"
          //   class="form-control"
          required
        ></Field>
        <button className={s.btn}>See</button>
        {/* <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
      </div>
    </form>
  );
};
const PlanetsFromReduxSearch = reduxForm({
  form: "Planets",
})(PlanetsFromSearch);

export default PlanetsContainer;
