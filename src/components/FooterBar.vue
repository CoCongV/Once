<template>
    <div id="playerNavigation">
        <a-row>
            <a-col :xs="2" :lg="1" class="icon">
                <a-button type="primary" shape="circle" icon="step-backward"></a-button>
            </a-col>
            <a-col :xs="2" :lg="1" class="icon">
                <a-button type="primary" shape="circle" icon="caret-right" size="large"></a-button>
            </a-col>
            <a-col :xs="2" :lg="1" class="icon">
                <a-button type="primary" shape="circle" icon="step-forward"></a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class FooterBar extends Vue {}
</script>

<style scoped>
.icon {
    height: 40px;
    line-height: 40px;
}
.playerNavigation {
    z-index: 1;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg);
}
.playerNavigation::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: -1;
}
</style>


