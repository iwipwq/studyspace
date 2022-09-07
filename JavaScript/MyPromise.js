const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "recjected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBind = this.#onSuccessBinded.bind(this);
  #onFailBind = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch (error) {
      this.#onFail(e);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });
      // 콜백을 모두 호출 한 후 콜백 리스트 초기화
      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });

      this.#catchCbs = [];
    }
  }

  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return;
    // 배열에 저장된 콜백들을 불러와서 실행
    this.#value = value;
    this.#state.FULFILLED;
    this.#runCallbacks();
  }

  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state.REJECTED;
    this.#runCallbacks();
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }
        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      // if(thenCb !== null) this.#thenCbs.push(thenCb);
      // if(catchCb !== null) this.#catchCbs.push(catchCb);
      this.#runCallbacks();
    });

    // .then() 처럼 호출할 수 있도록 배열에 콜백(cb)을 저장
    // 이미 호출된 콜백말고 새 콜백을 호출할 수 있도록 콜백호출
    // 가끔 Promise에서 then을 호출할때 Promise가 이미 onSuccess 메소드를 resolve해버린 상태가 있음
    // 그것과 상관없이 바로 호출하도록

    //체이닝
    // return new Promise()

    // Promise.then().catch().then() 일 경우
  }

  catch(cb) {
    // 이렇게 콜백을 두개이상 보낼수도 있음
    // p.then(() =>{}, () => {})
    // 그런데 이 상황에서 한가지는 성공하고 한가지는 실패했을때 에러 핸들링하는 방법 -> catch , finally 메소드
    this.then(undefined, cb);
  }

  finally(cb) {}
}

export default MyPromise;
