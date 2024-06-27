"use strict";

const faqs = document.querySelectorAll(".wrapper");

faqs.forEach((faq) => {
    console.log(faq);
  const subWrapper = faq.querySelector(".sub-wrapper");
  const text = faq.querySelector(".text");
  const plusIcon = faq.querySelector(".plus");

  subWrapper.addEventListener("click", () => {
    if (text.style.display === "block") {
      text.style.display = "none";
      plusIcon.src = "./assets/images/icon-plus.svg";
    } else {
      text.style.display = "block";
      plusIcon.src = "./assets/images/icon-minus.svg";
    }
  });
});
