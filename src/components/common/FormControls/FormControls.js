import React from "react";
import s from "./FormControls.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <props.fieldtype {...props} {...input} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
