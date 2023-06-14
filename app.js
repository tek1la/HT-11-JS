let whatTask;

let setTask = function () {
  let a = prompt(
    "Яке завдання бажаєте переглянути? (Введіть номер завдання. від 1 до 3!)"
  );
  if (a == "1" || "2" || "3") {
    whatTask = a;
  } else {
    setTask();
  }
};

let tasks = function () {
  setTask();
  // Task 1
  if (whatTask == "1") {
    let number = prompt("Введіть своє число для піднесення у квадрат", "");

    let square = number ** 2;

    alert(square);

    // Task 2
  } else if (whatTask == "2") {
    let name = prompt("Ваше ім'я?");
    let depositSum = prompt("Яку суму ви бажаєте покласти на депозит?");
    let mounth = prompt(
      "На яку кількість місяців ви бажаєте покласти депозит?"
    );

    let paySum;

    function calcDeposit() {
      let a = 20 / 12;
      let b = (depositSum * a) / 100;
      paySum = mounth * b;
      return alert(
        `Шановний ${name}, Ви внесли ${depositSum} грн., під 20% річних, на термін ${mounth} місяців. За цей період часу Ви заробите ${paySum.toFixed(
          2
        )} грн.`
      );
    }

    let question = confirm("Бажаєте побачити інформацію по депозиту?");

    if (question === true) calcDeposit();

    // Task 3
  } else if (whatTask == "3") {
    let a = prompt("Введіть перше число.");
    let b = prompt("Введіть друге число.");

    let sum = +a + +b;
    let diff = a - b;
    let mult = a * b;
    let div = a / b;

    let result = `Сума ваших чисел ${sum}. Різниця ваших чисел ${diff}. Результат множення ваших чисел ${mult}. Результат ділення ваших чисел ${div.toFixed(
      2
    )}.`;

    alert(result);
  } else {
    while (whatTask == null) {
      alert("Введіть номер завдання!");
      tasks();
    }
  }
};

tasks();

let repeat = confirm("Бажаєте переглянути інші завдання?");

while (repeat == true) {
  tasks();
  repeat = confirm("Бажаєте переглянути інші завдання?");
}
