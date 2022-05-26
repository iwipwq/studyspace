function tree(number) {
  for (let i = 0; i < number; i++) {
    let numberOfStar = 2 * i + 1;
    let spaceArr = Array(number - i).fill(" ");
    let starArr = Array(numberOfStar).fill("*");
    let rowOfTree = [...spaceArr, ...starArr];
    console.log(rowOfTree.join(" "));
  }
}

tree(5);
