const button1 = document.querySelector(".button1");
        const button2 = document.getElementById("button2");

        button1.addEventListener('click', changeText);

        button2.addEventListener('click', function() {
            button2.style.backgroundColor = 'purple';
        });

        const heading = document.querySelector("h1");

        function changeText() {
            const head = prompt("tell me a secret");
            heading.textContent = head;
        }