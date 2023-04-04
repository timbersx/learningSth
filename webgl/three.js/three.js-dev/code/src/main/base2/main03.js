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

// 导入纹理
const textureLoader = new THREE.TextureLoader()
const picTexture = textureLoader.load('./imgs/R.png')
const pic2Texture = textureLoader.load('./imgs/baw.jpg')

// 创建几何体
const cubeGeo = new THREE.BoxGeometry(2, 2, 2)
// 设置第二组uv 环境遮挡贴图可以让3d物体更有立体感
cubeGeo.setAttribute('uv2', new THREE.BufferAttribute(cubeGeo.attributes.uv.array, 2))
// 材质
const material = new THREE.MeshBasicMaterial({
  map: picTexture
})
const material2 = new THREE.MeshBasicMaterial({
  map: picTexture,
  aoMap: pic2Texture, // 环境遮挡贴图
  aoMapIntensity: 0.3
})
const cube = new THREE.Mesh(cubeGeo, material)
const cube2 = new THREE.Mesh(cubeGeo, material2)
scene.add(cube)
scene.add(cube2)

cube2.position.set(3, 0)

// 添加平面,第二组uv
const planeGeo = new THREE.PlaneGeometry(1, 1)
planeGeo.setAttribute('uv2', new THREE.BufferAttribute(planeGeo.attributes.uv.array, 2))
const plane = new THREE.Mesh(planeGeo, material2)
plane.position.set(6, 0)
scene.add(plane)

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

