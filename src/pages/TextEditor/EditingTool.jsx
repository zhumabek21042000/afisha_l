import React, { useState, useEffect, useRef, useMemo } from "react";
import { Jodit } from "jodit";

const EditingTool = ({ placeholder }) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    Jodit.make("#editor");
    setContent(Jodit.make("#editor").value);
  });

  return (
    <>
      <textarea id="editor"></textarea>
    </>
  );
};

export default EditingTool;
