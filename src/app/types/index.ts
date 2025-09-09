type DataAos =
    | "fade" | "fade-up" | "fade-down" | "fade-left" | "fade-right"
    | "zoom-in" | "zoom-in-up" | "zoom-in-down" | "zoom-in-left" | "zoom-in-right"
    | "zoom-out" | "zoom-out-up" | "zoom-out-down" | "zoom-out-left" | "zoom-out-right"
    | "flip-up" | "flip-down" | "flip-left" | "flip-right"
    | "slide-up" | "slide-down" | "slide-left" | "slide-right"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "zoom-in-up-right" | "zoom-in-up-left" | "zoom-in-down-right" | "zoom-in-down-left"
    | "zoom-out-up-right" | "zoom-out-up-left" | "zoom-out-down-right" | "zoom-out-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "zoom-out-up-right" | "zoom-out-up-left" | "zoom-out-down-right" | "zoom-out-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left"
    | "fade-up-right" | "fade-up-left" | "fade-down-right" | "fade-down-left"
    | "flip-up-right" | "flip-up-left" | "flip-down-right" | "flip-down-left"
    | "slide-up-right" | "slide-up-left" | "slide-down-right" | "slide-down-left";


export const aosAnimation: Record<string, DataAos> = {
    fade: "fade",
    fadeUp: "fade-up",
    fadeDown: "fade-down",
    fadeLeft: "fade-left",
    fadeRight: "fade-right",
    zoomIn: "zoom-in",
    zoomInUp: "zoom-in-up",
    zoomInDown: "zoom-in-down",
    zoomInLeft: "zoom-in-left",
    zoomInRight: "zoom-in-right",
    zoomOut: "zoom-out",
    zoomOutUp: "zoom-out-up",
    zoomOutDown: "zoom-out-down",
    zoomOutLeft: "zoom-out-left",
    zoomOutRight: "zoom-out-right",
    flipUp: "flip-up",
    flipDown: "flip-down",
    flipLeft: "flip-left",
    flipRight: "flip-right",
    slideUp: "slide-up",
    slideDown: "slide-down",
    slideLeft: "slide-left",
    slideRight: "slide-right",
};


export type TypeWithKey<T> = { [key: string]: T };