// Variables globales para almacenar animaciones y timelines
let animation4, timeline6;

// Esperar a que el documento esté listo
$(document).ready(function () {
    // ========== EXAMPLE 1: gsap.to() ==========
    $(".btn-example-1").on("click", function () {
        gsap.to(".box1", { x: 300, duration: 1 });
    });

    $(".btn-reset-1").on("click", function () {
        gsap.set(".box1", { x: 0 });
    });

    // ========== EXAMPLE 2: gsap.from() ==========
    $(".btn-example-2").on("click", function () {
        gsap.from(".box2", { x: -300, opacity: 0, duration: 1 });
    });

    $(".btn-reset-2").on("click", function () {
        gsap.set(".box2", { x: 0, opacity: 1 });
    });

    // ========== EXAMPLE 3: Múltiples propiedades ==========
    $(".btn-example-3").on("click", function () {
        gsap.to(".box3", {
            x: 200,
            rotation: 360,
            scale: 1.5,
            duration: 1.5,
            ease: "bounce.out",
        });
    });

    $(".btn-reset-3").on("click", function () {
        gsap.set(".box3", { x: 0, rotation: 0, scale: 1 });
    });

    // ========== EXAMPLE 4: Repeat y Yoyo ==========
    $(".btn-example-4").on("click", function () {
        animation4 = gsap.to(".box4", {
            x: 250,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    $(".btn-stop-4").on("click", function () {
        if (animation4) {
            animation4.kill();
        }
    });

    $(".btn-reset-4").on("click", function () {
        if (animation4) {
            animation4.kill();
        }
        gsap.set(".box4", { x: 0 });
    });

    // ========== EXAMPLE 5: Stagger ==========
    $(".btn-example-5").on("click", function () {
        gsap.from(".stagger-box", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out",
        });
    });

    $(".btn-reset-5").on("click", function () {
        gsap.set(".stagger-box", { y: 0, opacity: 1 });
    });

    // ========== EXAMPLE 6: Timeline ==========
    $(".btn-play-6").on("click", function () {
        timeline6 = gsap.timeline();
        timeline6
            .to(".box6", { x: 200, duration: 1 })
            .to(".box6", { y: 100, duration: 1 })
            .to(".box6", { rotation: 360, duration: 1 });
    });

    $(".btn-pause-6").on("click", function () {
        if (timeline6) {
            timeline6.pause();
        }
    });

    $(".btn-reverse-6").on("click", function () {
        if (timeline6) {
            timeline6.reverse();
        }
    });

    $(".btn-restart-6").on("click", function () {
        if (timeline6) {
            timeline6.restart();
        }
    });

    // ========== EXAMPLE 7: Position Parameter ==========
    $(".btn-example-7").on("click", function () {
        const tl = gsap.timeline();
        tl.to(".box7a", { x: 200, duration: 1 })
            .to(".box7b", { x: 200, duration: 1 }, "<")
            .to(".box7c", { x: 200, duration: 1 }, "-=0.5");
    });

    $(".btn-reset-7").on("click", function () {
        gsap.set(".box7a, .box7b, .box7c", { x: 0 });
    });

    // ========== EXAMPLE 8: Easing ==========
    $(".btn-example-8").on("click", function () {
        gsap.to(".box8a", { x: 500, duration: 2, ease: "none" });
        gsap.to(".box8b", { x: 500, duration: 2, ease: "power2.inOut" });
        gsap.to(".box8c", { x: 500, duration: 2, ease: "elastic.out" });
        gsap.to(".box8d", { x: 500, duration: 2, ease: "bounce.out" });
    });

    $(".btn-reset-8").on("click", function () {
        gsap.set(".box8a, .box8b, .box8c, .box8d", { x: 0 });
    });
}); // Fin document.ready
