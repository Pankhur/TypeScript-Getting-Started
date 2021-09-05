function startGame() {
    var message = document.getElementById('messages');
    message.innerText = " Hello Typescript";
    var showName = getInput('playername');
    logName(showName);
    test();
    test("hi");
    var receipt;
    receipt = 1;
    receipt = "order1";
    postScore(2, showName);
    postScore(-5, showName);
    var arrow = function (x) { return x * x; };
    var result = arrow(4);
    console.log("Result - " + result);
    var sumf = function (a, b) { return a + b; };
    sumf(2, 3);
    var anonymous = function () { return console.log("anonymous"); };
    anonymous();
    test_arrow();
    test_arrow("hi");
    filterFunc();
}
function logName(name) {
    if (name === void 0) { name = "Default name"; }
    console.log("Name of the person : " + name);
    var value = 5;
    var myname = value.toFixed(4);
    console.log("my name " + myname);
}
function test(value) {
    if (value === void 0) { value = "TEEST"; }
    console.log("Default value: " + value);
}
var test_arrow = function (value) { return console.log("Arrow function returns: " + value); };
function getInput(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value == '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, name) {
    if (score < 0) {
        console.error("Score: " + score);
    }
    var element = document.getElementById('postedScores');
    element.innerText = score + "  - " + name;
}
function filterFunc() {
    var orginal_arr = [2, 10, 5, 6];
    var high_arr;
    high_arr = orginal_arr.filter(function (element, index, array) {
        if (element > 5) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    });
}
var result = {
    Playername: "Kohli",
    score: 100,
    trophy: "no"
};
var player = {
    name: "Kohli",
    formatName: function () { return "Player name: ${name}"; }
};
//# sourceMappingURL=app.js.map