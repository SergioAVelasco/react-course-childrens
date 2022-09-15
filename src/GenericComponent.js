import React from "react";
import "./GenericComponent.css";

const GenericComponent = (props) => {
  console.log(props);
  const { children } = props;
  return (
    <div className="gen-component">
      <h3>Soy un componente</h3>
      <div>{children}</div>
    </div>
  );
};

export default GenericComponent;
