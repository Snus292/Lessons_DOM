var c = "blue";
function f() {
    var t = document.getElementById("t");
    t.style.color = c;
    c = (c === "blue") ? "red" : "blue";
    setTimeout(f, 700);
}
// Вывел JS-код в отдельный файл

