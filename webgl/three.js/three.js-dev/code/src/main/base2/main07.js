import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// 导入动画库
import gsap from "gsap";
// 导入dat.gui
import * as dat from 'dat.gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

// 设置相机位置
camera.position.set(0, 0, 10)
scene.add(camera)

// 添加光
const light = new THREE.AmbientLight(0xffffff, .5)
scene.add(light)
const directLight = new THREE.DirectionalLight(0xffffff, 0.5)
directLight.position.set(10, 10, 10)
// 投射阴影 ***
directLight.castShadow = true
// 设置阴影模糊度
directLight.shadow.radius = 20
// 设置阴影贴图模糊度
directLight.shadow.mapSize.set(2048, 2048)

scene.add(directLight)

// 添加GUI图像用户界面
const gui = new dat.GUI()
gui
  .add(directLight.shadow.camera, 'near')
  .min(0)
  .max(20)
  .step(0.1)
  .onChange(() => {
    // 更新投影矩阵
    directLight.shadow.camera.updateProjectionMatrix()
  })

const materia = new THREE.MeshStandardMaterial({})

// 添加平面
const planeGeo = new THREE.PlaneGeometry(10, 10)
const plane = new THREE.Mesh(planeGeo, materia)
plane.position.set(0, -1, 0)
plane.rotation.x = - Math.PI / 2
// 设置接受阴影 ***
plane.receiveShadow = true
scene.add(plane)

// 添加物体
const sphere = new THREE.SphereGeometry(1, 20, 20)
const context = new THREE.Mesh(sphere, materia)
// 投射阴影 ***
context.castShadow = true
scene.add(context)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 设置渲染器开启阴影计算 ***
renderer.shadowMap.enabled = true

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

