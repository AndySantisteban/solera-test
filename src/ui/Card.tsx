import React from "react";

interface Props {
  id: string;
  name: string;
  description: string;
  EditFunction: () => void;
  DeleteFunction: () => void;
}

/** Card Component  */
const Card = ({
  id,
  name,
  description,
  EditFunction,
  DeleteFunction,
}: Props) => {
  return (
    <div className="col-4 my-2" key={id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-light">{description}</p>
        </div>
        <div className="card-footer d-flex gap-2">
          <button onClick={EditFunction} className="btn btn-link ">
            Editar
          </button>
          <button onClick={DeleteFunction} className="btn btn-link">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
