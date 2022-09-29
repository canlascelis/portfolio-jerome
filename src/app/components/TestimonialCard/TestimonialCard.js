import React from 'react'
import { useState, useEffect } from 'react';
import './testimonialCard.scss';
import axios from 'axios';
import jDoeImg from '../../../assets/images/img1.jpg';

const TestimonialCard = () => {
    const abortController = new AbortController();
    useEffect(() => {
        setTimeout(() => {
            getTestimonials();
        }, 900)
        return() => {
            abortController.abort()
        }
    }, []);

    const [loading, setLoading] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledPrev, setDisabledPrev] = useState(false);
    const [testimonials, setTestimonial] = useState([]);
    const [current, setCurrent] = useState(0);

    const getTestimonials = async () => {
        let URL = 'http://localhost/testimonials';
        await axios.get(URL, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmVyZXMiLCJpYXQiOjE2NTgyODg1MTB9.dU_7u7oxM_94RjfGcTHfv0n-VvjrQ5RnwQletJBzLb4',
            }
        })
            .then((res) => {
                setTestimonial(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
    };

    function next() {
        setCurrent(prevCurrent => prevCurrent + 1);
        checkPage();
        //disableBtn();
    };

    //FIXME: prev not working
    function previous() {
        setCurrent(prevCount => prevCount - 1);
        checkPage();
        //disableBtn();
    };

    function checkPage() {
        if (current === testimonials.length)
            setCurrent(0);
    }

    function disableBtn() {
        if (current >= testimonials.length - 2) {
            //console.log('equal to max length')
            setDisabledNext(true)
            setDisabledPrev(false)
        } else if (current <= 0) {
            ///console.log('lower or equal to zero')
            setDisabledNext(false);
            setDisabledPrev(true);
        } else {
            setDisabledNext(false)
            setDisabledPrev(false)
        }
    }

    return (
        <section className='card mb-5 testimonial-card'>
            <h3 className='card-header'>Testimonials</h3>
            <div className='media row p-4'>
                <img srcSet={jDoeImg} alt="John Doe" className="align-self-center card-avatar col-lg-2" />
                <div className="media-body col-lg-10">
                    <blockquote className='blockqoute'>
                        <p>{loading ? 'Loading...' : testimonials[current].testimonial_description}</p>
                        <cite className='blockqoute-footer'>{loading ? 'Loading..' : testimonials[current].testimonial_name}</cite>
                    </blockquote>
                </div>
            </div>
            <div className='card-footer'>
                <div className='row justify-content-center gap-4'>
                    <button className='btn btn-primary col-2' disabled={disabledPrev} onClick={previous}>Previous</button>
                    <button className='btn btn-primary col-2' disabled={disabledNext} onClick={next}>Next</button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialCard;