import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading, src}) {
    return (
        <section className="my-5 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad officiis eius nam, maiores odio expedita ipsum nihil dolores aut? Blanditiis fuga, reiciendis ut odio quia, possimus molestiae itaque culpa nemo hic, iste pariatur minus. Culpa non soluta sit quasi minima error nam nulla tempora reprehenderit. Vero neque architecto velit sunt suscipit aut placeat, laudantium provident deserunt consequatur. Dolorum dolores nostrum dolore inventore repellendus quaerat fuga quisquam vel, ipsam consequatur tempore iste cupiditate quas odio voluptate eveniet provident rerum, excepturi magni beatae itaque molestiae ducimus hic nesciunt! Ea, odio. Dolorum quam, labore voluptatibus quas repellendus officia. Soluta molestiae eaque sint labore!
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src={src} className="card-img-top" alt="" />
                            <div className="card-body text-white">
                                <h5 className="card-title">Card Title</h5>
                                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
