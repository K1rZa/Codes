let swiper = new Swiper(".home-gallery-main", {
    direction: "horizontal",
    slidesPerView: 3,
    mousewheel: true,
  });



  class SvgLinkEffect {
    constructor(effect) {
      if (effect.config.random) {
        this.randomizeArray(effect.nodes);
      }
  
      effect.element.addEventListener("mouseenter", () => {
        if (!effect.element.classList.contains("active")) {
          effect.element.classList.add("active");
          effect.handler(effect.nodes, effect.config, false); 
        }
      });
  
      effect.element.addEventListener("mouseleave", () => {
        if (effect.element.classList.contains("active")) {
          effect.element.classList.remove("active");
          effect.handler(effect.nodes, effect.config, true); 
        }
      });
    }
  
    randomizeArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  
  const svgBounceEffect = (nodes, config, reverse) => {
    nodes.forEach((node, index) => {
      const { duration, ease, y1, y2, offset } = config;
      setTimeout(() => {
        if (reverse) {
          gsap.to(node, {
            duration: duration,
            ease: ease,
            y: y1 
          });
        } else {
          gsap.to(node, {
            duration: duration,
            ease: ease,
            y: y2 
          });
        }
      }, index * offset);
    });
  };
  
  document.addEventListener("DOMContentLoaded", (event) => {
    const randomStepLinkHome = document.getElementById("header-nav-home");
    const randomStepLinkEffectHome = {
      element: randomStepLinkHome,
      handler: svgBounceEffect,
      nodes: [...randomStepLinkHome.querySelectorAll("rect")],
      config: {
        offset: 10,
        duration: 0.2,
        random: true,
        ease: "steps(10)",
        y1: -20,
        y2: 44
      }
    };
  
    const randomStepLinkInfo = document.getElementById("header-nav-info");
    const randomStepLinkEffectInfo = {
      element: randomStepLinkInfo,
      handler: svgBounceEffect,
      nodes: [...randomStepLinkInfo.querySelectorAll("rect")],
      config: {
        offset: 10,
        duration: 0.2,
        random: true,
        ease: "steps(10)",
        y1: -20,
        y2: 44
      }
    };
  
    const randomStepLinkNews = document.getElementById("header-nav-news");
    const randomStepLinkEffectNews = {
      element: randomStepLinkNews,
      handler: svgBounceEffect,
      nodes: [...randomStepLinkNews.querySelectorAll("rect")],
      config: {
        offset: 10,
        duration: 0.2,
        random: true,
        ease: "steps(10)",
        y1: -20,
        y2: 44
      }
    };
  
    // const randomStepLinkTournament = document.getElementById("header-nav-tournament");
    // const randomStepLinkEffectTournament = {
    //   element: randomStepLinkTournament,
    //   handler: svgBounceEffect,
    //   nodes: [...randomStepLinkTournament.querySelectorAll("rect")],
    //   config: {
    //     offset: 10,
    //     duration: 0.2,
    //     random: true,
    //     ease: "steps(10)",
    //     y1: -20,
    //     y2: 44
    //   }
    // };
  
    const randomStepLinkRegister = document.getElementById("header-nav-register");
    const randomStepLinkEffectRegister = {
      element: randomStepLinkRegister,
      handler: svgBounceEffect,
      nodes: [...randomStepLinkRegister.querySelectorAll("rect")],
      config: {
        offset: 10,
        duration: 0.2,
        random: true,
        ease: "steps(10)",
        y1: -20,
        y2: 44
      }
    };
  
    new SvgLinkEffect(randomStepLinkEffectHome);
    new SvgLinkEffect(randomStepLinkEffectInfo);
    new SvgLinkEffect(randomStepLinkEffectNews);
    // new SvgLinkEffect(randomStepLinkEffectTournament);
    new SvgLinkEffect(randomStepLinkEffectRegister);
  });
   