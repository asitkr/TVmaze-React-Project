import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NotFound from "./NotFound";

function Actor() {
  const [input, setInput] = useState("");
  const [actorData, setActorData] = useState([]);

  console.log(actorData);

  const handleActorInput = (e) => {
    setInput(e.target.value);
  };

  const getActorData = () => {
    const url = `https://api.tvmaze.com/search/people?q=${input}`;
    axios.get(url).then((res) => setActorData(res.data));
  };

  useEffect(() => {
    getActorData();
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
                onChange={handleActorInput}
                placeholder="Search by actor name..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <div className="row">
          { actorData && actorData.length > 0 ? (
            actorData &&
            actorData.map((item) => {
              let image = item.person.image;
              return (
              
                image ? (
                  <>
                    <div className="col-md-4 mb-3" key={item.person.id}>
                      <div className="card">
                        <h5 className="text-danger text-center mt-2 mb-2">
                          {item.person.name}
                        </h5>
                        <a href={item.person.url} target="_blank">
                          {item.person.image ? (
                            <img
                              src={item.person.image.medium}
                              style={{ width: "100%" }}
                              alt={
                                item.person.name != null
                                  ? item.person.name
                                  : "Not found"
                              }
                            />
                          ) : (
                            ""
                          )}
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )
                
              );
            })
          ) : (
            <NotFound />
          )}
        </div>
      </section>
      {actorData.length ? <Footer /> : ""}
    </>
  );
}

export default Actor;
