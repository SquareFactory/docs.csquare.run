import PropTypes from 'prop-types';
import * as React from 'react';
import { FunctionComponent } from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ src }) => (
  <video autoPlay={true} muted height={'100%'} loop width={'100%'}>
    <source src={src} type="video/webm" />
  </video>
);

VideoPlayer.propTypes = {
  src: PropTypes.string,
};

export default VideoPlayer;
