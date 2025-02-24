import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
