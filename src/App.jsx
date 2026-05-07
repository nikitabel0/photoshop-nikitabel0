import { useRef, useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Canvas from './components/Canvas/Canvas';
import StatusBar from './components/StatusBar/StatusBar';
import { useImageLoader } from './hooks/useImageLoader';
import styles from './App.module.css';

function App() {
  const canvasRef = useRef(null);
  const [imageInfo, setImageInfo] = useState({
    width: null,
    height: null,
    colorDepth: null,
  });

  const { loadImageFromUrl } = useImageLoader(canvasRef, setImageInfo);

  return (
    <div className={styles.app}>
      <Toolbar onFileLoad={loadImageFromUrl} />
      <Canvas ref={canvasRef} />
      <StatusBar
        width={imageInfo.width}
        height={imageInfo.height}
        colorDepth={imageInfo.colorDepth}
      />
    </div>
  );
}

export default App;