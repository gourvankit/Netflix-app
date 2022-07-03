import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ReactPlayer from "react-player";
export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <ReactPlayer
        width="1450px"
        height="800px"
        playing={true}
        url="https://www.youtube.com/watch?v=bsPeNrOzzZ8"
        muted={true}
        controls={true}
      />
    </div>
  );
}
