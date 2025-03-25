const gradientColorBtn = document.querySelector("#bgColorChanger");

function updateLinearGradient() {
  // Colors rgb(0,0,0),rgb(0,255,125)
  // red => 0-255,
  // green =>0-255,

  const red1 = Math.floor(Math.random() * 256);
  const green1 = Math.floor(Math.random() * 256);
  const blue1 = Math.floor(Math.random() * 256);

  const red2 = Math.floor(Math.random() * 256);
  const green2 = Math.floor(Math.random() * 256);
  const blue2 = Math.floor(Math.random() * 256);

  console.log(red1, green1, blue1, red2, green2, blue2);

  localStorage.setItem(
    "code",
    JSON.stringify({
      red1,
      green1,
      blue1,
      red2,
      green2,
      blue2,
    })
  );

  document.body.style.background = `linear-gradient(rgb(${red1},${green1},${blue1}),rgb(${red2},${green2},${blue2}))`;
}

gradientColorBtn.addEventListener("click", updateLinearGradient);

window.onload = () => {
  const retrieveData = localStorage.getItem("code");

  if (retrieveData) {
    const data = JSON.parse(retrieveData);
    console.log(data);
    const { red1, green1, blue1, red2, green2, blue2 } = data;
    document.body.style.background = `linear-gradient(rgb(${red1},${green1},${blue1}),rgb(${red2},${green2},${blue2}))`;
  }
};
