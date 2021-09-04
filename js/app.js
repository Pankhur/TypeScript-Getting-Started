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
    console.log("Hello");
    var element = document.getElementById('postedScores');
    console.log(score + "  - " + name);
    element.innerText = score + "  - " + name;
}
//# sourceMappingURL=app.js.map