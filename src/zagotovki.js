    // ТАЙМЕР
    // let deadLine = '2021-08-1';
    // function getTimeRemaning(endtime){
    //     let t = Date.parse(endtime) - Date.parse(new Date()),
    //         seconds = Math.floor((t/1000) % 60),
    //         minutes = Math.floor((t/1000/60) % 60),
    //         hours = Math.floor((t/(1000*60*60)));
    //         return {
    //             'total': t,
    //             'hours': hours,
    //             'minutes': minutes,
    //             'seconds': seconds
    //         };
    // }

    // function setClock(id, endtime) {
    //     let timer = document.getElementById(id),
    //         hours = timer.querySelector('.hours'),
    //         minutes=timer.querySelector('.minutes'),
    //         seconds=timer.querySelector('.seconds'),
    //         timeInterval = setInterval(updateClock, 1000);
    //     function updateClock(){
    //         let t = getTimeRemaning(endtime);
    //         hours.textContent = t.hours;
    //         minutes.textContent = t.minutes;
    //         seconds.textContent = t.seconds;

    //         if (t.total <=0){
    //             clearInterval(timeInterval);
    //             hours.textContent = '00';
    //             minutes.textContent = '00';
    //             seconds.textContent = '00';
    //         }
    //     }
    // }
    // setClock('timer', deadLine);

    // ФУНКЦИЯ КОНСТРУКТОР!
    // function User(name, id){
    //     this.name =name;
    //     this.id = id;
    //     this.human = true;
    //     this.hello = function(){
    //         console.log(('Hello!' + this.name));
    //     };
    // }
    // User.prototype.exit = function(name){
    //     console.log('Пользователь '+ this.name + ' ушёл');
    // };

    // let ivan = new User('Ivan', 25),
    //     alex = new User('Alex', 20);

    // ivan.exit();

    // КЛАСС КОНСТРУКТОР
    // class User {
    //     // базовые настройки класса
    //     constructor(name, id){
        
    //         this.name =name;
    //         this.id = id;
    //         this.human = true;
    //     }
    //     hello(){
    //         console.log(`hello ${this.name}`);
    //     }
    // }




    // THIS
    // 1) Просто вызов функции window/undefined.
    // 2) Метод объекта - this = объект.
    // 3) Конструктор (new) - this = новый созданный объект.
    // 4) Указание конкретного контекста - call, apply, bind.

    // НАСИЛЬНЫЙ ВЫЗОВ ФУНКЦИИ THIS, УКАЗЫВАНИЕ КОНТЕКСТА ФУНКЦИИ КОТОРЫЙ МЫ ЗАХОТИМ, А НЕ ПРОСТО window.
    // let user = {
    //     name:'John'
    // };
    // function sayName(surname) {
    //     console.log(this);
    //     console.log(this.name + surname);
    // }

    // console.log(sayName.call(this, ' Smith')); // можно передавать фамилию через строку
    // console.log(sayName.apply(this, [' Snow'])); // можно передавать фамилии через массив

    // function count(number){
    //     return this*number;
    // }
    // let double = count.bind(2); // то что мы передаём в bind всегда передаёт значение в this
    // console.log(double(3)); // ==> 6
    // console.log(double(10)); // ==>20

