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

// 导入纹理
const textureLoader = new THREE.TextureLoader(loadingManager) // 被纹理管理器管理
const cubeTextureLoader = new THREE.CubeTextureLoader()

const picTexture = textureLoader.load('./imgs/R.png')

// 单张纹理具有加载完成，加载进度和错误钩子
const pic2Texture = textureLoader.load('./imgs/baw.jpg',
  // (e) => {
  //   console.log('纹理图片加载完成')
  // },
  // () => {
  //   console.log('纹理图片加载进度')
  // },
  // () => {
  //   console.log('纹理图片加载错误')
  // }
)

const envTexture = cubeTextureLoader.load([
  './imgs/env.jpg', './imgs/env.jpg', './imgs/env.jpg', './imgs/env.jpg', './imgs/env.jpg', './imgs/env.jpg'
])


// 创建几何体
const cubeGeo = new THREE.BoxGeometry(2, 2, 2, 50, 50, 50)
// 材质
const material = new THREE.MeshStandardMaterial({
  color: '#ffff00',
  map: picTexture,
  transparent: true,
  // metalness: 0.5, // 金属度（越大越黑）
  // metalnessMap: pic2Texture, // 金属贴图，控制金属感
  // roughness: 0.5, // 材质的粗糙程度 0是完全镜面反射，1是完全漫反射
  // roughnessMap: pic2Texture, // 粗糙度贴图, 控制粗糙程度
  // displacementMap: pic2Texture, // 位移贴图，设置凹凸，需要有多个顶点
  // displacementScale: 0.05, // 设置突出程度
  /**
   * 还有法线贴图normalMap，用于用于创建法线贴图的纹理。RGB值会影响每个像素片段的曲面法线，并更改颜色照亮的方式。法线贴图不会改变曲面的实际形状，只会改变光照
   */
})
const cube = new THREE.Mesh(cubeGeo, material)
scene.add(cube)

// 创造球体
const sphereGeo = new THREE.SphereGeometry(1, 20, 20)
const sphereMateria = new THREE.MeshStandardMaterial({
  metalness: 0.7,
  roughness: 0.1,
  envMap: envTexture, // 环境贴图
})
const sphere = new THREE.Mesh(sphereGeo, sphereMateria)
sphere.position.set(3, 0, 0)
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

