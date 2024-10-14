import React from "react";
import { supabase } from "./supabaseClient";

function AddGuessForm({ getGuesses }) {
  const handleSubmit = async (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    const data = Array.from(formData.entries()).reduce(
      (prev, [key, value]) => ({ ...prev, [key]: value }),
      {}
    );
    await supabase.from("guess").upsert(data);
    getGuesses();
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          width: "450px",
          justifyContent: "space-between",
          marginBottom: "35px",
        }}
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" />
        <input type="date" name="guess_date" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default AddGuessForm;
