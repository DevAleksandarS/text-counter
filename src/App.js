import { useState, useReducer } from "react";
import "./css/style.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return {
        characters: 0,
        words: 0,
        sentences: 0,
        lines: 0,
        symbols: 0,
      };
    case "CHARACTERS":
      return {
        characters: state.characters + 1,
        words: state.words,
        sentences: state.sentences,
        lines: state.lines,
        symbols: state.symbols,
      };
    case "WORDS":
      return {
        characters: state.characters,
        words: state.words + 1,
        sentences: state.sentences,
        lines: state.lines,
        symbols: state.symbols,
      };
    case "SENTENCES":
      return {
        characters: state.characters,
        words: state.words,
        sentences: state.sentences + 1,
        lines: state.lines,
        symbols: state.symbols,
      };
    case "LINES":
      return {
        characters: state.characters,
        words: state.words,
        sentences: state.sentences,
        lines: state.lines + 1,
        symbols: state.symbols,
      };
    case "SYMBOLS":
      return {
        characters: state.characters,
        words: state.words,
        sentences: state.sentences,
        lines: state.lines,
        symbols: state.symbols + 1,
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    characters: 0,
    words: 0,
    sentences: 0,
    lines: 0,
    symbols: 0,
  });

  const process = (text) => {
    dispatch({ type: "RESET" });

    for (let i = 0; i < text.length; i++) {
      dispatch({ type: "CHARACTERS" });

      if (
        text[i].toLowerCase() == text[i].toUpperCase() &&
        text[i - 1].toLowerCase() != text[i - 1].toUpperCase()
      ) {
        dispatch({ type: "WORDS" });
      }

      if (
        text[i].toLowerCase() == text[i].toUpperCase() &&
        text[i] != " " &&
        text[i] != "\n"
      ) {
        dispatch({ type: "SENTENCES" });
      }

      if (
        text[i].toLowerCase() == text[i].toUpperCase() &&
        text[i] != " " &&
        text[i] != "\n"
      ) {
        dispatch({ type: "SYMBOLS" });
      }

      if (text[i] == "\n") {
        dispatch({ type: "LINES" });
      }
    }
  };

  return (
    <div className="main-container">
      <h1>Text Counter</h1>
      <div>
        <textarea onChange={(e) => process(e.target.value)}></textarea>
        <div className="display-area">
          <p>
            {state.characters} Characters, {state.words} Words,{" "}
            {state.sentences} Sentences, {state.lines} Lines, {state.symbols}{" "}
            Symbols
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
