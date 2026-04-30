
import { Canvas } from '@react-three/fiber'
import './App.css'
import Dog from './components/Dog'

function App() {
  return (
    <>
    <main>
    <Canvas style={{
      height:"100vh", width:"100vw", position:"fixed",
      top:0, left:0, zIndex:1,
      backgroundImage: "url(/background-l.png)",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Dog />
      </Canvas>
      <section></section>
      <section></section>
      <section></section>
    </main>
    </>
  )
}

export default App
