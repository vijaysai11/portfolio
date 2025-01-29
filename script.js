document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profilePic").src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });

// Adding section visibility animation when the section comes into view
const sections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.25,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
