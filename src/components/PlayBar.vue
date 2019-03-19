<template>
    <div id="playBar">
        <a-row style="height: 100%">
            <a-col :span="6"></a-col>
            <a-col :span="12" class="controller">
                <a-row type="flex" justify="center">
                    <a-col :span="4" :lg="2">
                        <button :class="['random', random ? 'on' : 'off']" @click="toggleRandom"></button>
                    </a-col>
                    <a-col :span="4" :lg="2">
                        <button class="previous"></button>
                    </a-col>
                    <a-col :span="4" :lg="2">
                        <button :class="isPlaying ? 'pause' : 'play'" @click="toggleStatus"></button>
                    </a-col>
                    <a-col :span="4" :lg="2">
                        <button class="next"></button>
                    </a-col>
                    <a-col :span="4" :lg="2">
                        <button :class="['circle', circleMode]" @click="toggleCircle"></button>
                    </a-col>
                </a-row>
                <a-row type="flex" justify="center">
                    <a-col :span="24" :lg="12" class="progress">
                        <a-slider id="test" :defaultValue="0" :disabled="progressDisabled" :tipFormatter="null"/>
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
    private isPlaying = false;
    private random = false;
    private progressDisabled = true;
    private circleList = ['off', 'on', 'one'];
    private circleMode = 'off';
    private toggleStatus() {
        this.isPlaying = !this.isPlaying;
    }
    private toggleRandom() {
        this.random = !this.random;
    }
    private toggleCircle() {
        let len = this.circleList.length;
        let index = this.circleList.indexOf(this.circleMode);
        if (++index == len) {
            this.circleMode = this.circleList[0];
        } else {
            this.circleMode = this.circleList[index++];
        }
    }
}
</script>

<style>
</style>


