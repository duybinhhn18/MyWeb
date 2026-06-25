const backToTopBtn = document.getElementById("backToTop");

// Lắng nghe sự kiện cuộn chuột của người dùng
window.addEventListener("scroll", () => {
  // Nếu cuộn xuống quá 300px thì hiện nút, ngược lại thì ẩn
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Xử lý sự kiện khi click vào nút
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" /* Cuộn mượt mà */,
  });
});
