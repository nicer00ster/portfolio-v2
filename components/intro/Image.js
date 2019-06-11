import * as THREE from 'three';

class Image {
    constructor() {
        this.uniforms = {
            resolution: {
                type: 'v2',
                value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
            imageResolution: {
                type: 'v2',
                value: new THREE.Vector2(2048, 1356),
            },
            texture: {
                type: 't',
                value: null,
            },
        };
        this.obj = null;
    }
    init(src, callback) {
        const loader = new THREE.TextureLoader();
        loader.crossOrigin = '*';
        loader.load(src, (tex) => {
                tex.magFilter = THREE.NearestFilter;
                tex.minFilter = THREE.NearestFilter;
                this.uniforms.texture.value = tex;
                this.obj = this.createObj();
                callback();
            });
    }
    createObj() {
        return new THREE.Mesh(
            new THREE.PlaneBufferGeometry(2, 2),
            new THREE.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: `
                    attribute vec3 position;
                    attribute vec2 uv;

                    varying vec2 vUv;

                    void main(void) {
                      vUv = uv;
                      gl_Position = vec4(position, 1.0);
                    }
                `,

                fragmentShader: `
                    precision highp float;

                    uniform vec2 resolution;
                    uniform vec2 imageResolution;
                    uniform sampler2D texture;

                    varying vec2 vUv;

                    void main(void) {
                      vec2 ratio = vec2(
                          min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
                          min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
                        );
        
                      vec2 uv = vec2(
                          vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                          vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
                        );
                      gl_FragColor = texture2D(texture, uv);
                    }
                 `,
            })
        );
    }
    resize() {
        this.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    }
}

export default Image;