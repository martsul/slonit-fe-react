function computersGame() {
  let num = Math.floor(1 + Math.random() * (100 + 1 - 1));
  console.log(`${num}\n`);

  let [min, max] = [0, 101];

  while (max - min > 1) {
    const thinkNum = Math.floor((max + min) / 2);

    if (thinkNum > num) {
      max = thinkNum;
      console.log(
        `Компьютер 2: Пробую число ${thinkNum}.\nКомпьютер 1: Меньше.\n`
      );
    } else if (thinkNum < num) {
      min = thinkNum;
      console.log(
        `Компьютер 2: Пробую число ${thinkNum}.\nКомпьютер 1: Больше.\n`
      );
    } else {
      console.log(
        `Компьютер 2: Пробую число ${thinkNum}.\nКомпьютер 1: Угадал!`
      );
      break;
    }
  }
}

computersGame();
