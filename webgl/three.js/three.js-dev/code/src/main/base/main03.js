import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

//修改物体位置
cube.position.set(5,0,0)

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
// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

function render() {
  cube.position.x += 0.01
  if(cube.position.x > 5) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()