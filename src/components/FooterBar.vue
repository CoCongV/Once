<template>
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
</style>


