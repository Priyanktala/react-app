import { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {

    let email = useRef();
    let pass = useRef();
    let confirmpass = useRef();


    const submit = () => {
        if (pass.current.value === "" && confirmpass.current.value === "")
        {
            alert( 'pls fill out all fields' );
        }
        else if (pass.current.value === confirmpass.current.value) 
        {
            alert('Signed up successfully!');
        }
        else{
            alert( 'password does not match!' )
        }
        email.current.value = "";
        confirmpass.current.value = "";
        pass.current.value = "";
    }

    return (

        <div class="container d-flex justify-content-center align-items-center min-vh-100">


            <div class="row border rounded-5 p-3 bg-white shadow box-area">


                <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
                    <div class="featured-image mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/256/4861/4861722.png" class="img-fluid" style={{ width: "250px" }} />
                    </div>
                    <p class="text-white fs-2" style={{ fontfamily: 'Courier New', fontWeight: "600" }}>Be Verified</p>
                    <small class="text-white text-wrap text-center" style={{ width: "17rem", fontFamily: 'Courier New' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                </div>

                <div class="col-md-6 right-box">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Welcome</h2>
                            <p>we're glad you came here</p>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control form-control-lg bg-dark fs-6" placeholder="Email address" ref={email} />
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control form-control-lg bg-dark fs-6" placeholder="Set Password" ref={pass} />
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control form-control-lg bg-dark fs-6" placeholder="Confirm Password" ref={confirmpass} />
                        </div>
                        <div class="input-group mb-4 d-flex justify-content-between">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="formCheck" />
                                <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <button class="btn btn-lg btn-primary w-100 fs-6" onClick={submit} >Sign up</button>
                        </div>
                        <div class="input-group mb-3">       
                            <button class="btn btn-lg btn-light w-100 fs-6"><img src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png" style={{ width: "20px" }} class="me-2" /><small>&nbsp; Sign up with Google</small></button>
                        </div>
                        <div class="row">
                            <small>i already have an account <Link to={"/"}>&nbsp;Sign in</Link></small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;
