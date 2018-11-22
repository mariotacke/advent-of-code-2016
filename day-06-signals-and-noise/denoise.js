const denoise = (input) => {
  const signals = input
    .split('\n')
    .map((x) => x.trim().split(''));

  const message = Array.from({ length: signals[0].length });

  for (let i = 0; i < signals[0].length; i++) {
    const signal = signals.map((x) => x[i]);

    const mostFrequent = [...new Set([...signal])]
      .map((value) => {
        return {
          value,
          score: signal.filter((x) => x === value).length
        };
      })
      .sort((a, b) => b.score - a.score);

    message[i] = mostFrequent[0].value;
  }

  return message.join('');
};

module.exports = denoise;
