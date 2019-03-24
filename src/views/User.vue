<template>
    <a-layout>
      <a-layout-header>
          <title-menu></title-menu>
      </a-layout-header>
      <a-layout-content></a-layout-content>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginCard from '@/components/LoginCard.vue';
import TitleMenu from '@/components/user/TitleMenu.vue';
@Component({
    components: {
        LoginCard,
        TitleMenu
    },
})
export default class Login extends Vue {}
</script>
