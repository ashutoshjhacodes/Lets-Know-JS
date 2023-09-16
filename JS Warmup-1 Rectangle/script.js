var rect = document.querySelector(".center");
rect.addEventListener("mousemove", (details) => {
  var rectLocation = rect.getBoundingClientRect();
  var insdieRectVal = details.clientX - rectLocation.left;
  if (insdieRectVal < rectLocation.width / 2) {
      var redcolor=  gsap.utils.mapRange(0,rectLocation.width / 2,255,0,details.clientX);
      gsap.to(rect,{
        color:`rgb(${redcolor} ,0,0)`,
        ease:Power4,
      });
  } else console.log("right");
});

