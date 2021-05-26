let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".sub", 10, { y: -300 })
  .to(".redcar", 10, { y: -300 }, "-=10")
  .fromTo(".bacground", { y: -60 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})

  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
