import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageNotFound from "../assets/image-not-found.png";
import Footer from "./Footer";
import NotFound from "./NotFound";

function Show() {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState([]);

  const handleShowInput = (e) => {
    setInput(e.target.value);
  };

  const getshowData = () => {
    const url = `https://api.tvmaze.com/search/shows?q=${input}`;
    axios.get(url).then((res) => setShowData(res.data));
  };

  useEffect(() => {
    getshowData();
  }, [input]);

  return (
    <>
      <section className="mt-2 show-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control input-show mt-3 mb-3"
                value={input}
                onChange={handleShowInput}
                placeholder="Search by show name..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <div className="row">
          {showData && showData.length > 0
            ? showData &&
              showData.map((item) => {
                const regex = /(<([^>]+)>)/gi;
                let image = item.show.image;

                return image ? (
                  <div className="col-md-4 mb-3" key={item.show.id}>
                    <div className="card">
                      <h5 className="text-danger text-center mt-2 mb-2">
                        {item.show.name}
                      </h5>
                      <a href={item.show.url} target="_blank">
                        {item.show.image ? (
                          <img
                            src={item.show.image.medium}
                            style={{ width: "100%" }}
                            alt={
                              item.show.name != null
                                ? item.show.name
                                : "Not found"
                            }
                          />
                        ) : (
                          ""
                        )}
                      </a>
                      <div className="card-body">
                        <p
                          className="card-text overflow-hidden"
                          style={{ height: "90px" }}
                        >
                          {item.show.summary !== null
                            ? item.show.summary.replace(regex, "")
                            : ""}
                        </p>
                        <span>
                          <i
                            className="fa fa-star text-success me-2"
                            aria-hidden="true"
                          ></i>
                          {item.show.rating.average}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })
            : <NotFound />}
        </div>
      </section>
      {showData.length ? <Footer /> : ""}
    </>
  );
}

export default Show;
