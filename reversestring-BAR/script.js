// Obtener referencias al DOM
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

// Handler para invertir texto en tiempo real
input.addEventListener("input", () => {
    const text = input.value;

    // Forma más simple y clara en JS
    const reversed = text.split("").reverse().join("");

    output.textContent = reversed;
});