// Lấy phần tử popup
const popupOverlay = document.getElementById("popupOverlay");

// Lấy giờ hiện tại
const currentHour = new Date().getHours();

// Kiểm tra nếu không nằm trong khoảng 4h sáng - 7h tối thì hiển thị popup
if (currentHour < 4 || currentHour >= 19) {
    setTimeout(function () {
        popupOverlay.classList.add("show");
    }, 500);
}
