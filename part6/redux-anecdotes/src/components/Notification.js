import React from "react";
import { noNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";

//Presentational
const Notification = (props) => {
  const notification = props.notification;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  const hideNotification = () => {
    setTimeout(() => {
      props.noNotification();
    }, 5000);
  };

  const showNotification = () => {
    return <div style={style}>{notification}</div>;
  };
  return (
    <div>
      {showNotification()}
      {hideNotification()}
    </div>
  );
};

//-----------


//Container Componant
const mapStateToProps = state => {
  return{
    notification: state.notification
  }
}

const mapDispatchToProps = {
  noNotification,
}

const ConnectedNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)
export default ConnectedNotification
