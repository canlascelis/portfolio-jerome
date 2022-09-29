import { useState, useEffect, useRef } from 'react';
import * as bootstrap from 'bootstrap';

const ToastAlert = (props) => {

    const { Toast } = bootstrap;
    const [toast, setToast] = useState(false);
    const toastRef = useRef();
    const abortController = new AbortController()

    useEffect(() => {
        let myToast = toastRef.current;
        let bsToast = bootstrap.Toast.getInstance(myToast);
        console.log(bsToast)

        if(!bsToast){
            bsToast = new Toast(myToast, {autohide: true});
            bsToast.hide()
            setToast(false)
        } else {
            toast ? bsToast.show() : bsToast.hide()
        }
        return () => {
            abortController.abort()
        }
    });

    return (
        <div className="toast" role="alert">
            <div className="toast-header">
                <img src={props.toastTitleLogo} alt="alert" />
                <strong>{props.title}</strong>
                <button type="button" className="m1-2 mb-1 close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="toast-body">{props.toastBody}</div>
        </div>
    );
}

export default ToastAlert;