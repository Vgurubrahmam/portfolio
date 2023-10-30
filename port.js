const textContainer = document.getElementById('text-container');
        const textToType = "Guru Bhrahmam";
        let index = 0;

        function typeText() {
            if (index < textToType.length) {
                textContainer.textContent += textToType[index];
                index++;
                setTimeout(typeText, 170); // Adjust the timeout for typing speed
            } else {
                setTimeout(resetAnimation, 1); // Delay before resetting the animation
            }
        }

        function resetAnimation() {
            textContainer.textContent = '';
            index = 0;
            typeText();
        }

        typeText();