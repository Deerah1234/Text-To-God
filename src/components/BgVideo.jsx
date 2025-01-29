import { BackgroundVideo } from ".";

const BgVideo = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10">
            <video
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={BackgroundVideo}
                autoPlay
                muted
                loop
            ></video>
        </div>
    );
};

export default BgVideo;
