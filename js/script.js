{
    {
        const welcome = console.log("Cześć!")
        welcome;
    }

    {
        const button1 = document.querySelector(".button1");
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        button1.addEventListener("click", () => {
            body.classList.toggle("dark");
            themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
        })
    };


    {
        const button2 = document.querySelector(".button2");
        button2.addEventListener("click", () => {
            const zdjecie = document.querySelector(".zdjecie");
            zdjecie.remove();
        })
    };
}