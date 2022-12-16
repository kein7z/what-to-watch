import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProgressBar } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmIdAction } from '../../store/api-actions';
import { getFilm, getFilmLoadingStatus } from '../../store/film-process/selectors';
import { formattingLastTime } from '../../utils';
import LoadingScreen from '../loading-screen/loading-screen';

const PlayerScreen = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState<number>();
  const [progress, setProgress] = useState(ProgressBar.Start);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const filmLoading = useAppSelector(getFilmLoadingStatus);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const filmId = Number(id);
    dispatch(fetchFilmIdAction(Number(filmId)));
  }, [dispatch, id]);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo === null) {
      return;
    }

    if (isVideoPlaying) {
      currentVideo.play();
    } else {
      currentVideo.pause();
    }
  });

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * ProgressBar.End;
      setProgress(currentProgress);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handlePauseAndPlayButtonChange = (play: boolean) => {
    if (play) {
      return (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      );
    } else {
      return (
        <>
          <svg viewBox="0 0 19 19" width={19} height={19}>
            <use xlinkHref="#play-s" />
          </svg>
          <span>Play</span>
        </>
      );
    }
  };

  const playFilm = handlePauseAndPlayButtonChange(isVideoPlaying);

  if (filmLoading) {
    return (
      <LoadingScreen />
    );
  }

  const handleClickExit = () => {
    navigate(-1);
    setIsVideoPlaying(false);

  };

  const formatLastTime = formattingLastTime(timeLeft);

  const toggleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster="img/player-poster.jpg"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onDoubleClick={() => toggleFullscreen}
      />
      <button type="button" className="player__exit" onClick={handleClickExit}>
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: `${progress}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatLastTime}</div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={() => isVideoPlaying ? setIsVideoPlaying(!isVideoPlaying) : setIsVideoPlaying(!isVideoPlaying)}
          >
            {playFilm}
          </button>
          <div className="player__name"></div>
          <button
            type="button"
            className="player__full-screen"
            onClick={() => videoRef.current?.requestFullscreen()}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );
};

export default PlayerScreen;
