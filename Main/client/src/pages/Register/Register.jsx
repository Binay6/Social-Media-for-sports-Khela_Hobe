import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../../utils/api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (auth.confirmPassword !== auth.password) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await registerUser({
          username: auth.username,
          email: auth.email,
          password: auth.password,
        });
        toast.success(res.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="signup">
      <div class="container">
        <div class="login">
          <div class="login__content">
            <img
              class="login__img"
              src="https://res.cloudinary.com/da80yict4/image/upload/v1710745297/ajaslwff6ho2rntlbyqa.jpg"
            />

            <form class="login__form" onSubmit={handleRegister}>
              <div>
                <h1 class="login__title">
                  <span>Welcome</span> Back
                </h1>

                <p class="login__description">Welcome! Sign Up Here</p>
              </div>

              <div>
                <div class="login__inputs">
                  <div>
                    <label for="username" class="login__label">
                      Username
                    </label>
                    <input
                      class="login__input"
                      type="username"
                      id="username"
                      placeholder="User Name"
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          username: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label for="email" class="login__label">
                      Email
                    </label>
                    <input
                      class="login__input"
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      onChange={(e) => {
                        setAuth({
                          ...auth,
                          email: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label for="password" class="login__label">
                      Password
                    </label>
                    <div class="login__box">
                      <input
                        class="login__input"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          setAuth({
                            ...auth,
                            password: e.target.value,
                          });
                        }}
                        required
                      />
                      <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                    </div>
                  </div>

                  <div>
                    <label for="password" class="login__label">
                      Confirm Password
                    </label>
                    <div class="login__box">
                      <input
                        class="login__input"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Confirm password "
                        onChange={(e) => {
                          setAuth({
                            ...auth,
                            confirmPassword: e.target.value,
                          });
                        }}
                        required
                      />
                      <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                    </div>
                  </div>
                </div>

                <div class="login__check">
                  <label class="login__check-label" for="check">
                    <input
                      class="login__check-input"
                      type="checkbox"
                      id="check"
                    />
                    <i class="ri-check-line login__check-icon"></i>
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <div class="login__buttons" >
                  <div
                    class="signup__button "
                    // onClick={}
                  >
                    <Link to={"/login"}>Log In</Link>
                  </div>

                  <button class="signup__button signup__button-ghost" type="submit">
                    Sign Up
                  </button>
                </div>

                <a class="login__forgot" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
