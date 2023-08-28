import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);
  //   console.log("Formatted todos to send", todos);
  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

  console.log("RESPONSE:", res);

  const GPTdata = await res.json();
  console.log(GPTdata);
  const { content } = GPTdata;
  return content;
};

export default fetchSuggestion;
