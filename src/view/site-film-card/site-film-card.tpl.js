export const createFilmCard = (film) => {
  const { title, totalRating, duration, genre, description, poster } = film.filmInfo;
  const releaseYear = new Date(film.filmInfo.release.date).getFullYear();
  const userDetails = film.userDetails;

  return `<article class="film-card" title="click to open popup">
            <a class="film-card__link">
              <h3 class="film-card__title">${ title }</h3>
              <p class="film-card__rating">${ totalRating }</p>
              <p class="film-card__info">
                <span class="film-card__year">${ releaseYear }</span>
                <span class="film-card__duration">${ duration }</span>
                <span class="film-card__genre">${ genre[0] }</span>
              </p>
              <img src="${ poster }" alt="" class="film-card__poster">
              <p class="film-card__description">${ description }</p>
              <span class="film-card__comments">${ film.comments.length } comments</span>
            </a>
            <div class="film-card__controls">
              <button
                class="
                  film-card__controls-item
                  film-card__controls-item--add-to-watchlist
                  ${ userDetails.watchlist ? 'film-card__controls-item--active' : '' }
                "
                id="watchlist"
                type="button"
              >
                  Add to watchlist
              </button>
              <button
                class="
                  film-card__controls-item
                  film-card__controls-item--mark-as-watched
                  ${ userDetails.alreadyWatched ? 'film-card__controls-item--active' : '' }
                "
                id="watched"
                type="button"
              >
                Mark as watched
              </button>
              <button
                class="
                  film-card__controls-item
                  film-card__controls-item--favorite
                  ${ userDetails.favorite ? 'film-card__controls-item--active' : '' }
                "
                type="button"
                id="favorite"
              >
                Mark as favorite
              </button>
            </div>
          </article>`;
};
