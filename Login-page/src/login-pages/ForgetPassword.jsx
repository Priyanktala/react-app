import { useRef } from "react";
import { Link } from "react-router-dom";

function Forgetpassword() {

    let email = useRef();


    const submit = () => {
    }

    return (

        <div class="container d-flex justify-content-center align-items-center min-vh-100">


            <div class=" border rounded-5 p-3 bg-white shadow" style={{ maxWidth: "500px" }}>

                <div class="right-box">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Forget Password</h2>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" ref={email} />
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-primary w-100 fs-6" onClick={submit} >Change Password</button>
                        </div>
                        <div class="row">
                            <small>Remembered old password!! <Link to={'/'}>&nbsp;Sign in</Link></small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forgetpassword;
