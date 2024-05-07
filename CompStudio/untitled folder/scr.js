const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    const emojis = textToEmojis(speechToText);
    document.getElementById('spokenText').innerText = `You said: ${speechToText}`;
    document.getElementById('emojis').innerText = emojis;
};

function startRecording() {
    recognition.start();
}

// function textToEmojis(text) {
//     const emojis = ['😀', '😃', '😉', '😍', '😎', '🤔', '😳', '😭'];
//     let emojiText = '';
//     for (let i = 0; i < text.length; i++) {
//         emojiText += emojis[Math.floor(Math.random() * emojis.length)];
//     }
//     return emojiText;
// }

document.getElementById('startButton').addEventListener('click', () => {
    startRecording();
});


