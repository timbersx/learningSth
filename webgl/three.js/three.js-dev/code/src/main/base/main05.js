import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 导入动画库
import gsap from "gsap";

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

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
console.log(cube)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)

// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 设置控制器阻尼，让控制器有重量感
controls.enableDamping = true
// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 设置时钟
const clock = new THREE.Clock()
// yoyo: true 设置是否往返运动 
let animation1 =  gsap.to(cube.position, { x: 5, ease: 'power1.inOut', duration: 5, onComplete: () => {
  console.log('动画完成！')
}, yoyo: true, repeat: 1 })
// repeat: 1 设置循环动画次数，-1是无限循环
gsap.to(cube.rotation, { x: 2*Math.PI, duration: 5, repeat: -1 })
// 暂停与恢复动画
window.addEventListener('dblclick', () => {
  if(animation1.isActive()) {
    animation1.pause()
  } else {
    animation1.resume()
  }
})

// 设置动画
function render() {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

// 监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
  // 更新摄像头
  camera.aspect = window.innerWidth/window.innerHeight
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix()

  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio)
})