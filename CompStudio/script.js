const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const output = document.getElementById('output');
const emojis = document.getElementById

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';


recognition.onresult = function(event) {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    output.innerHTML = transcript;
    console.log(recognition)
    
  if(transcript == "Hello"){
        output.innerHTML = "testing";
    }

    if(transcript == "fine"){
        output.innerHTML = "bad";
    }
    if(transcript == "Thank you"){
        output.innerHTML = "no";
    }
};

startButton.addEventListener('click', function() {
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', function() {
    recognition.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
});