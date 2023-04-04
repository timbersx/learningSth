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

// 加载hdr环境图
const rgbaLoader = new RGBELoader()
rgbaLoader.loadAsync('./imgs/envt.hdr').then((texture) => {
  // 设置经纬度贴图映射
  texture.mapping = THREE.EquirectangularRefractionMapping
  scene.background = texture
  scene.environment = texture
})

// 设置加载管理器
const loadingManager = new THREE.LoadingManager(
  (e) => {
    console.log('纹理图片加载完成', e)
  },
  (url, num, total) => {
    console.log('纹理图片加载进度', url, num, total)
  },
  (e) => {
    console.log('纹理图片加载错误', e)
  }
)

// 创造球体
const sphereGeo = new THREE.SphereGeometry(1, 20, 20)
const sphereMateria = new THREE.MeshStandardMaterial({
  metalness: 0.7,
  roughness: 0.1,
})
const sphere = new THREE.Mesh(sphereGeo, sphereMateria)
scene.add(sphere)

// 灯光
const light = new THREE.AmbientLight(0xffffff, 0.5) // 环境光
scene.add(light)
const directLight = new THREE.DirectionalLight(0xffffff, 0.5) // 平行光
directLight.position.set(10, 10, 10) // 设置光的位置
scene.add(directLight)


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

