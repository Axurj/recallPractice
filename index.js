function getResult(callStart, callEnd) {
    callStart();
    setTimeout(() => {
        callEnd();
    }, 3000);
}

function showGreeting() {
    console.log("Welcome~");
}

function showLeaving() {
    console.log('Good bye~');
}

getResult(showGreeting, showLeaving);