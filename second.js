
    var popupButton = document.getElementById("popupButton");
    var popup = document.getElementById("popup");
    var closeButton = document.getElementById("closeButton");

    popupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
