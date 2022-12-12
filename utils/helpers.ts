export const codeSrc = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: `function add() {
          var num1 = document.getElementById("firstnumber").value;
          var num2 = document.getElementById("secondnumber").value;
          var sum = parseInt(num1) + parseInt(num2);
          document.getElementById("answer").value = sum;
  }`,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: `body{
  background-color: #f5f5f5;
      }
      .container{
          justify-content: center;
          align-items: center;
  }`,
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: `<div class="container">
      <h1>Hello World</h1>
      <p>Welcome to xth86 Code Editor
      </p>
  
      <!--  Take user input -->
      <p>First Number: <input id="firstnumber"></p>
        <p>Second Number: <input id="secondnumber"></p>
        <button onclick="add()">Add Them</button>
  
        <!--  displays the answer -->
        <p>Sum = <input id="answer"></p>
  
  </div>`,
  },
};
