import React, { useState } from 'react';
import Actor from './Actor';
import Show from './Show';

function Search() {
    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setActor(true);
        setShow(false);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
    }

    return (
        <>
            <section className='mt-2 mb-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 fs-5 mb-2 d-flex">
                            <div className="form-check">
                                <input type="radio" className='form-check-input curr' name="movie" id='actor' onChange={() => setActorFilter()} /> 
                                <label htmlFor='actor' className='form-check-label curr fw-bold text-white'>by actor</label>
                            </div>
                            <div className="form-check ms-3 curr">
                                <input type="radio" className='form-check-input curr' name="movie" id='show' onChange={() => setShowFilter()} />
                                <label htmlFor="show" className='form-check-label curr fw-bold text-white'>by show</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {show ? <Show /> : ""}
            {actor ? <Actor /> : ""}
        </>
    )
}

export default Search;