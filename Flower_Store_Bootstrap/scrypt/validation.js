function createCounter(selector, max, speed = 1, threshold = 0.5) {
    let element = document.querySelector(selector);
    let count = 0;
    let interval = null;

    function startCounting() {
        clearInterval(interval);
        count = 0;
        interval = setInterval(() => {
            element.innerText = count + "+";
            count += 10;
            if (count > max) {
                clearInterval(interval);
            }
        }, speed);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
            } else {
                clearInterval(interval);
                element.innerText = "0";
            }
        });
    }, { threshold });

    observer.observe(element);
}

function createCounterYears(selector, max, speed = 250, threshold = 0.5) {
    let element = document.querySelector(selector);
    let count = 0;
    let interval = null;

    function startCounting() {
        clearInterval(interval);
        count = 0;
        interval = setInterval(() => {
            element.innerText = count + "+";
            count ++;
            if (count > max) {
                clearInterval(interval);
            }
        }, speed);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
            } else {
                clearInterval(interval);
                element.innerText = "0";
            }
        });
    }, { threshold });

    observer.observe(element);
}

createCounter("#packages", 3000, 10);
createCounter("#bouquet", 5000, 6);
createCounter("#happy", 7000);
createCounterYears("#years", 10);


validation = () => {
    const name = document.getElementById("name").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const mess = document.getElementById("messageT").value.trim();
  
    if (name === "") {
      alert("Vui lòng nhập họ tên!")
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      alert("Email không hợp lệ!")
      return false;
    }

    if (mess == ""){
        alert("Vui lòng nhập message!");
        return false;
    }
    
    alert("Gửi thành công!")
}
  

function scrollProducts(direction) {
    const container = document.getElementById('product-container');
    const scrollAmount = 300; // khoảng cách cuộn mỗi lần (px)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".nav-item.dropdown");

    dropdown.addEventListener("mouseenter", function () {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        dropdownToggle.classList.add("show");
        dropdownMenu.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        dropdownToggle.classList.remove("show");
        dropdownMenu.classList.remove("show");
    });
});