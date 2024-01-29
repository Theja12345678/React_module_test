import React, { useRef, useState } from "react";
import styles from "../Notes/Notes.module.css";
import Colors from "../Colors/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addChats, setButtons, setModal } from "../Slice/Slice";
import { checkPropertyInArray,   Help,  trimString } from "../Date/Date";


const Notes = () => {
  const store = useSelector((store) => store.app);
  const [input, setInput] = useState({
    name: "",
    color: "",
    id: Help(),
  });

  const dispatch = useDispatch();

  const name = useRef();

  function changeInput(field, value) {
    setInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  function newChat(id) {
    const obj = {
      ...store.chats,
      [id]: { name: input.name, color: input.color, notes: [] },
    };
    dispatch(addChats(obj));
  }

  function onCreate() {
    if (
      trimString(input.name) &&
      input.color &&
      !checkPropertyInArray("name", input.name, store.buttons)
    ) {
      dispatch(setModal());
      dispatch(setButtons(input));
      newChat(input.id);
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>Create New group</h2>
        </div>
        <div className={styles.input}>
          <h2>Group name</h2>
          <div className={styles.inputbox}>
            <input
              type="text"
              placeholder="Enter group name"
              onChange={(e) => {
                changeInput("name", trimString(e.target.value));
              }}
            />
          </div>
        </div>
        <div className={styles.colors}>

          <h2>Choose colour</h2>
          <Colors changeInput={changeInput} />

        </div>
        <div className={styles.create}>
          <button onClick={() => onCreate()}>Create </button>
        </div>
      </div>
      <div className={styles.bg} onClick={() => dispatch(setModal())}></div>
    </div>
  );
};

export default Notes;