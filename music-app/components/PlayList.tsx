import React from "react";
import { listSongs } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { url } from "inspector";

const PlayList = () => {
  return (
    <div className="playlist">
      {listSongs.map((song, index) => (
        <div className="song" key={index}>
          <div
            className="thumb"
            style={{ backgroundImage: `url(${song.image})` }}
          ></div>
          <div className="body">
            <h3 className="title">{song.name}</h3>
            <p className="author">{song.singer}</p>
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faEllipsisH} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayList;
