import React from "react";
import styles from "../Button/Button.module.css";
import { NavLink } from "react-router-dom";
import { Icon } from "../Style/Styled";
import { getInitials } from "../Date/Date";

const Button = ({ id, name, color }) => {
  return (
    <div>
      <NavLink
        to={"/chats/" + id}
        className={({ isActive, isPending }) =>
          isPending ? styles.button : isActive ? styles.active : styles.button
        }
      >
        <Icon $bgColor={color}>{getInitials(name)}</Icon>
        <p className={styles.name}>{name}</p>
      </NavLink>
    </div>
  );
};

export default Button;