<template>
    <login-card></login-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginCard from '@/components/LoginCard.vue';
@Component({
    components: {
        LoginCard,
    },
})
export default class Login extends Vue {}
</script>
