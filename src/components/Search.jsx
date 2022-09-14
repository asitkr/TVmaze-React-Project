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
                        <div className="col-md-8 fs-5 mb-2">
                            <input type="radio" name="movie" onChange={() => setActorFilter()} /> <strong className='text-white'>by actor</strong>
                            <input type="radio" name="movie" className='ms-3' onChange={() => setShowFilter()} /> <strong className='text-white'>by show</strong>
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