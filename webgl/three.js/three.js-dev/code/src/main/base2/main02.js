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
// const pic2Texture = textureLoader.load('./imgs/R.png')
console.log(textureLoader)

// 设置纹理偏移
// picTexture.offset.x = 0.5
// picTexture.offset.y = 0.5
// 设置纹理中心原点
// picTexture.center.set(0.5, 0.5)
// 设置纹理旋转
// picTexture.rotation = Math.PI / 4
// 设置纹理重复
// picTexture.repeat.set(2, 3)
// 纹理会默认将被推到外部边缘， 设置重复的纹理模式
// picTexture.wrapS = THREE.RepeatWrapping
// picTexture.wrapT = THREE.MirroredRepeatWrapping
// 纹理插值算法的模式
// pic2Texture.minFilter = THREE.NearestFilter
// pic2Texture.magFilter = THREE.NearestFilter
// 透明纹理
const pic2Texture = textureLoader.load('./imgs/baw.jpg')

// 创建几何体
const cubeGeo = new THREE.BoxGeometry(2, 2, 2)
// 材质
const material = new THREE.MeshBasicMaterial({
  color: '#ffff00',
  map: picTexture
})
const material2 = new THREE.MeshBasicMaterial({
  map: picTexture,
  alphaMap: pic2Texture,
  transparent: true, // 设置允许透明
  side: THREE.DoubleSide
})
const cube = new THREE.Mesh(cubeGeo, material)
const cube2 = new THREE.Mesh(cubeGeo, material2)
scene.add(cube)
scene.add(cube2)

cube2.position.set(3, 0)

// 添加平面
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  material2,

)
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

