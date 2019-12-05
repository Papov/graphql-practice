// @flow
import gql from 'graphql-tag';

export function getEpisodes() {
  return gql`
    query($page: Int = 1) {
      episodes(page: $page) {
        info {
          pages
          next
        }
        results {
          name
          id
          air_date
          episode
        }
      }
    }
  `;
}

export function getEpisode() {
  return gql`
    query($id: ID = 1) {
      episode(id: $id) {
        name
        episode
        air_date
        characters {
          name
          id
          image
          species
          location {
            name
            type
            dimension
            id
          }
        }
      }
    }
  `;
}
