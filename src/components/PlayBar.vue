<template>
    <div id="playBar">
        <a-row style="height: 100%">
            <a-col :span="6"></a-col>
            <a-col :span="12">
                <a-row type="flex" justify="center" class="playBarController">
                    <a-col :xs="2" class="controller">
                        <button class="button random class"></button>
                    </a-col>
                    <a-col :xs="4" class="controller">
                        <button class="previous button"></button>
                    </a-col>
                    <a-col :xs="4" class="controller">
                        <!-- <button class="pause button" @click="toggleStatus"></button> -->
                        <button :class="[isPlaying ? 'pause' : 'play', 'button']" @click="toggleStatus"></button>
                    </a-col>
                    <a-col :xs="4" class="controller">
                        <button class="next button"></button>
                        <!-- <a-button shape="circle" icon="step-forward" ghost class="playBarBtn"></a-button> -->
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FooterBar extends Vue {
    private isPlaying: boolean = false;
    private toggleStatus() {
        this.isPlaying = !this.isPlaying;
    }
}
</script>

<style>
.controller {
    height: 64px;
    line-height: 64px;
}
#playBar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 91px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
}
.controller {
    font-family: 'seg style';
}
.controller .button {
    width: 36px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #00000000;
    border: none;
    font-size: 24px;
    transition: all 0.2s linear;
}
.controller .button:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.2);
}
.controller .button:active {
    width: 32px;
    height: 32px;
    line-height: 32px;
}
.random.on {
    background-color: rgba(255,255,255,0.2);
}
.random::after {
    content: '\e8b1';
}
.play::after {
    content: '\e768';
}
.pause::after {
    content: '\edb4';
}
.previous::after {
    content: '\e892';
}
.next::after {
    content: '\e893';
}
</style>


