<template>
    <div >
        <model-stl 
            :src="activeDesign"
            :rotation="rotation"
            @on-load="onLoad"
            @on-click="isRotating"
        >
        </model-stl>
    </div>
</template>

<script>
    import { ModelStl } from 'vue-3d-model';

    export default {
        name: 'ModelViewer',
        props: {
            activeDesign : String
        },
        components: {
            ModelStl
        },
        data() {
            return {
                isRotate: false,
                rotation: {
                    x: -Math.PI / 4,
                    y: 0,
                    z: 0
                },
            };
        },
        computed: {
            srcNamefile() {
                return `http://localhost:3080/api/stl/${this.namefile}.stl`
            }
        },
        methods: {
            onLoad () {
                this.rotate();
            },
            isRotating (){
                this.isRotate = ! this.isRotate;
                this.rotate();
            },
            rotate () {
                if ( this.isRotate ) {
                    this.rotation.z += 0.01;
                    this.rotation.y += 0.01;
                    requestAnimationFrame( this.rotate );
                }
                
            }
        }
    }
</script>