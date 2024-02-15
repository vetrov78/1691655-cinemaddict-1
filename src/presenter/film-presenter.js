import { FilmPropertyRelation, ViewActions } from '../consts';
import { remove, render, replace } from '../framework/render';
import SiteFilmCardView from '../view/site-film-card/site-film-card-view';

export default class FilmPresenter {
  #filmListContainer = null;
  #film = null;

  #changeData = null;
  #openPopupCallback = null;

  #filmComponent = null;
  #popupComponent = null;

  #apiService = null;

  constructor ({ filmListContainer, openPopup, changeData, apiService }) {
    this.#filmListContainer = filmListContainer;
    this.#changeData = changeData;
    this.#apiService = apiService;
    this.#openPopupCallback = openPopup;
  }

  init(film) {
    this.#film = film;

    const prevFilmComponent = this.#filmComponent;

    this.#filmComponent = new SiteFilmCardView(film);

    this.#filmComponent.setPropertyClickHandler(this.#handleFilmPropertyClick);
    this.#filmComponent.setFilmCardClickHandler(this.#openPopupCallback);

    if (prevFilmComponent === null) {
      render(this.#filmComponent, this.#filmListContainer);
      return;
    }
    replace(this.#filmComponent, prevFilmComponent);
    remove(prevFilmComponent);
  }

  destroy = () => {
    remove(this.#filmComponent);
  };

  #handleDeleteComment = (comment) => {
    this.#changeData(ViewActions.DELETE_COMMENT, comment);
  };

  #handleFilmPropertyClick = (changingPropertyTarget) => {
    const changingProperty = FilmPropertyRelation[changingPropertyTarget.id];

    this.#film.userDetails[changingProperty] = !this.#film.userDetails[changingProperty];
    this.#changeData(ViewActions.FILM, { movie: this.#film, comments: [], });
  };
}
