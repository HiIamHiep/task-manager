// Scroller for header
const header = $("#sticky-header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Daily task
const dailyDot = $$(".daily-task__dot");
const dailyItem = $$(".daily-task__item");

// Set active
function setActive(index) {
  dailyDot.forEach((dot) => {
    dot.classList.remove("daily-task__dot--active");
  });
  dailyItem.forEach((item) => {
    item.classList.remove("daily-task__item--active");
  });

  dailyDot[index].classList.add("daily-task__dot--active");
  dailyItem[index].classList.add("daily-task__item--active");
}

dailyDot.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    if (!this.classList.contains("daily-task__dot--active")) {
      setActive(index);
    }
  });
});

dailyItem.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("daily-task__item--active")) {
      setActive(index);
    }
  });
});
