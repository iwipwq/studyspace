interface scores {
  science: number;
  math: number;
  history: number;
}

function averageScore(scores: scores): number {
  const { science, math, history } = scores;
  const sum = science + math + history;
  const average = sum / Object.keys(scores).length;
  return average;
}
