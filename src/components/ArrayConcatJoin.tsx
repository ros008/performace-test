import { useState } from "react";

const ArrayConcatJoin = () => {
  const [test1, setTest1] = useState(0);
  const [test2, setTest2] = useState(0);
  const [test3, setTest3] = useState(0);
  const [test4, setTest4] = useState(0);

  let name = "name";
  let id = "id";

  const concat_test = () => {
    console.log("concat_test start!");
    let now1 = new Date();
    for (let i = 0; i < 1000000; i++) {
      let result = "".concat(id, ":", `${i}`, ", ", name, ":", "name", `${i}`);
    }
    let now2 = new Date();
    setTest1(now2.getTime() - now1.getTime());
    console.log("concat_test end!");
  };

  const plus_test = () => {
    console.log("plus_test start!");
    let now1 = new Date();
    for (let i = 0; i < 1000000; i++) {
      let result = "" + id + ":" + `${i}` + ", " + name + ":" + "name" + `${i}`;
    }
    const now2 = new Date();
    setTest2(now2.getTime() - now1.getTime());
    console.log("plus_test end!");
  };

  const join_test = () => {
    console.log("join_test start!");
    let now1 = new Date();
    for (let i = 0; i < 1000000; i++) {
      let result = [id, ":", `${i}`, ", ", name, ":", "name", `${i}`].join();
    }
    const now2 = new Date();
    setTest3(now2.getTime() - now1.getTime());
    console.log("join_test end!");
  };

  const template_literals_test = () => {
    console.log("template_literals_test start!");
    let now1 = new Date();
    for (let i = 0; i < 1000000; i++) {
      let result = `${id}:${i}, ${name}:name${i}`;
    }
    const now2 = new Date();
    setTest4(now2.getTime() - now1.getTime());
    console.log("template_literals_test end!");
  };

  const run = () => {
    setTimeout(concat_test, 0);
    setTimeout(plus_test, 0);
    setTimeout(join_test, 0);
    setTimeout(template_literals_test, 0);
  };

  return (
    <>
      <div>ArrayConcatJoin</div>
      <div>
        <p>
          <div>concat_test Result</div>
          <div>{test1}</div>
        </p>
        <p>
          <div>plus_test Result</div>
          <div>{test2}</div>
        </p>
        <p>
          <div>join_test Result</div>
          <div>{test3}</div>
        </p>
        <p>
          <div>template_literals_test Result</div>
          <div>{test4}</div>
        </p>
      </div>
      <hr></hr>
      <div>
        결론 +, template literal가 가장 빠르고 concat 그리고 join순이다.
      </div>
      <button onClick={run}>실행</button>
    </>
  );
};

export default ArrayConcatJoin;
