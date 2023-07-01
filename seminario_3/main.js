// alert('privet');
// let num = 5;
// alert(num);

// num = 10;
// alert(num);

// console.log(num);

// const num2 = 5 // константу изменить нельзя!

// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, 
// вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.
/*
function sum(n1, n2){
    return n1 + n2;
}

const num1 = Number.parseFloat(prompt("Введите число 1: "));
const num2 = Number.parseFloat(prompt("Введите число 2: "));

alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);
*/
// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну, вы держитесь там!”.

// const answer = confirm("Вам хорошо живется?");
// if (answer) {
//     alert("Тогда мы идем к вам!");
// } 
// else {
//    alert("Ну, вы держитесь там!"); 
// } 
/*
confirm("Вам хорошо живется?") 
    ? alert("Тогда мы идем к вам!") 
    : alert("Ну, вы держитесь там!");
*/

// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
 
/* <script>
let product = "Бананы";
 
if (product == "Мандарины") {
  alert('Мандарины стоят 100 руб/кг.');
} else if (product == "Бананы") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else if (product == "Груши") {
  alert('Бананы и груши стоят 70 руб/кг.');
} else {
  alert('Нет такого продукта.');
}
</script> */

const product = prompt("Vvedite produkt: ");

switch (product) {
    case "Mandariny":
        alert("Mandariny stoyat 100 rub/kg");
        break;
    case "Banany":
        alert("Banany y grushy stoyat 70 rub/kg");
        break;
    case "Grushy":
        alert("Banany y grushy stoyat 70 rub/kg");
        break;
    default: 
        alert("Net takih fruktov v nashey lavke!")
}