import { gql } from "@apollo/client";

// export const GET_TRACKS = gql`
//   query tracks($ids: String!) {
//     tracks(ids: $ids) {
//       id
//       album {
//         id
//         name
//       }
//       name
//     }
//   }
// `;
// export const ME = gql`
//   query me {
//     me {
//       id
//       display_name
//       country
//       email
//     }
//   }
// `;
// export const ALL_FILMS = gql`
//   query allFilms {
//     allFilms {
//       films {
//         title
//         episodeID
//       }
//     }
//   }
// `;
// export const LAUNCHES = gql`
//   query {
//     launchesPast(limit: 10) {
//       mission_name
//       launch_date_local
//       launch_site {
//         site_name_long
//       }
//     }
//   }
// `;

// export const USERS = gql`
//   mutation insert_users($objects: [users_insert_input!]!) {
//     insert_users(objects: $objects) {
//       returning {
//         id
//         name
//         rocket
//       }
//     }
//   }
// `;
// export const DELETEUSER = gql`
// mutation `;

// export const USERS = gql`
//   mutation insert_users($id: String!, $name: String!, $rocket: String!) {
//     insert_users(id: $id, name: $name, rocket: $rocket) {
//       id
//       name
//       rocket
//     }
//   }
// `;
// export const USERSHOW = gql`
//   query {
//     users(limit: 10) {
//       id
//       name
//       rocket
//     }
//   }
// `;
export const CUSTOMERS = gql`
  query customers {
    customers {
      id
      frstname
      lastname
    }
  }
`;
