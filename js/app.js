function startGame() {
    var message = document.getElementById('messages');
    message.innerText = " Hello Typescript";
    var showName = "Pankhur";
    logName(showName);
    test();
    test("hi");
}
function logName(name) {
    console.log("Name of the person : " + name);
    var value = 5;
    var myname = value.toFixed(4);
    console.log("my name " + myname);
}
function test(value) {
    if (value === void 0) { value = "TEEST"; }
    console.log("Default value: " + value);
}
//# sourceMappingURL=app.js.map