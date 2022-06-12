import async from "hbs/lib/async";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";



export default function SignUp() {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    email: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (event) => {
    event.preventDefault();
    const { email, password, cpassword } = user;

    const res = await fetch("/signUP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password, cpassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Credentials")
      console.log("galat")
    }
    else {
      window.alert("Registration Successful")
      console.log("galat")
      navigate("/home")
    }
  }
  return (
    <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div class="container py-6 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center">
                      <h4 class="mt-1 mb-5 pb-1"><b>VReqSL</b></h4>
                    </div>

                    <form method="POST">
                      <p style={{ fontSize: "150%", color: "#bdbdbd" }}>Create Account</p>

                      <div class="form-outline mb-4">

                        <input type="email" id="form2Example11" class="form-control" placeholder="Email" name="email"
                          value={user.email}
                          onChange={handleInputs} />

                      </div>



                      <div class="form-outline mb-4">

                        <input type="password" id="form2Example13" class="form-control" placeholder="Password" name="password"
                          value={user.password}
                          onChange={handleInputs} />

                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example14" class="form-control" placeholder="Confirm Password" name="cpassword"
                          value={user.cpassword}
                          onChange={handleInputs} />

                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">

                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={PostData}>Sign Up</button>

                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Already have an account!</p>

                        <NavLink to="/">
                          <button type="submit" class="btn btn-outline-danger" style={{ marginLeft: "1rem" }}>Sign In</button>
                        </NavLink>

                      </div>

                    </form>

                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">We are more than just a company</h4>
                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}