import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import Img from 'gatsby-image'

const getCaty = items => {
    // Maping all of the categories
    let holdItems = items.map(item => {
        return item.node.category
    })
    // Holding all of the categories and seting them unique values.
    let holdCategories = new Set(holdItems)
    // Making array of holdCategoreis
    let categories = Array.from(holdCategories)
    
    categories = ['all', ...categories]

    return categories
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            myCourses: props.courses.edges,
            myCategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepitsafe = [...this.state.courses]
        if (category === 'all') {
            this.setState(() => {
                return {
                    myCourses: keepitsafe
                }
            })
        } else {
            let categorizedCourses = keepitsafe.filter(({node}) => node.category === category)
            this.setState(() => {
                return { myCourses: categorizedCourses }
            })
        }
    }

    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <Heading title="Courses" />
                    <div className="row my-3">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.myCategories.map((category, index) => {
                                    return (
                                    <button type="button" key={index} className="btn btn-info m-3 px-3" onClick={() => {
                                        this.catyClicked(category)
                                    }} >{category}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                         {/* Data is coming as Element.node.etc
                         To drill it down we can use {node} to start from there */}
                        {this.state.myCourses.map(({node}) => {
                            return(
                                <div key={node.id} className="col-11 col-md-6 d-flex mx-auto mb-4">
                                    <Img fixed={node.image.fixed} />
                                    <div className="flex-grow-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 text-success">PKR {node.price}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description.description}</small>
                                        </p>
                                        <button 
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="https://dreamy-sammet-4d059f.netlify.com"
                                        data-item-image={node.image.fixed.src}
                                        className="btn btn-warning snipcart-add-item">Join Now!</button>
                                    </div>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </section>
        )
    }
}
