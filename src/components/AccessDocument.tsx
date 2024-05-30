// https://m.blog.naver.com/tmondev/221070295102
const AccessDocument = () => {
  const test1 = () => {
    console.log("test1 start!");
    let now1 = new Date();
    for (let i = 0; i < 1000000; i++) {
      document.getElementById("test1")!.innerText = `${
        parseInt(document.getElementById("test1")!.innerText) + i
      }`;
    }
    let now2 = new Date();
    document.getElementById("test1")!.innerText =
      document.getElementById("test1")!.innerText +
      `, ${now2.getTime() - now1.getTime()}`;
    console.log("test1 end!");
  };

  const test2 = () => {
    console.log("test2 start!");
    let now3 = new Date();
    let num2Tag = document.getElementById("test2")!.innerText;
    for (let i = 0; i < 1000000; i++) {
      num2Tag = `${parseInt(num2Tag) + i}`;
    }
    const now4 = new Date();
    document.getElementById("test2")!.innerText =
      num2Tag + `, ${now4.getTime() - now3.getTime()}`;
    console.log("test2 end!");
  };

  const run = () => {
    setTimeout(test2, 0);
    setTimeout(test1, 0);
  };

  return (
    <>
      <div>AccessDocument Test</div>
      <div>
        <p id="test1">1</p>
        <p id="test2">1</p>
      </div>
      <hr></hr>
      <div>document에 매번 접근하지 말고, 변수로 두고 접근해라.</div>
      <div>
        test1 : document라는 javascript 전역 객체에 지속적으로 접근하여, 해당
        객체의 스코프 체인을 실행한다.
      </div>
      <div>
        test2 : num2Tag라는 지역변수에 담아 변수에 캐싱된 정보로 접근을 하므로
        스캐닝 대상을 줄여 더 빠르고 안정적인 코드 실행을 할 수 있다.
      </div>
      <button onClick={run}>실행</button>
    </>
  );
};

export default AccessDocument;
