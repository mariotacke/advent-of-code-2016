class Elf {
  constructor (number, next) {
    this.number = number;
    this.next = next;
    this.presents = 1;
  }
}

module.exports = (numberOfElves) => {
  const firstElf = new Elf(1, null);

  let currentElf = firstElf;

  for (let i = numberOfElves; i > 1; i--) {
    const elf = new Elf(i, currentElf);

    currentElf = elf;
  }

  firstElf.next = currentElf;
  currentElf = firstElf;

  while (currentElf.next !== currentElf) {
    currentElf.presents += currentElf.next.presents;
    currentElf.next = currentElf.next.next;
    currentElf = currentElf.next;
  }

  return currentElf.number;
};
