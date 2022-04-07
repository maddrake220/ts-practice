enum StarbucksGrade {
  WELCOME = "WELCOME",
  GREEN = "GREEN",
  GOLD = "GOLD",
}

function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbucksGrade.GREEN));

console.log(StarbucksGrade.GREEN);

console.log(StarbucksGrade["WELCOME"]);
