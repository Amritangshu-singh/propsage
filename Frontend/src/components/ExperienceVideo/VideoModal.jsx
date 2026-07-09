function VideoModal({ close }) {

  return (

    <div className="video-modal">

      <button
        className="close-video"
        onClick={close}
      >
        ✕
      </button>

      <video
        controls
        autoPlay
      >

        <source
          src="/videos/posch.mp4"
          type="video/mp4"
        />

      </video>

    </div>

  );

}

export default VideoModal;