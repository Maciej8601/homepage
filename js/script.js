{
    {
        const welcome = () => {
            console.log("Cześć!")
        }

        welcome();
    }

    {
        const onChangeBackgroundClick = () => {
            const body = document.querySelector(".body");
            const themeName = document.querySelector(".themeName");

            body.classList.toggle("dark");
            themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
        };

        const button1 = document.querySelector(".button1");


        button1.addEventListener("click", onChangeBackgroundClick)
    };

    const removePhoto = () => {
        const zdjecie = document.querySelector(".zdjecie");
        zdjecie.remove();
    }

    {
        const button2 = document.querySelector(".button2");
        button2.addEventListener("click", removePhoto);
    };
};