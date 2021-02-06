const faq = document.querySelectorAll(".question");

faq.forEach((q) => {
  q.addEventListener("click", function () {
    if (q.classList.contains("open")) {
      q.classList.remove("open");
      q.classList.add("closed");
    } else {
      q.classList.add("open");
      q.classList.remove("closed");
    }
  });
});
