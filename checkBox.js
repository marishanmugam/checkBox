let selectAll = document.querySelector(".form-group.select-all input");
let allCheckBox = document.querySelectorAll(".form-group:not(.select-all) input"
);

let chkArr = [];

allCheckBox.forEach((item) => {
  item.addEventListener("change", () => {
    allCheckBox.forEach((e) => {
      chkArr.push(e.checked);
    });
    if (chkArr.includes(false)) {
      selectAll.checked = false;
    } else {
      selectAll.checked = true;
    }
    chkArr = [];
  });
});

selectAll.addEventListener("change", function () {
  if (this.checked) {
    allCheckBox.forEach((i) => {
      i.checked = true;
    });
  } 
  else 
  {
    allCheckBox.forEach((i) => {
      i.checked = false;
    });
  }
});


const getRandomInt = (max ,min) => {
  return Math.floor(Math.random()* (max-min +1))+min
}