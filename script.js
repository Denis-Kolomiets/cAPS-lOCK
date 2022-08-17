/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

// var capsLockTests = [
//     {
//         parameters: ["cAPS"],
//         expectedResult: "Caps"
//     },
//     {
//         parameters: ["Lock"],
//         expectedResult: "Lock"
//     },
//     {
//         parameters: ["wHY DO wE NEED cAPS lOCK?"],
//         expectedResult: "Why do We need Caps Lock?"
//     },
//     {
//         parameters: ["FuNkY iS nOt CaPs!"],
//         expectedResult: "FuNkY Is nOt CaPs!"
//     }
// ];


function capsLock(str){
    var strr = str.split(" ");

    for(var i = 0; i < strr.length; i++){

        var words = strr[i].split("");
        if(words.every(item => item == item.toUpperCase()) ||
           words.slice(1).every(item => item == item.toUpperCase())){

            for( var j = 0; j < words.length; j++){
                if( words[j] == words[j].toUpperCase()) {
                    words[j] = words[j].toLowerCase();
                } else {
                    words[j] = words[j].toUpperCase()
                }
            };

        } 
        strr[i] = words.join(""); 
    };
    str = strr.join(" ");
    return str
    
};


butt.onclick = function() {
    let word = document.getElementById('input_word').value;
    document.getElementById('rsl').innerHTML = capsLock(word);
};
