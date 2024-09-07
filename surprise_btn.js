document.addEventListener('DOMContentLoaded', function() {
    const playMusicBtn = document.getElementById('playMusicBtn');
    const birthdayMusic = document.getElementById('birthdayMusic');
    const goBackBtn = document.getElementById('backButton');

    // Ensure the music file is properly loaded before adding event listeners
    birthdayMusic.load();

    // Play music when the button is clicked
    playMusicBtn.addEventListener('click', function() {
        birthdayMusic.play().catch(error => {
            console.error("Error playing the music: ", error);
            alert("Audio playback failed. Please try again.");
        });
    });

    // Go back to index.html when the "Go Back" button is clicked
    goBackBtn.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to index.html
    });
});