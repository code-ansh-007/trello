import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body to extract 'todos'
    const { todos } = await request.json();

    // Communicate with OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.8,
      n: 1,
      stream: false,
      messages: [
        {
          role: "system",
          content:
            "When responding, welcome the user always as Mr. Ansh and limit the response to 200 characters",
        },
        {
          role: "user",
          content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day, here's the data: ${JSON.stringify(
            todos
          )}`,
        },
      ],
    });

    // Ensure the response is valid before accessing data
    if (
      response &&
      response.choices &&
      response.choices[0] &&
      response.choices[0].message
    ) {
      const data = response.choices[0].message;
      console.log("Data is:", data);
      return NextResponse.json(data);
    } else {
      console.error("Invalid response from OpenAI:", response);
      return NextResponse.error();
    }
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    return NextResponse.error();
  }
}
