import { useRef } from 'react';
import  Video from './Video';


function App79() {

    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }


    return (
        <div style={{
                    display: 'flex', 
                    flexDirection: 'column'
                    }}>
            <Video ref={videoRef}/>
            <button onClick={handlePlay} style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                maxWidth: 50}}>Play</button>

            <button onClick={handlePause} style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                maxWidth: 50}}>Pause</button>
        </div>
    )
};

export default App79;
