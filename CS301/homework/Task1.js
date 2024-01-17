// let fullName = 'Kamran Mirzeliyev Behruz'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

// let fullName = 'Kamran Mirzeliyev Behruz'
// let fullNameArray = fullName.split(' ');
// console.log("Ad Soyad Array:", fullNameArray);
// let modifiedFullNameArray = [fullNameArray[2], fullNameArray[1], fullNameArray[0]];
// console.log("Yeni Ad Soyad Array:", modifiedFullNameArray);
// let modifiedFullName = modifiedFullNameArray.join(' ');
// console.log("Yeni Ad Soyad:", modifiedFullName);


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//10) arraydaki en boyuk reqemin ilk indexini tapin
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.

// let countOf5 = arr.filter(num => num === 5).length;
// console.log("5'in tekrar sayi:", countOf5)
// let sumOfArray = arr.reduce((acc, num) => acc + num, 0);
// console.log("Array'cemi:", sumOfArray);
// let uniqueSortedArray = [...new Set(arr)].sort((a, b) => a - b);
// console.log("Tekrarlananlar:", uniqueSortedArray);
// let maxNumber = Math.max(...arr);
// let countOfMaxNumber = arr.filter(num => num === maxNumber).length;

// console.log("En boyuk reqem:", maxNumber);
// console.log("En boyuk reqem tekrari:", countOfMaxNumber);

// let name = "Kamran";
// let letterCounts = {};

// for (let letter of name) {
//     letterCounts[letter] = (letterCounts[letter] || 0) + 1;
// }

// let letterArray = Object.keys(letterCounts);

// console.log("Her herf tekrar sayi:", letterCounts);
// console.log("Array'de olan herfler:", letterArray.filter(letter => arr.includes(parseInt(letter))));


// let divisibleBy3WithRemainder2 = arr.find(num => num % 3 === 2);

// if (divisibleBy3WithRemainder2 !== undefined) {
//     let index = arr.indexOf(divisibleBy3WithRemainder2);
//     console.log("3'e bölünende qalan 2 olan sayı:", divisibleBy3WithRemainder2);
//     console.log("Reqemin index'i:", index);
// } else {
//     console.log("3'e bölünende qalan 2 olan bir reqem tapilmadi.");
// }

// let indexOfMaxNumber = arr.indexOf(maxNumber);

// console.log("En boyuk reqemin ilk index'i:", indexOfMaxNumber);



// let indexesOf4 = arr.reduce((acc, num, index) => {
//     if (num === 4) {
//         acc.push(index);
//     }
//     return acc;
// }, []);

// console.log("4 reqeminin index'leri:", indexesOf4);


// let indexesOf5 = arr.reduce((acc, num, index) => {
//     if (num === 5) {
//         acc.push(index);
//     }
//     return acc;
// }, []);

// let minIndexOf5 = Math.min(...indexesOf5);
// let maxIndexOf5 = Math.max(...indexesOf5);

// console.log("5 in en kicik index'i:", minIndexOf5);
// console.log("5 in en boyuk index'i:", maxIndexOf5);

// let numbersGreaterThan2 = arr.filter(num => num > 2);
// let lengthDifference = arr.length - numbersGreaterThan2.length;

// console.log("2'den boyuk reqemler:", numbersGreaterThan2);
// console.log("Uzunluq ferqi:", lengthDifference);


// let indexesOf7 = arr.reduce((acc, num, index) => {
//     if (num === 7) {
//         acc.push(index);
//     }
//     return acc;
// }, []);

// let sumOfIndexesOf7 = indexesOf7.reduce((acc, index) => acc + index, 0);

// console.log("7 in index'lerinin toplami:", sumOfIndexesOf7);


//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.


let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// function filterObjectsStartsWithT(arr) {
//     return arr.filter(item => item.name.startsWith('t'));
// }
// let result1 = filterObjectsStartsWithT(arr2);
// console.log(result1);

// function countObjectsStartEndWithT(arr) {
//     return arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
// }

// let result2 = countObjectsStartEndWithT(arr2);
// console.log(result2);

// function sumKeysStartEndWithT(arr) {
//     let filteredObjects = arr.filter(item => item.name.startsWith('t') && item.name.endsWith('t'));
//     return filteredObjects.reduce((sum, item) => sum + item.key, 0);
// }

// let result3 = sumKeysStartEndWithT(arr2);
// console.log(result3);

// function findKeyOfLongestName(arr) {
//     let longestObject = arr.reduce((max, item) => (item.name.length > max.name.length) ? item : max);
//     return longestObject.key;
// }

// let result4 = findKeyOfLongestName(arr2);
// console.log(result4);

// function squareRootOfIndexWithLongestName(arr) {
//     let longestObjectIndex = arr.findIndex(item => item.name.length === Math.max(...arr.map(obj => obj.name.length)));
//     return Math.sqrt(longestObjectIndex);
// }

// let result5 = squareRootOfIndexWithLongestName(arr2);
// console.log(result5);

// function filterObjectsWithLength4(arr) {
//     return arr.filter(item => item.name.length === 4);
// }
// let result6 = filterObjectsWithLength4(arr2);
// console.log(result6);

// function findNameOfMaxKey(arr) {
//     let maxKeyObject = arr.reduce((max, item) => (item.key > max.key) ? item : max);
//     return maxKeyObject.name;
// }

// let result7 = findNameOfMaxKey(arr2);
// console.log(result7);


// function findIndexesOfObjectsWithTwoL(arr) {
//     return arr.reduce((indexes, item, index) => {
//         if (item.name.includes('L') && item.name.split('L').length - 1 === 2) {
//             indexes.push(index);
//         }
//         return indexes;
//     }, []);
// }
// let result8 = findIndexesOfObjectsWithTwoL(arr2);
// console.log(result8);

// function findKeysOfObjectsWithTwoT(arr) {
//     return arr.reduce((keys, item) => {
//         if (item.name.split('t').length - 1 === 2) {
//             keys.push(item.key);
//         }
//         return keys;
//     }, []);
// }
// let result9 = findKeysOfObjectsWithTwoT(arr2);
// console.log(result9);


