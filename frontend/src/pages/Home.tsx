import { useState } from "react";
import { Greet } from "../../wailsjs/go/main/App";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div id="Home">
      <div id="result">{resultText}</div>
      <div id="input" className="input-box">
        <input
          id="name"
          className="input w-full h-20"
          onChange={updateName}
          autoComplete="off"
          name="input"
          type="text"
        />
        <Button onClick={greet}>Greet</Button>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
