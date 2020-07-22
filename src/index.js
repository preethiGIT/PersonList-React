import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* Props along with destructuring */
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

/* PersonList Component (stateless) */
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer" />
      <Person img="22" name="bob" job="designer">
        <p>
          I am a designer who is passionate about interior designing
        </p>
      </Person>
      <Person img="56" name="david" job="architect" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
