import React from "react";
import { withFavoritesContext } from "./Favorites";
import Loading from "./Loading";
import Idle from "./Idle";
import Error from "./Error";

function FavoritesList({ favorites, idle, loading, err, handleChecked, deleteFavorites }) {
  const favElements = favorites.map(favorite => (
      <li>
      <input
          className="check-box"
          onChange={handleChecked}
          value={favorite.selected}
          type="checkbox"
        />
        <a
        target="_blank"
        href={`http://www.songsterr.com/a/wa/song?id=${favorite.songId}`}
        key={favorite._id}
        >
        {favorite.title} - {favorite.artist}
        </a>
    </li>
  ));
  return (


    <Idle idle={idle}>
      <Loading loading={loading}>
        <Error err={err}>
          <div className="favorites-wrapper">
            <div  className="delete-button">
              <button onChange={deleteFavorites}>-Delete-</button>
          </div>
          <ul>{favElements}</ul>
          </div>
        </Error>
      </Loading>
    </Idle>
  );
}

export default withFavoritesContext(FavoritesList);
