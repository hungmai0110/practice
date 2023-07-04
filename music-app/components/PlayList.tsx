"use client";
import React, { useState } from "react";
import { listSongs } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setSongName } from "@/slices/authSlice";

const PlayList = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(Number);

  const handleChooseSong = (song: any, songId: number) => {
    setIsActive(songId);
    dispatch(setSongName(song.name));
  };

  return (
    <div className="playlist">
      {listSongs.map((song, songId) => (
        <div
          key={songId}
          className={`song ${isActive === songId ? "active" : ""}`}
          onClick={() => handleChooseSong(song, songId)}
        >
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
