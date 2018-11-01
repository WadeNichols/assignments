import React, { Component, createContext } from 'react'
import axios from "axios"


export const FavoritesContext = createContext();
const favoritesUrl = "/api/tabs"

export default class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            err: null,
            favorites: [],
            data: []
        }
    }

    _getFavoritesData(url) {
        return axios.get(url).then(response => response.data)
    }
    _handleFavoritesData() {
        return this._getFavoritesData(favoritesUrl)
            .then(favorites => (
                [
                   ...favorites
                ]
            ))
    }
    handleChecked(id) {
        return e => {
          this.setState(({ data }) => ({
            data: data.map(
              song => (song.id == id ? { ...song, selected: !song.selected } : song)
            )
          }));
        };
      }
    deleteFavorite() {
        const selectedSongs = this.state.data.filter(song => song.selected);
        const deletes = selectedSongs.map(song => {
          axios
            .delete(`/api/tabs/${song._id}`)
            .then(response => {
              console.log(response);
            })
            .catch(err => {
              console.log(err);
            });
        });
        Promise.all(deletes).then(response => console.log(response));
      }
 
    componentDidMount() {
        this._handleFavoritesData()
        .then(favorites => this.setState ({
            loading: false,
            err: null,
            favorites
        }))
        .catch(err => this.setState ({
            err
        }))
    }
    render() {
        const props = {
            ...this.state
        }
        return (
            <FavoritesContext.Provider value={props}>
                {this.props.children}
            </FavoritesContext.Provider>
        )
    }
}

export const withFavoritesContext = Comp => props => (
    <FavoritesContext.Consumer>
        {value => <Comp {...value} {...props} />}
    </FavoritesContext.Consumer>
)
