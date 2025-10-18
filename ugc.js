gsap.from(".page1", {
    duration: 1,
    
    scale: 0.5,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
  });

  gsap.from(".page2 .page2left", {
    x: 100,
      opacity:0,// Animation properties
    duration: 1,
    scrollTrigger: {
      trigger: ".page2", // Element that triggers the animation
      start: "top 30%", // When the top of the trigger hits the center of the viewport
      end: "bottom 50%", // When the bottom of the trigger hits the top of the viewport
      scrub: true, // Link animation progress to scroll position
      // Optional: Display visual markers for start/end points
    }
  });



