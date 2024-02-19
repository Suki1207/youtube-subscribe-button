const btnElement = document.querySelector(".btn-subscribe");

btnElement.addEventListener("click", () => {
  if (!btnElement.classList.contains("btn-subscribed")) {
    btnElement.classList.add("btn-subscribed");
    btnElement.innerText = "Subscribed";
  } else {
    btnElement.classList.remove("btn-subscribed");
    btnElement.innerText = "Subscribe";
  }
});
