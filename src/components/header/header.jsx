import React from "react";
import PropTypes from "prop-types";
import "./header.css";

const header = (props) => {
  return (
    <>
      <div className="container alert alert-danger text-center">
        <p>
          Olá , usuário: <strong>{props.nome}</strong>
        </p>
      </div>
    </>
  );
};

header.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default header;
