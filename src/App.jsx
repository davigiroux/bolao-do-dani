import { useEffect, useState } from "react";
import AddGuessForm from "./AddGuessForm";
import { supabase } from "./supabaseClient";

function App() {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    getGuesses();
  }, []);

  async function getGuesses() {
    const { data } = await supabase
      .from("guess")
      .select()
      .order("guess_date", { ascending: true });
    setGuesses(data);
  }

  function getDateFromGuess(guessDate) {
    const [year, month, day] = guessDate.split("-");

    return new Date(year, month - 1, day);
  }

  async function deleteGuess(guessId) {
    await supabase.from("guess").delete().eq("id", guessId);
    getGuesses();
  }

  return (
    <>
      <AddGuessForm getGuesses={getGuesses} />
      <ul>
        {guesses.map((guess) => (
          <li key={guess.id}>
            {guess.name} -{" "}
            {getDateFromGuess(guess.guess_date).toLocaleDateString("pt-Br")} -
            <button type="button" onClick={() => deleteGuess(guess.id)}>
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
