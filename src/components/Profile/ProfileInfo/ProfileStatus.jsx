import React from "react";
import s from "./ProfileStatus.module.css";
import { useEffect } from "react";
import { useState } from "react";

// class ProfileStatus extends React.Component {
const ProfileStatus = (props) => {
  // state = {
  //   editMode: false,
  //   status: this.props.status,
  // };
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  // activateEditMode = () => {
  //   this.setState({ editMode: true });
  // };
  const activateEditMode = () => {
    setEditMode(true);
  };
  // deactivateEditMode = () => {
  //   this.setState({ editMode: false });
  //   this.props.updateUserStatus(this.state.status);
  // };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };
  // onStatusChange = (event) => {
  //   this.setState({ status: event.currentTarget.value });
  // };
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };
  // componentDidUpdate(prevProps, prevStatus) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  // render() {
  // return (
  //   <div>
  //     {/* {!this.state.editMode && ( */}
  //       <div>
  //         <span onDoubleClick={this.activateEditMode}>
  //           {this.props.status ? this.props.status : "---"}
  //         </span>
  //       </div>
  //     {/* )} */}
  //     {/* {this.state.editMode && ( */}
  //       <div>
  //         <input
  //           onChange={this.onStatusChange}
  //           autoFocus={true}
  //           onBlur={this.deactivateEditMode}
  //           value={this.state.status}
  //         />
  //       </div>
  //     {/* )} */}
  //   </div>
  // );
  return (
    <div className={s.status}>
      {!editMode && (
          <span onDoubleClick={activateEditMode}>
            {props.status ? props.status : "---"}
          </span>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
