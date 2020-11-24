import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addPlanets } from "../../redux/planets_reducer";
import Loader from "../common/loader";
import Planet from "../planet/planet";
import PlanetsCard from "./planetsCard";
import s from "./planetsContainer.module.scss";
import PlanetsDate from "./planetsDate";
import PlanetsDateForm from "./planetsDateForm";
const PlanetsContainer = () => {
  const planOnSub = (val) => {
    console.log(val);
  };
  const dispatch = useDispatch();
  let planetsData = useSelector((state) => state.planets.planets);
  let isFetching = useSelector((state) => state.planets.isFetching);
  useEffect(() => {
    console.log(planetsData);
  }, [planetsData]);
  return (
    <div className={s.main}>
      <PlanetsDateForm />
      {isFetching ? (
        <Loader />
      ) : (
        <div className={s}>
          {/* <PlanetsFromReduxSearch onSubmit={"l"} /> */}
          {!planetsData ? null : (
            <div className={s.cardContainer}>
              {planetsData.map((i) => {
                return <PlanetsCard data={i} />;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

let PlanetsFromSearch = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <div className="form-group">
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
      <div className="form-group">
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
