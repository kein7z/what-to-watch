import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export type RenderFilmsCardProps = {
  name: string,
  previewImage: string,
  id: number,
  previewVideoLink: string
}

const PLAYBACK_DELAY = 1000;

const RenderFilmsCard = ({ name, previewImage, id, previewVideoLink }: RenderFilmsCardProps) => {
  const [isPlayingVideo, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (!isPlayingVideo) {
      videoRef.current.load();
      return;
    }

    const currentVideoRef = videoRef.current;
    const timerID = setTimeout(() => {
      if (currentVideoRef === null) {
        return;
      }

      if (isPlayingVideo) {
        currentVideoRef.play();
      }

    }, PLAYBACK_DELAY);

    return () => {
      currentVideoRef.pause();
      clearTimeout(timerID);
      setIsPlaying(!isPlayingVideo);
    };
  });

  return (
    <article className="small-film-card catalog__films-card">
      <Link
        className="small-film-card__link"
        to={`/film/${id}`}
      >
        <video
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
          poster={previewImage}
          className="player__video"
          loop
          muted
          width={280}
          height={175}
          ref={videoRef}
          src={previewVideoLink}
        >
        </video>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article >
  );
};

export default RenderFilmsCard;
