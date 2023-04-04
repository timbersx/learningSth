<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
// 场景
const scence = new THREE.Scene()

// 透视摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scence.add(camera)

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
const renderFn = () => {
  renderer.render(scence, camera)
  requestAnimationFrame(renderFn)
}

// 添加立方体
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scence.add(cube)

const container = ref(null)
onMounted(() => {
  container.value.appendChild(renderer.domElement)
  renderFn()
})


</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  width: 100vh;
  background-color: #f0f0f0;
}
</style>
