function getRandomPayer(): string {
  const payers = ["Alice", "Bob"];
  const randomIndex = Math.floor(Math.random() * payers.length);
  return payers[randomIndex];
}

function getAmount(): number {
  const amount: number = Math.random() * 100;

  return Math.round(amount * 100) / 100;
}
export { getRandomPayer, getAmount };
