gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Если мы не используем устройство с касанием (смартфоны и т.п.)
if (ScrollTrigger.isTouch !== 1) {
  // Определение плавающих элементов
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    // замедление прокрутки
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        // Возвращает предыдущее значение при возврате обратно к условию
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");

  // Проходим по каждому элементу
  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -50, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");

  // Проходим по каждому элементу
  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 50, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
