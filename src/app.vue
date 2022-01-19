<template>
    <router-view />
    <span class="version">v{{ version }}</span>
</template>

<script setup>
// Displays version set in package.json
const version = __APP_VERSION__
</script>

<style lang="sass">
// Reset default styles
*
    margin: 0
    padding: 0
    box-sizing: border-box

// Set default color/background/font-size on root
body
    background: #fff
    color: #000
    font-size: 16px
    font-family: sans-serif

// Use up at least available space
html, body
    height: 100%

// Reset input styles
input
    font-size: inherit
    font-family: inherit

.version
    position: absolute
    bottom: 0
    right: 0
    padding: .5em
    font-size: .7em

// Add font declarations here

// Add global animations here

</style>
