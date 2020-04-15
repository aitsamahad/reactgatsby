import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quam officia ad voluptatibus necessitatibus, sit aliquid natus deserunt odit asperiores magni, eius ipsam vel dolorum est consequatur similique pariatur tempore sapiente. At dicta et, dolores eligendi earum sunt laudantium veritatis itaque fugiat facere. Placeat eveniet cum, sapiente dolor deleniti, rerum distinctio, quaerat error aut unde natus aspernatur provident dolorem doloremque.
                        </p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">
                                { heading }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
