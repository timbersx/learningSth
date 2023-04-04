import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 导入动画库
import gsap from "gsap";
// 导入dat.gui
import * as dat from 'dat.gui'

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

// 添加GUI图像用户界面
const gui = new dat.GUI()
gui.add(cube.position, 'x').min(0).max(5).step(0.01).name('移动x轴').onChange(() => {
  console.log('值被修改了')
}).onFinishChange(() => {
  console.log('完全停下来， 鼠标停下来（松开）')
})
// 设置颜色
const params = { color: '#ffff00', fn() {
  gsap.to(cube.position, { 'x': 5, duration: 2, yoyo: true, repeat: -1 })
} }
gui.addColor(params, 'color').name('颜色').onChange((value) => {
  cube.material.color.set(value)
})
// 设置选项框
gui.add(cube, 'visible').name('是否显示')
// 点击触发动画函数
gui.add(params, 'fn').name('立方体运动')
// 添加文件夹
const folder = gui.addFolder('设置文件夹')
folder.add(cube.material, 'wireframe')

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

function render() {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

// 监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix()

  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio)
})
