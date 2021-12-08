import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const App = () => {
  const editor = React.useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = React.useState<Descendant[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <Slate editor={editor} value={value} onChange={setValue}>
      <Editable
        onKeyDown={(event) => {
          if (event.key === "&") {
            // Prevent the ampersand character from being inserted.
            event.preventDefault();
            // Execute the `insertText` method when the event occurs.
            editor.insertText("and");
          }
        }}
      />
    </Slate>
  );
};

export default App;
