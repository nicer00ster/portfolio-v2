import React from 'react';
import * as THREE from 'three';
import Image from './Image';
import Effect from './Effect';

const debounce = (callback, duration) => {
    let timer;
    return function(event) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(event);
        }, duration);
    };
};

class Glitch extends React.Component {
    render() {
        const canvas = document.getElementById('intro');

        const renderer = canvas ? new THREE.WebGLRenderer({
            antialias: false,
            canvas: canvas,
        }) : null;

        const renderBack1 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
        const scene = new THREE.Scene();
        const sceneBack = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const cameraBack = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        const clock = new THREE.Clock();

        const bgImg = new Image();
        const postEffect = new Effect(renderBack1.texture);

        const resizeWindow = () => {
            if(canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                cameraBack.aspect = window.innerWidth / window.innerHeight;
                cameraBack.updateProjectionMatrix();
                bgImg.resize();
                postEffect.resize();
                renderBack1.setSize(window.innerWidth, window.innerHeight);
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        const renderGlitch = () => {
            if(canvas) {
                const time = clock.getDelta();
                renderer.setRenderTarget(renderBack1);
                renderer.render(sceneBack, cameraBack);
                renderer.setRenderTarget(null);
                postEffect.render(time);
                renderer.render(scene, camera);
            }

        };

        const renderLoop = () => {
            if(canvas) {
                renderGlitch();
                requestAnimationFrame(renderLoop);
            }
        };


        const on = () => {
            if(canvas) {
                window.addEventListener('resize', debounce(() => {
                    resizeWindow();
                }), 1000);
            }
        };

        const init = () => {
            if(canvas) {
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setClearColor(0x111111, 1.0);
                cameraBack.position.set(0, 0, 100);
                cameraBack.lookAt(new THREE.Vector3());

                bgImg.init('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', () => {
                    sceneBack.add(bgImg.obj);
                    scene.add(postEffect.obj);
                });

                on();
                resizeWindow();
                renderLoop();
            }
        };
        init();
        return null;
    }
}


export default Glitch;
