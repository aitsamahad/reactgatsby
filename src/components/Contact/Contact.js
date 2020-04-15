import React from 'react'
import Heading from '../Reuseable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/aitsama.ahad@gmail.com" method="POST">
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="abc@abc.com" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="mobile" id="mobile" placeholder="Your Mobile Number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="message" id="message" placeholder="Your Message" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>
            </div>
        </section>
    )
}
