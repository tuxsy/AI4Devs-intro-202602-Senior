// Obtener referencias al DOM
const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

// Handler para invertir texto en tiempo real
input.addEventListener("input", () => {
    const text = input.value;

    // Forma más simple y clara en JS
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    const graphemes = Array.from(segmenter.segment(text), s => s.segment);
    const reversed = graphemes.reverse().join("");

    output.textContent = reversed;
});