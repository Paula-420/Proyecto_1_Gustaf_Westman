const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

const el = document.getElementById("titleH1");

scroll.on("scroll", (args) => {
    const scrollY = args.scroll.y;
    const newSize = 50 + scrollY * 0.05; // Adjust the multiplier as needed
    el.style.fontSize = `${newSize}px`;
});
