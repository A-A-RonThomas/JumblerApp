var reassembled = []
var scrambled = []
var sentenceArray = []

const sentenceList = {
    "Level 1" : [
        "Hello, my name is Aaron.",
        "This is a simple test.",
        "I need one more sentence."
    ]
}

function start (situation) {
    scrambled = [];
    reassembled = [];
    let randomArray = [];
    var output = document.getElementById('outputBox');

    var inputBox = document.getElementById('input')

    output.innerHTML = "";
    
    switch (situation) {
        case 0:
            sentenceArray = grabSentenceFromInput();
            break;

        case 1:
            sentenceArray = grabRandomSentenceFromMemory(sentenceList, 1);
            break;
    }

    jumbleSentence(randomArray, sentenceArray, scrambled);

    printJumbledSentence(scrambled);

    if (inputBox) {
        inputBox.className = "col-12 border border-dark d-none";
        output.className = "border border-dark col-12 justify-content-center";
    }
}

function reset () {
    var inputBox = document.getElementById('userInput');

    document.getElementById('outputBox').innerHTML = '';
    document.getElementById('reassembledBox').innerHTML = '';

    if (inputBox){
        document.getElementById('userInput').value = "";
        document.getElementById('input').className = "col-12 border border-dark";
        document.getElementById('outputBox').className = "border border-dark col-12 justify-content-center d-none";
    }
    
    reassembled = [];
    scrambled = [];
}

function check(elem) {
    var selection = elem.innerHTML;
    var word = document.createElement("div")
    word.setAttribute("id", "reassembledWord")
    word.className = "reassembled";

    reassembled.push(selection);
    word.innerHTML = reassembled[reassembled.length - 1]
    elem.style.textDecoration = "line-through";

    if (reassembled[reassembled.length - 1] == sentenceArray[reassembled.length - 1]) {        
        word.style = "color: green;"
        document.getElementById("reassembledBox").appendChild(word);
    }

    else {
        word.style = "color: red;"
        document.getElementById("reassembledBox").appendChild(word);
    }

    elem.setAttribute("onclick","");
}

function jumbleSentence(randomArray, sentenceArray, scrambledSentenceArray) {
    while (randomArray.length < sentenceArray.length) {
        var num = Math.floor(Math.random() * sentenceArray.length);
        if (randomArray.includes(num) == false) {
            randomArray.push(num)
        }
    }

    for (let i = 0; i < randomArray.length; i++) {
        scrambledSentenceArray.push(sentenceArray[randomArray[i]])
    }

}

function printJumbledSentence(array) {
    for (let j = 0; j < array.length; j++) {
        var slash = document.createElement("div");
        slash.innerHTML = "|";
        var para = document.createElement("div");
        para.className = "output";
        para.setAttribute("onclick","check(this)");
        para.innerHTML = array[j];
        document.getElementById("outputBox").appendChild(para);
        document.getElementById("outputBox").append(slash)
    }

    let finish = document.getElementById("outputBox");
    finish.removeChild(finish.lastChild);
}

function grabSentenceFromInput () {
    sentenceArray = document.getElementById('userInput').value.split(' ');
    return sentenceArray
}

function grabRandomSentenceFromMemory (sentenceObj, level) {
    switch (level) {
        case 1:
            var num = Math.floor(Math.random() * sentenceObj["Level 1"].length);
            return sentenceObj["Level 1"][num].split(' ')
    }
}