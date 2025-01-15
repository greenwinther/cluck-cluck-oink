import "./circle.scss";
import "./animationValues.scss";

export const circleImageRoler = (img: HTMLImageElement): HTMLElement => {
  const frame = document.createElement("div");
  frame.classList.add("circle-image-inner");

  const innerCircle = document.createElement("div");
  innerCircle.classList.add("circle-image-frame");
  frame.appendChild(img);

  frame.appendChild(innerCircle);

  return frame;
};
