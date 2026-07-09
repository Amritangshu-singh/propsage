import { useState } from "react";
import "./ExperienceVideo.css";
import VideoModal from "./VideoModal";

function ExperienceVideo() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="experience-video" id="experience">

        <div className="video-heading">

          <span>EXPERIENCE POSCH</span>

          <h2>
            Discover Every Detail
            <br />
            Before You Visit
          </h2>

          <p>
            Take a cinematic walkthrough of POSCH and
            experience the luxury before stepping inside.
          </p>

        </div>

        <div
          className="video-poster"
          onClick={() => setOpen(true)}
        >

          <img
            src="/videos/poster.jpg"
            alt="POSCH Walkthrough"
          />

          <div className="poster-overlay">

            <div className="play-btn">
              ▶
            </div>

            <h3>Watch Luxury Walkthrough</h3>

          </div>

        </div>

      </section>

      {open && <VideoModal close={() => setOpen(false)} />}

    </>
  );
}

export default ExperienceVideo;