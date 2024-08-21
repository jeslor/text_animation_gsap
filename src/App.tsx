

import AnimatedText from './components/animatedText'
import styles from './App.module.css';

function App() {

  return (
    <div className={`flex flex-col items-center justify-center h-screen w-screen bg-black relative ${styles.main}`}>
      <div className={`${styles.myGradient} absolute z-[1] h-full w-full`}></div>
      <video autoPlay muted loop className='h-full w-full object-cover'>
        <source src="/videos/myVideo.webm" type="video/webm"/>
        Your browser does not support the video tag.
      </video>
     <div className="absolute z-[2]">
        <AnimatedText />
     </div>
    </div>

  )
}

export default App
