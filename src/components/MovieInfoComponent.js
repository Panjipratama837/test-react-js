import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={movieInfo?.Poster}
                  className="img-fluid"
                  alt="cover"
                />
              </div>
              <div className="col-md">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h4>
                      {movieInfo?.Title} ({movieInfo?.Year})
                    </h4>
                  </li>
                  <li className="list-group-item">
                    <strong>Director : </strong> {movieInfo?.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors : </strong> {movieInfo?.Actors}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer : </strong> {movieInfo?.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Plot : </strong> {movieInfo?.Plot}
                  </li>
                  <li className="list-group-item">
                    <strong>Rating : </strong> {movieInfo?.imdbRating}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => props.onMovieSelect()}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              X
            </button>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfoComponent;
