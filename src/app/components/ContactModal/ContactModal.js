import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPhone, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import './contactModal.scss';

const ContactModal = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [contactForm, setContactForm] = useState([]);
    // TODO: clean contact form
    useEffect(() => {
        let { name, email, phone, message } = contactForm;
        // TODO: 
        console.log(contactForm === undefined);
        if (contactForm.length === 0) {
            setDisableSubmit(true)
        } else {
            setDisableSubmit(false)
        }

        return () => {
            //subscription.unsubscribe()
        }
    }, [contactForm])

    function sendEmail(formData, e) {
        e.preventDefault();
        const ReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));

        axios.post('https://jeres-api-pb.herokuapp.com/contact', formData)
            .then(() => {
                toast.promise(
                    ReturnPromise,
                    {
                        pending: 'Sending email',
                        success: 'Email sent',
                        error: 'Error occured while sending email'
                    })
                e.target.reset()
            })
            .catch(err => toast.error(err))
    }

    function handleInput(e) {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value })
    }

    return (
        <>
            <ToastContainer autoClose={1700} />
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={handleSubmit(sendEmail)}>
                        <div className="modal-header">
                            <h5 className="modal-title">CONTACT ME</h5>
                            <FontAwesomeIcon icon={faXmark} type="button" className="btn btn-primary-outline" data-bs-dismiss="modal" size={"2xl"} color={"red"} />
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                <input type="text" className={`form-control ${errors.name?.type === 'required' && 'is-invalid'}`}
                                    placeholder='Name' {...register("name", { required: true })}
                                    // TODO:
                                    onChange={handleInput} />
                                <span className="valid-feedback">Looks good!</span>
                                <span className="invalid-feedback">This field is required</span>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">@</span>
                                <input type="text" className={`form-control ${errors.email?.type === 'pattern' && 'is-invalid'}`}
                                    // TODO:
                                    onChange={handleInput}
                                    placeholder='Email'
                                    {...register("email", { required: true, pattern: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]/ })} />
                                <span className="invalid-feedback">This field is required and it must be an email address</span>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                                <input type="text" className="form-control" placeholder='Phone'
                                    name="phone" {...register("phone")}
                                    onChange={handleInput}
                                /* TODO: */ />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><FontAwesomeIcon icon={faBuilding} /></span>
                                <input type="text" className="form-control" placeholder='Company Name (optional)'
                                    name="company" {...register("company")}
                                    onChange={handleInput}
                                    /* TODO: */ />
                            </div>
                            <div className="input-group mb-3">
                                <textarea type="text" name="message" className="form-control"
                                    placeholder='Message' {...register("message")} onChange={handleInput} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type='submit' disabled={disableSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactModal;