import React from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
;
import styles from '../MainPage/MainPage.module.css';
import Icons from '../../component/Icons/Icons'
import Notes from "../../component/Notes/Notes";
const MainPage = () => {
  const store = useSelector((store) => store.app);

  return (
    <div className={styles.box}>
      {store.modal && <Notes/>}
      <Icons/>
      <Outlet />
      
    </div>
  );
};

export default MainPage;