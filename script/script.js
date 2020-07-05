gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".view_one h2", { x: -250, opacity: 0, duration: 2 })
  .from(".view_one p", { opacity: 0, duration: 1 }, "-=0.5")
  .from(".view_one button", { opacity: 0, y: -25, duration: 1 });

let tl1 = gsap.timeline({
  scrollTrigger: { trigger: ".view_two" },
});

tl1
  .from(".view_two h2", { x: -250, opacity: 0, duration: 2 })
  .from(".view_two p", { opacity: 0, duration: 1 }, "-=0.5")
  .from(".view_two button", { opacity: 0, y: -25, duration: 1 });

let tl2 = gsap.timeline({
  scrollTrigger: { trigger: ".view_three" },
});

tl2
  .from(".view_three h2", { x: -250, opacity: 0, duration: 2 })
  .from(".view_three p", { opacity: 0, duration: 1 }, "-=0.5")
  .from(".view_three button", { opacity: 0, y: -25, duration: 1 });

gsap.from(".support h1", {
  scrollTrigger: { trigger: ".support" },
  x: -250,
  opacity: 0,
  duration: 2,
});

gsap.from(".volunteer", {
  scrollTrigger: { trigger: ".volunteer" },
  opacity: 0,
  duration: 3,
});

gsap.from(".training", {
  scrollTrigger: { trigger: ".training" },
  opacity: 0,
  duration: 3,
});

gsap.from(".donate", {
  scrollTrigger: { trigger: ".donate" },
  opacity: 0,
  duration: 3,
});

gsap.from(".partners h1", {
  scrollTrigger: { trigger: ".partners" },
  x: -250,
  opacity: 0,
  duration: 2,
});
gsap.from(".foot-banner", {
  scrollTrigger: { trigger: ".foot-banner" },
  opacity: 0,
  duration: 3,
});

gsap.from(".foot_note", {
  scrollTrigger: { trigger: ".foot_note" },
  opacity: 0,
  duration: 3,
});
