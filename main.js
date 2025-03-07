// Lấy phần tử popup
const popupOverlay = document.getElementById("popupOverlay");

// Sau 2 giây, hiển thị popup
setTimeout(function () {
    popupOverlay.classList.add("show");
}, 500);
