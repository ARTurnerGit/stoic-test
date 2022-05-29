function getRandomIndexForArray(array) {
  return Math.floor(Math.random() * array.length);
}

export function generateDisplayAnswers(answers) {
  const mappedAnswers = answers.map((a) => ({
    ...a,
    currentChoiceIndex: getRandomIndexForArray(a.choices),
  }));

  const randomisedAnswers = [];
  while (mappedAnswers.length > 0) {
    const randomIndex = getRandomIndexForArray(mappedAnswers);
    randomisedAnswers.push({ ...mappedAnswers[randomIndex] });
    mappedAnswers.splice(randomIndex, 1);
  }

  // final check to make sure we don't randomly load all answers correctly
  if (
    randomisedAnswers.every(
      ({ correctChoiceIndex, currentChoiceIndex }) =>
        correctChoiceIndex === currentChoiceIndex
    )
  ) {
    const indexToChange = getRandomIndexForArray(randomisedAnswers);
    const answerToChange = randomisedAnswers[indexToChange];
    if (answerToChange.correctChoiceIndex === 0) {
      answerToChange.currentChoiceIndex = 1;
    } else {
      answerToChange.currentChoiceIndex = 0;
    }
  }

  return randomisedAnswers;
}
