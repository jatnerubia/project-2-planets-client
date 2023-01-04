import { useEffect } from "react";
const AnimatedStar = () => {
  useEffect(() => {
    animatedStars();
  },[]);
  const generateRandomColor = () => {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  const animatedStars = () => {
    let count = 200,
      windowWidth,
      windowHeight,
      size,
      duration;
    const stars = document.getElementById("stars");
    for (let i = 0; i < count; i++) {
      const star = document.createElement("i");
      windowWidth = Math.floor(Math.random() * window.screen.availWidth);
      windowHeight = Math.floor(Math.random() * window.screen.availHeight);
      size = Math.random() * 5;
      star.style.left = windowWidth + "px";
      star.style.bottom = windowHeight + "px";
      star.style.height = size + "px";
      star.style.width = size + "px";
      star.style.background = generateRandomColor();
      duration = Math.random() * 5;
      star.style.animationDuration = duration + "s";
      stars.appendChild(star);
      i++;
    }
  };
  //   stars();
  return <section id="stars"></section>;
};
export default AnimatedStar;
