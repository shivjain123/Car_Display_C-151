//Car
AFRAME.registerComponent("car", {
    schema: {
        modelRef: { type: "string", default: "../assets/scene.gltf" }
    },
    init: function () {
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = { x: 5, y: 2, z: 4.5 };
        const rotation = { x: 0, y: -100, z: 0 };
        const scale = {x: 5.9, y: 5.9, z: 5.9};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", scale)
    }
});

//Base
AFRAME.registerComponent("base", {
    schema: {
        radius: { type: "number", default: 15 },
        height: { type: "number", default: 3.6 }
    },
    init: function () {
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "#1769aa" });
    },
});