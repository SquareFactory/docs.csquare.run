import * as React from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({src}: VideoPlayerProps) => (
  <video autoPlay={true} muted height={"100%"} loop src={src} width={"100%"}/>
)

export default VideoPlayer