let arr = ["Анна", "Игорь", "Лёха", "Серега", "Володя", "Сашка", "Анна"];


arr.forEach(function(item, index) {
    console.log(item + " " + index);
});   /*вместо обычного цикла проходимся по всем эл-там и видоизменяем их*/


let arr2 = arr.map(function(item) {
    return item + "- 1";
});   /*на выходе получаем новый массив с преобразованными эл-тами*/
console.log(arr2);


let arr3 = arr.filter(function(item) {
    if (item == "Анна") return true; /* если это истинно, то результат двух
     найденых Анна пойдет в переменную arr3 */ 
});   /*на выходе получаем новый массив с преобразованными эл-тами: [ 'Анна', 'Анна' ]*/
console.log(arr3);


let opr = [1, 3, 6, 4, 2, 5]; 

let arr4 = opr.sort(function(a, b) {  /**для того чтобы упорядочить массив */
    if (a < b) return -1; /* идет сравнение каждой пары элементов (a, b) через весь массив */ 
});   /*на выходе получаем упорядоченный массив arr4*/
console.log(arr4);


let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1); /**помещаем в переменную найденое значение */
  
  console.log(user.name); // Вася 