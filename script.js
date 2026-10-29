// Dữ liệu các slide ở phần hero
var slides = [
  {
    title: "Rouge Dior",
    desc: "Sắc đỏ kinh điển, màu sắc đậm và rõ nét cho mọi dịp quan trọng.",
    bg: "linear-gradient(120deg, #2a0610, #8b0a1a 60%, #c4122f)",
    color: "#b3001b"
  },
  {
    title: "Dior Addict",
    desc: "Độ căng bóng thoải mái, tự nhiên cho những ngày thường.",
    bg: "linear-gradient(120deg, #2b1a14, #9a5a48 60%, #e0a38f)",
    color: "#c98a76"
  },
  {
    title: "Dior Lip Glow",
    desc: "Làn môi hồng hào mềm mượt, dễ dùng cho người mới bắt đầu.",
    bg: "linear-gradient(120deg, #1f1020, #6e1233 60%, #d9778c)",
    color: "#d9778c"
  }
];

var current = 0;
var hero = document.getElementById("hero");
var buttons = document.querySelectorAll(".mini button");

// Hiển thị slide thứ i (quay vòng khi vượt quá số slide)
function show(i) {
  current = (i + slides.length) % slides.length;
  var s = slides[current];
  hero.style.background = s.bg;
  document.getElementById("hero-title").textContent = s.title;
  document.getElementById("hero-desc").textContent = s.desc;
  document.getElementById("hero-bullet").style.setProperty("--c", s.color);
  buttons.forEach(function (b, idx) {
    b.classList.toggle("active", idx === current);
  });
}

// Nút mũi tên
document.getElementById("next").addEventListener("click", function () {
  show(current + 1);
});
document.getElementById("prev").addEventListener("click", function () {
  show(current - 1);
});

// Ảnh nhỏ chọn slide
buttons.forEach(function (b) {
  b.addEventListener("click", function () {
    show(Number(b.dataset.i));
  });
});

// Màu son ban đầu và tự động chuyển slide mỗi 6 giây
document.getElementById("hero-bullet").style.setProperty("--c", slides[0].color);
setInterval(function () {
  show(current + 1);
}, 6000);
