import { inicializaModelo } from "./src/modelo.js";
import { fazerPergunta } from "./src/pergunta.js";

const model = await inicializaModelo("gemini-1.5-pro-latest");

async function perguntar() {
   const prompt = "me de dicas de cursos de javascript intermediario.";
   const parts = {
      text: "Você é um chatbot que responde em portugues, com dicas de ajuda a desenvolvedores de software,principalmente iniciantes.",
      text: `input: ${prompt}`,
   };
   const request = { contents: [{ role: "user", parts }] };

   const result = await model.generateContent(request);

   const response = await result.response;
   const text = await response.text();
   console.log(text);
}

perguntar();
