import { useImperativeHandle, forwardRef, useRef } from 'react';
import video1 from './videos/video-1.mp4';

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => (
        {
            play() {
                videoRef.current.play();
            },

            pause() {
                videoRef.current.pause();
            }
        }
    ));

    return (
        <div style={{
                marginRight: 'auto',
                marginLeft: 'auto',
                }}>
            <video 
                ref={videoRef} 
                width={280} 
                controls loop='loop'
                autoPlay='autoplay' 
                src={video1} 
            />
        </div>
    )
}

export default forwardRef(Video);