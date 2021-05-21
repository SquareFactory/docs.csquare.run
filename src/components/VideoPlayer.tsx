import * as React from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({src}: VideoPlayerProps) => (
  <video autoPlay={true} muted height={"100%"} loop width={"100%"}>
    <source src={src} type="video/webm"/>
  </video>
)

export default VideoPlayer