import React, { FunctionComponent } from "react";
import ReactPlayer from "react-player/lazy";
interface Props {
  vid_url?: any;
}
const VideoPlayer: FunctionComponent<Props> = ({ vid_url }) => {
  return (
    <ReactPlayer
      width={"100%"}
      height={"100%"}
      url={vid_url}
      // loop={true}
      playing={true}
      config={{
        vimeo: {
          playerOptions: {
            // title: true,
            // byline: true,
            // portrait: true,
            quality: "auto",
          },
        },
      }}
    />
  );
};

export default VideoPlayer;
