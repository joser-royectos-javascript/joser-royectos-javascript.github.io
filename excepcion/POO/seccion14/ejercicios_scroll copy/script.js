document.addEventListener("DOMContentLoaded", function() {
    const birds = document.querySelectorAll(".bird");

    birds.forEach(bird => {
        bird.addEventListener("wheel", function(event) {
            event.preventDefault();
            let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail) ));
            let scaleFactor = 0.05; // Change this value to adjust the scaling speed
            let newWidth = this.clientWidth + delta * scaleFactor * this.clientWidth;
            this.style.maxWidth = `${newWidth}px`;
            console.log(delta, "("+event.wheelDelta, event.detail,+")",newWidth, bird.getAttribute('id'));
        });
        
    });
});
