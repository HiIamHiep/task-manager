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

// Active group
const taskItems = $$(".task-item__group-wrapper");
function setActiveTask(index) {
  // Delete item & checked
  taskItems.forEach((item) => {
    item.classList.remove("task-item__group-wrapper--active");

    const check = item.querySelector(".task-item__check");

    if (check.classList.contains("task-item__check--active")) {
      check.classList.remove("task-item__check--active");
    }
  });

  const itemCurrent = taskItems[index];

  itemCurrent.classList.add("task-item__group-wrapper--active");
  itemCurrent
    .querySelector(".task-item__check")
    .classList.add("task-item__check--active");
}

// Set active for task item
taskItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("task-item__group-wrapper--active")) {
      setActiveTask(index);
    }
  });
});

// Daily task
const cardItems = $$(".card-item");
const mediaLists = $$(".media-list");

function setActiveCard(index) {
  cardItems.forEach((item) => {
    item.classList.remove("card-item--active");
  });

  mediaLists.forEach((item) => {
    item.classList.remove("media-list--active");
  });

  cardItems[index].classList.add("card-item--active");
  mediaLists[index].classList.add("media-list--active");
}

cardItems.forEach((card, index) => {
  card.addEventListener("click", function () {
    if (!this.classList.contains("card-item--active")) {
      setActiveCard(index);
    }
  });
});

mediaLists.forEach((item, index) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("media-list--active")) {
      setActiveCard(index);
    }
  });
});
