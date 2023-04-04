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

// 创建几何体
for (let i = 0; i < 50; i++) {
  const geoMetry = new THREE.BufferGeometry()
  const positionArr = new Float32Array(9)
  for (let j = 0; j < 9; j++) { // 每个三角形需要三个顶点值
    positionArr[j] = Math.random() * 10 - 5
  }
  // 设置顶点
  geoMetry.setAttribute('position', new THREE.BufferAttribute(positionArr, 3))
  let color = new THREE.Color(Math.random(), Math.random(), Math.random())
  // 材质
  const material = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity: 0.5
  })
  const mesh = new THREE.Mesh(geoMetry, material)
  scene.add(mesh)
}




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

