document.addEventListener("DOMContentLoaded", () => {
  // FAQ dropdown
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const wrapper = question.closest(".question-wrapper");
      wrapper.classList.toggle("active");
    });
  });

  // Scroll to top button
  const btnScrollToTop = document.getElementById("topBtn");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      btnScrollToTop.classList.add("show");
    } else {
      btnScrollToTop.classList.remove("show");
    }
  };
  btnScrollToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
