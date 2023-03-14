    // POPUP
    window.addEventListener("load", () => {
        setTimeout(() => {
            showPopup();
        }, 12000);
    });

    function showPopup() {
        document.querySelector(".popup").classList.add('popup-active');
    }