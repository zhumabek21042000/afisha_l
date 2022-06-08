import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ data, status }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const buttonClick = (event) => {};
  const updateContent = (value) => {
    setContent(value);
  };
  return (
    <div className="container">
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={updateContent}
      />
      <button className="ui primary button" onClick={buttonClick}>
        Сохранить
      </button>
    </div>
  );
};

export default TextEditor;
