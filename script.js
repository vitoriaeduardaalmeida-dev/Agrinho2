const temaBtn = document.getElementById("temaBtn");

temaBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        temaBtn.innerHTML = "☀️";

    } else {

        temaBtn.innerHTML = "🌙";

    }

};
