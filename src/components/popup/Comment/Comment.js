import React from "react";
import { Image } from "react-bootstrap";
import { NoImage } from "../../../assets";
import "./Comment.css";

export function Comment(props) {
  const { comment } = props;
  return (
    <div className="popup_comment">
      <Image className="no-user" alt="no-user" src={NoImage} />
      <div>
        <p>Nombre: </p>
        <p>{comment}</p>
      </div>
    </div>
  );
}
