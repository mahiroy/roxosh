import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';






 function Contact() {
    return (
        <div>
            <h3>Contact Details</h3>
            <hr/>

            <h4>Arya Raj</h4>
            <br/>

            <img src="assets/img/default.jpg" className=" rounded-circle" />

            <div className="col-md-12 "><button className="btn btn-warning w-100 p-3 b-shad mt-3"><CallIcon/>+919619641822</button></div>
            <div className="col-md-12"><button className="btn btn-success w-100 p-3 b-shad mt-3"><WhatsAppIcon/>Whatsapp</button></div>

        </div>
    )
}


export default Contact;
