const boxContainer = document.getElementById("boxContainer");
const giveColors = () => {
  const boxes = document.querySelectorAll(".box");
  const colors = ["yellow", "cyan", "lightGreen", "pink"];
  Array.from(boxes).map((item, index) => {
    item.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
};

const createChild = () => {
  const ele = document.createElement("div");
  ele.innerText = "New";
  ele.className = "box";
  boxContainer.appendChild(ele);
};
