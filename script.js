document.addEventListener("DOMContentLoaded", function () {

    const temaBtn = document.getElementById("temaBtn");

    temaBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            temaBtn.innerHTML = "☀️";
        } else {
            temaBtn.innerHTML = "🌙";
        }

    });

});
