import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageNotFound from "../assets/image-not-found.png";
import Footer from "./Footer";

function Show() {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState([]);
  const [showFooter, setShowFooter] = useState(true);

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
          {showData.length > 0 &&
            showData.map((item) => {
              const regex = /(<([^>]+)>)/ig;

              return (
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
                        <div>
                          <img
                            src={ImageNotFound}
                            style={{ width: "100%", height: "485px" }}
                            alt={item.show.name}
                          />
                        </div>
                      )}
                    </a>

                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "90px" }}
                      >
                        {item.show.summary !== null ? item.show.summary.replace(regex,'') : ''}
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
              );
            })}
        </div>
      </section>
      {showData.length ? <Footer /> : ""}
    </>
  );
}

export default Show;
