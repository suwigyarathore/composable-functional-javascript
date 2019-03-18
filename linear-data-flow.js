const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`,
  fold: f => f(x)
});

const nextCharForNumberString = str =>
  Box(str)
    .map(s => s.trim())
    .map(r => parseInt(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase());

const result = nextCharForNumberString("  64 ");

console.log("Output", result);
