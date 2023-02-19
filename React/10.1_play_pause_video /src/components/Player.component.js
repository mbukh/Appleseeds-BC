import { useRef } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";

function Player() {
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
        toggleFullscreen,
    } = useVideoPlayer(videoElement);

    return (
        <div className="container">
            <div className="video-wrapper">
                <video
                    width="100%"
                    height="100%"
                    controls={false}
                    ref={videoElement}
                    onTimeUpdate={handleOnTimeUpdate}
                >
                    <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4"
                    />
                </video>

                <div className="controls">
                    <div className="actions">
                        <button onClick={togglePlay}>
                            {!playerState.isPlaying ? (
                                <box-icon name="play">play</box-icon>
                            ) : (
                                <box-icon name="pause">pause</box-icon>
                            )}
                        </button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={playerState.progress}
                        onChange={handleVideoProgress}
                    />
                    <select
                        className="velocity"
                        value={playerState.speed}
                        onChange={handleVideoSpeed}
                    >
                        <option value="0.50">0.50x</option>
                        <option value="1">1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="2">2x</option>
                    </select>
                    <button className="mute-btn" onClick={toggleMute}>
                        {!playerState.isMuted ? (
                            <box-icon name="volume-full">unmute</box-icon>
                        ) : (
                            <box-icon name="volume-mute">mute</box-icon>
                        )}
                    </button>
                    <button
                        className="fullscreen-btn"
                        onClick={toggleFullscreen}
                    >
                        {!playerState.isFullscreen ? (
                            <box-icon name="fullscreen">fullscreen</box-icon>
                        ) : (
                            <box-icon name="exit-fullscreen">
                                exit fullscreen
                            </box-icon>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Player;
