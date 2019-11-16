module.exports = (input) => {
  const df = input
    .split('\n')
    .slice(2)
    .map((line) => line
      .match(/x(\d+)-y(\d+)\s+\d+T\s+(\d+)T\s+(\d+)/)
      .slice(1)
      .map((x) => parseInt(x))
    );

  let viablePairs = 0;

  for (let a = 0; a < df.length; a++) {
    const nodeA = df[a];

    if (nodeA[2] === 0) {
      continue;
    }

    const otherNodes = df.filter(([x, y]) => x !== nodeA.x && y !== nodeA.y);

    for (let b = 0; b < otherNodes.length; b++) {
      const nodeB = otherNodes[b];

      if (nodeB[3] >= nodeA[2]) {
        viablePairs++;
      }
    }
  }

  return viablePairs;
};
