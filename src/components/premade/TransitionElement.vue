<script setup>
  import { ref } from 'vue'

  const isActive = ref(false)

  function show() {
    isActive.value = true
  }

  function hide() {
    isActive.value = false
  }

  defineExpose({ show, hide })
</script>

<template>
  <div class="progressBar" :class="{ active: isActive }" />
  <div class="transitionElement" :class="{ active: isActive }" />
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .transitionElement
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0

    background: colors.$foreground-color
    backdrop-filter: blur(3rem)
    border-radius: 0
    z-index: 2
    cursor: progress

  .transitionElement
    transform: translateY(-100%)
    transition: transform 0.3s ease

  .transitionElement.active
    transform: translateY(0%)

  .progressBar
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 0.35rem
    z-index: 6

    transform: translateX(-100%)
    background: colors.$accent-color

  .progressBar.active
    animation: progressActive 1s ease

  @keyframes progressActive
    0%
      transform: translateX(-100%)

    50%
      transform: none

    100%
      transform: translateY(-100%)
</style>