
'use strict';

const yearOfBirth = prompt('Введіть ваш рік народження')
const currentYear = new Date().getFullYear();
const currentAge = currentYear - yearOfBirth;

if (yearOfBirth !== null && yearOfBirth.trim() && !isNaN(yearOfBirth) && +yearOfBirth > 0) {
    console.log('Твій вік є ' + currentAge);
} else {
    console.log('Шкода, що Ви не захотіли ввести свій вік');
}


const city = prompt('В якому місті ви живете')

switch (city) {
    case 'Kyiv':
        console.log('Ти живеш у столиці');
        break;
    case 'Washington':
        console.log('Ти живеш у столиці');
        break;
    case 'London':
        console.log('Ти живеш у столиці');
        break;
    case null :
        console.log('Шкода, що Ви не захотіли ввести своє місто')
        break;
    case city.trim() :
        console.log('Шкода, що Ви не захотіли ввести своє місто')
        break;
    default:
        console.log('ти живеш у місті ' + city)
}



const sport = prompt('Введіть улюблений вид спорту')

switch (sport) {
    case 'Box':
        console.log('Круто! Хочеш стати Усиком?');
        break;
    case 'Basketball':
        console.log('Круто! Хочеш стати Джорданом?');
        break;
    case 'Football':
        console.log('Круто! Хочеш стати Роналдо?');
        break;
    case null :
        console.log('Шкода, що Ви не захотіли ввести свій вид спорту')
        break;
    default: sport.trim()
        console.log('Шкода, що Ви не захотіли ввести свій вид спорту')


}

alert("Ваш вік: " + currentAge + "\nМісто: " + city + "\nУлюблений спорт: " + sport);
