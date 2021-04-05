import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import { IoMdClose } from "react-icons/io";

const InputTag = ({ teamTags, updateTeamTags }) => {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  useEffect(() => {
    if (teamTags) setTags(teamTags);
  });
  const removeTag = (i) => {
    const newTags = tags;
    newTags.splice(i, 1);
    setTags(newTags);
    updateTeamTags(newTags, { name: "tags" });
    forceUpdate();
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      let newTags = tags;
      newTags.push(val);
      setTags(newTags);
      updateTeamTags(newTags, { name: "tags" });
      setValue("");
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <Container>
      <div className="input-tag">
        <div className="input-tag__tags">
          {tags.map((tag, i) => (
            <div key={tag}>
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => {
                  removeTag(i);
                }}
              >
                <IoMdClose />
              </button>
            </div>
          ))}
          <div className="input-tag__tags__input">
            <input
              type="text"
              onKeyDown={(e) => inputKeyDown(e)}
              value={value}
              onChange={({ target }) => handleChange(target.value)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default InputTag;
