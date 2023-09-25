// Вставка дочернего элемента
var list = document.getElementById("list");
var newItem = document.createElement("li"); //<li></li>
newItem.innerText = "Созданный элемент";
list.insertBefore(newItem, list.children[0]);

// Вывод всех дочерних элементов тега body в консоль
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// Изменение свойств тега header
var h1 = document.getElementById("header");
h1.innerText = "New header!";
h1.className = 'red';
h1.style.fontSize = '60px';

// Работа с группой классов article
var article = document.getElementsByClassName("article");

for (var i = 0, size = 16; i < article.length; i++, size += 10) {
    article[i].classList.add('red');
    article[i].style.fontWeight = 'bold';
    article[i].style.fontSize = size + 'px';
}

// Создание и добавление нового элемента в body
var elText = document.createTextNode("New element");
document.body.appendChild(elText);
// Вывел JS-код в отдельный файл