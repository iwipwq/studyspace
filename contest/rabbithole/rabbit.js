class Rabbit {
  ramdomizer = () => {
    return Math.floor(Math.random() * 2) ? 1 : -1;
  };
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  constructor(min, max) {
    this.max = max;
    this.min = min;
    this.currentIndex = this.getRandomInt(min, max);
    this.ambushTime = 0;
    this.huntCount = 0;
  }
  jump() {
    if (this.currentIndex === this.min) {
      this.currentIndex += 1;
    } else if (this.currentIndex === this.max) {
      this.currentIndex -= 1;
    } else {
      // const randomnum = this.ramdomizer()
      // console.log(randomnum);
      this.currentIndex = this.currentIndex + this.ramdomizer();
    }
  }
  catch(holeNumber) {
    if (holeNumber === this.currentIndex) {
      console.log(`토끼를 잡았습니다!. ${holeNumber} 에서 찾았습니다.`);
      this.currentIndex = this.getRandomInt(this.min, this.max);
      console.log(`토끼를 다시 풀었습니다.`);
      return;
    }
    this.jump();
    console.log("여기엔 없군요. 토끼가 도망갔습니다.");
  }
  hunt() {
    for (let i = this.min; i <= this.max; i++) {
      this.huntCount += 1;
      if (i === this.currentIndex) {
        console.log(
          `Gotcha! ${this.currentIndex} 번째 구멍에서 ${this.huntCount} 번째 시도 끝에 잡았습니다!`
        );
        this.huntCount = 0;
        this.currentIndex = this.getRandomInt(this.min, this.max);
        console.log(
          `새 토끼를 ${this.currentIndex}번째 구멍에 풀어주었습니다.`
        );
        return;
      } else {
        this.jump();
        console.log(
          `${i}번재 구멍을 조사했으나, 토끼가 ${this.currentIndex}번째 구멍으로 도망갔습니다.(${this.huntCount}번째 시도)`
        );
        if (i === this.currentIndex) {
          console.log(`이런! 토끼와 엇갈렸습니다!!`);
        }
      }
    }
    if (this.huntCount === 10000) {
      console.log(
        `10000번 시도했지만 토끼를 찾지못했습니다... 카운트를 초기화합니다.`
      );
      this.huntCount = 0;
      return;
    }
    this.hunt();
  }
  ambush(holeNumber) {
    let ambushHole = holeNumber;
    if (ambushHole == undefined) {
      ambushHole = this.getRandomInt(0, 99);
    }
    if (!this.ambushTime) {
      console.log(`${ambushHole}번째 구멍에 잠복시작...`);
    }
    this.ambushTime += 1;
    if (ambushHole !== this.currentIndex) {
      if (this.ambushTime === 8371) {
        console.log(
          `8371번째 기다렸지만 토끼는 오지 않았습니다... 토끼는 ${
            (this, this.currentIndex)
          }번재 구멍에 있었습니다. 잠복카운트를 초기화합니다.`
        );
        this.ambushTime = 0;
        return;
      }
      this.jump();
      this.ambush(ambushHole);
    } else if (ambushHole === this.currentIndex) {
      console.log(
        `Gotcha! ${this.ambushTime}번째 잠복끝에 ${this.currentIndex}에서 찾았습니다!`
      );
      this.ambushTime = 0;
      this.currentIndex = this.getRandomInt(this.min, this.max);
      console.log(`새 토끼를 ${this.currentIndex}번째 구멍에 풀어주었습니다.`);
    }
  }
  get position() {
    return `토끼는 ${this.currentIndex} 번째 구멍에 있습니다.`;
  }
}
