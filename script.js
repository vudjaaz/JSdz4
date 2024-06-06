/*Задание 1

Текст задания
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.*/



// const arr = [1, 2, 3];
// arr.forEach(element => {
//     console.log(element);
// });



// const arr = [1, 2, 1, 3, 4, 5];
// console.log(arr.length);



// const arr = ['a', 'b', 'c'];
// console.log(arr);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);



// function randomArr(number) {
//     const arr = [];
//     for (let i = 0; i < number; i++) {
//         arr.push(Math.floor(Math.random() * (100 - 1) + 1));
//     }
//     return arr;
// }

// console.log(randomArr(10));




/*Задание 2

1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два последних
элемента. Проверьте, какое станет значение свойства length после
этого.*/



// const arr = [1, 2, 3];
// // for (let i = 0; i < arr.length; i++) {
// //     arr[i]++;
// // }
// // console.log(arr);


// arr.forEach((element, index) => arr[index] = ++element);
// console.log(arr);



// function increment (array) {
//     for (let i = 0; i < array.length; i++) {
//        array[i]++;
//     }
//     return array;
// }




// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);



// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(...arr);  //... распаковка массива (без запятых и скобок)



// const arr = [3, 432, 2, 4, 1];
// arr.splice(-2, 2);
// console.log(arr.length);



// function deleteElement(array, elem) {
//     if (array.length > elem) {
//         for (let i = 0; i < array.length; i++) {
//             array.pop();
//         }
//     }
// }




/*Задание 3

1. С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.*/


// const num = Infinity;
// for (let i = 0; i < num; i++) {
//     if (i >= 11 && i <= 33) {
//         console.log(i);
//     }
// }



// for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// function methodName (start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// methodName(1, 99);



// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }



// function numMulti1000(num) {
//     let result = num;
//     let iterations = 0;

//     while (result <= 1000) {
//         result *= 3;
//         console.log(result);
//         iterations++;
//     }

//     console.log('Начальное число: ' + num);
//     console.log('Полученное число: ' + result);
//     console.log('Количество итераций: ' + iterations);
// }

// numMulti1000(1);





/*Задание 4

1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
2. Найдите сумму четных чисел от 2 до 100.
3. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу.*/



// const arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element > 3 && element < 10) {
//         console.log(element);
//     }
// }



// function sumEven(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// sumEven(100);



// let sum = 0;
// for (let i = 0; i <= 100; i += 2) {
//     sum += i;
// }
// console.log(sum);




// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);




// const arr = [2, 5, 9, 3, 1, 4];
// console.log(arr.reduce((a, b) => a + b));




// let str = '';

// for (let i = 1; i <= 9; i++) {
//     if (i < 9) {
//         str += '-' + i;
//     } else if (i >= 9) {
//         str += '-' + i + '-';
//     }
// }

// console.log(str);




// let str = '-';
// for (let i = 0; i <= 9; i++) {
//     str += i + '-';
// }

// console.log(str);




// const arr = [2, 5, 9, 0, 3, 1, 4];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element !== 0) {
//         console.log(element);
//     } else if (element === 0) {
//         console.log(element);
//         break;
//     }

// }







// ДЗ



// Задание 1

/*Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/



// for (let i = 0; i <= 10; i++) {
//     if (i === 0) {
//         console.log(`Это ноль ${i}`);
//     } else if (i % 2 !== 0) {
//         console.log(`Нечетное число ${i}`);
//     } else {
//         console.log(`Четное число ${i}`);
//     }
// }



/*Задание 2

Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/



// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// arr.splice(3, 2);
// console.log(arr);



// const arr = [1, 2, 3, 4, 5, 6, 7];

// const filterArr = arr.filter((num) => num !== 4 && num !== 5);
// console.log(filterArr);




/*Задание 3

Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/




// function randomArr(number) {
//     const arr = [];
//     for (let i = 0; i < number; i++) {
//         arr.push(Math.floor(Math.random() * (10 - 0) + 0));
//     }
//     console.log(arr);
//     console.log(arr.reduce((a, b) => a + b));

//     const minimum = Math.min(...arr);
//     console.log(minimum);

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === 3) {
//             console.log(`В массиве есть число ${arr[j]}`);
//         }
//     }
// }

// randomArr(5);



/* *Необязательное задание. *

Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx */


let str = '';
for (let i = 1; i <= 20; i++) {
    str += 'x';
    console.log(str);
}
