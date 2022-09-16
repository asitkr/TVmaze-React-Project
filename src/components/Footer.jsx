import React from 'react'

function Footer() {
  return (
    <>
        <section className='container-fluid mt-3 mb-3 text-white'>
            <div className="row">
                <div className="col-md-12 text-center" style={{fontWeight: '500', fontSize: '20px'}}>
                    Designed and Develop by <a href="#" style={{textDecoration: "none"}}><strong>Ashit</strong></a>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            TVmaze<i className="fa-sharp fa-solid fa-copyright ms-2 me-2"></i>2022 all rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer