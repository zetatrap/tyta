document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".product-card", {
        opacity: 1,  // Hace que aparezcan suavemente
        y: 0,        // Asegura que todas estén alineadas
        duration: 1, 
        stagger: 0.2, 
        ease: "power2.out"
    });
});