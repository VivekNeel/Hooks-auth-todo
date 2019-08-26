import * as React from "react";

/** Presentation/UI */
import { JokeContainer } from "../components/Styles";
/** Utils */
import { apiRequest } from "../utils/Helper";

const url = "https://geek-jokes.sameerkumar.website/api";

const RandomJoke: React.FC<{}> = () => {
  const [joke, setJoke] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getRandomgJoke = async (url: string) => {
      setLoading(true);
      const result = await apiRequest(url, "get");
      setLoading(false);
      setJoke(result);
    };
    getRandomgJoke(url);
  }, [url]);

  return (
    <JokeContainer>
      {loading ? "Why so serious, let's put a smile on your face :)" : joke}
    </JokeContainer>
  );
};

export default RandomJoke;
