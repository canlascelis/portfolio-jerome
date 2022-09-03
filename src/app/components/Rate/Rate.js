import './rate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Me from '../../../assets/images/me.png';
import { getRatings, postRating } from '../../../api/rating.api';

export default function Rating() {
    const [currentValue, setCurrentValue] = useState(0);
    const [ratedInfo, setRatedInfo] = useState(null);
    const [hoverCount, setHoverCount] = useState(0);
    const [randomId, setRandomId] = useState(String);
    const [results, setResults] = useState([]);
    const [totalRated, setTotalRated] = useState(0);
    const stars = Array(5).fill(0);
    const colors = {
        filled: 'skyblue',
        unfilled: 'grey'
    }

    useEffect(() => {
        checkIfAlreadyRated()
        setRandomId(randomString())
        calculateRating()

        getRatings()
            .then(res => {
                setResults(res.data)
                setTotalRated(res.data.length)
            })
            .catch(err => toast.error(err))

    }, [currentValue])

    const handleClick = (value) => {
        if (checkIfAlreadyRated()) {
            toast.warning('You already rated!')
        } else {
            setCurrentValue(value);
            postRating(value, randomId)
                .then(() => {
                    localStorage.setItem('rating', randomId)
                    localStorage.setItem('rated', value)
                    setRatedInfo(value)
                    toast.info(`Thank you for your response`)
                })
                .catch(() => toast.error('Error occured'))
        }
    }

    const handleMouseEnter = (value) => {
        setHoverCount(value)
    }

    const handleMouseLeave = () => {
        setCurrentValue(0)
    }

    const checkIfAlreadyRated = () => {
        if (localStorage.getItem("rating")) return true;
        else return false;
    }

    const randomString = () => {
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let string = '';

        for (let i = 0; i < 6; i++) {
            string += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return string;
    }

    const starRate = stars.map((_, index) => {
        return (
            <FontAwesomeIcon icon={faStar} key={index} size={'lg'} color={(hoverCount || currentValue) > index ? colors.filled : colors.unfilled}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseEnter(index + 1)}
                onMouseLeave={() => handleMouseLeave}
                className="mx-1"
            />
        )
    });

    // https://stackoverflow.com/questions/10196579/algorithm-used-to-calculate-5-star-ratings
    // FORMULA: (5*252 + 4*124 + 3*40 + 2*29 + 1*33) / (252+124+40+29+33) = 4.11 and change 
    const calculateRating = () => {
        let stars = [];
        let total, leftParenthesis, leftParenthesisTotal,
            rightParenthesis, rightParenthesisTotal;

        try {
            results.forEach((results) => {
                stars.push(results.rate_count)
            })

            leftParenthesis = stars.map((item) => item * (item * 20)) //err
            leftParenthesisTotal = leftParenthesis.reduce((a, b) => a + b, 0)

            rightParenthesis = stars.map((item) => item * 20)
            rightParenthesisTotal = rightParenthesis.reduce((x, y) => x + y, 0)
            total = parseFloat(leftParenthesisTotal / rightParenthesisTotal).toFixed(1)
        }
        catch (error) {
            toast.error('Error getting results');
        }
        return isNaN(total) ? null : total;
    }

    return (
        <div className='card rate-card my-5 container shadow-sm'>
            <div className="card-body">
                <div className="row p-4 d-flex justify-content-center">
                    <div className="col-lg-4">
                        <img src={Me} alt="me" />
                    </div>
                    <div className="col-lg-8">
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                {calculateRating() === null ? <h3>No ratings yet</h3> : <h3><strong className='rating-total'>{calculateRating()}</strong>/5</h3>}
                                <p className='lead'>{totalRated} ratings</p>
                            </div>
                            <div className="col-lg-6 stars-group">
                                {ratedInfo !== null || localStorage.getItem('rated') !== null ? <h4 className='mb-2'>You rated for {ratedInfo || localStorage.getItem('rated')} stars </h4> : <h4 className='mb-2'>Rate My Portfolio</h4>}
                                {starRate}
                            </div>
                        </div>
                        <div>
                            <h2>Glad to help you</h2>
                            {/* <p className='lead'>As a developer, I can interact with future clients and work well with the team. </p> */}
                            <p className='lead'>As a developer, I can communicate with potential clients and collaborate well with the team. <a href="#" className='contact-link'>Contact me</a> if you want me to be a part of your team.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}