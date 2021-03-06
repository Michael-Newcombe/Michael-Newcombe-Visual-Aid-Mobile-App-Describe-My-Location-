// ------------------------------------------------------------------------------------------------------------
// This file is used to play the captions generated by DenseCap back to the user in the form of text to speech.
// ------------------------------------------------------------------------------------------------------------

// Checking if the API speechSynthesis exists 
if ('speechSynthesis' in window) {
  // Constructor function for passing the captions into the speechSynthesis API, it takes the captions string as an
  // argument
  function GetText(text) {
    // Retrieving the captions string passed into this constructor
    this.text = text;
    // Creating a new speechSynthesis object
    const msg = new SpeechSynthesisUtterance();
    // Setting the speech volume
    msg.volume = 1;
    // Setting the speech playback rate
    msg.rate = 1;
    // Setting the speech pitch
    msg.pitch = 1; 
    // Setting the speech text to the variable text
    msg.text = text;
    // Setting the language to UK english  
    msg.lang = 'en-GB';
    // Getting the image container element
    const playAudio = document.getElementById('image-container');
    // Adding an event listener to the image container which listens for a click event
    playAudio.addEventListener('click', () => {
       
      // If the speechSynthesis API is already playing back audio and a click event triggers then the audio is stopped
      // however if no audio is being played and a click event occurs then the audio playback starts. This allows the
      // user to toggle the text to speech playback on and off.
      (speechSynthesis.speaking) ? speechSynthesis.cancel() : speechSynthesis.speak(msg);
      
    })
  }
}
// If the API speechSynthesis does not exists 
else { 
  // Getting the element for displaying speechSynthesis API errors
  const speechError = document.getElementById('speech-error');
  // Telling the user that their browser does not the speechSynthesis API 
  speechError.innerHTML = 'This browser does not support text to speech';
}