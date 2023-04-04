import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

// 设置相机位置
camera.position.set(0, 0, 10)
scene.add(camera)

// 添加物体
const cubeGeometry = new THREE.BoxGeometry()
// 材质
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffff00
})

// 创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 将几何体添加到场景中
scene.add(cube)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
console.log(renderer)

// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 使用渲染器，通过相机将场景渲染出来
renderer.render(scene, camera)