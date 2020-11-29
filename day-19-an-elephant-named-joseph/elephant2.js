class Elf {
  constructor(number) {
    this.number = number;
    this.previous = null;
    this.next = null;
  }

  leave() {
    this.previous.next = this.next;
    this.next.previous = this.previous;
  }

  skip(steps) {
    let elf = this;

    for (let i = 0; i < steps; i++) {
      elf = elf.next;
    }

    return elf;
  }
}

module.exports = (numberOfElves) => {
  const elves = Array
    .from({ length: numberOfElves })
    .map((_, i) => new Elf(i + 1));

  for (let i = 0; i < elves.length; i++) {
    elves[i].previous = i - 1 < 0 ? elves[elves.length - 1] : elves[i - 1];
    elves[i].next = i + 1 === elves.length ? elves[0] : elves[i + 1];
  }

  let elfAcross = elves[Math.floor(elves.length / 2)];
  let currentElf = elves[0];
  let elvesLeft = numberOfElves;

  while (currentElf.next !== currentElf) {
    elfAcross.leave();
    elvesLeft--;

    const nextElfAcross = elfAcross.skip(elvesLeft % 2 === 0 ? 2 : 1);

    elfAcross = nextElfAcross;
    currentElf = currentElf.next;
  }

  return currentElf.number;
};
