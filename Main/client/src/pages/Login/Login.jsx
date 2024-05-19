import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { loginAuth } from "../../utils/api/auth.api";
import "./style.css";
import "remixicon/fonts/remixicon.css";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  const handleSignUp = () => {
    console.log("Backkkkk");
    navigate(-1); // Navigate back to the previous page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginAuth({ email: auth.email, password: auth.password }, dispatch);
  };
  return (
    <>
      <div class="container">
        <div class="login">
          <div class="login__content">
            <img
              class="login__img"
              src="https://res.cloudinary.com/da80yict4/image/upload/v1710745297/ajaslwff6ho2rntlbyqa.jpg"
            />

            <form class="login__form" onSubmit={handleLogin}>
              <div>
                <h1 class="login__title">
                  <span>Welcome</span> Back
                </h1>

                <p class="login__description">
                  Welcome! Please login to continue.
                </p>
              </div>

              <div>
                <div class="login__inputs">
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
                    <label for="password" className="login__label">
                      Password
                    </label>
                    <div class="login__box">
                      <input
                        className="login__input"
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
                        minLength={3}
                      />
                      <i
                        className={`ri-eye-${
                          showPassword ? "line" : "off-line"
                        } login__eye`}
                        onClick={togglePasswordVisibility}
                        id="input-icon"></i>
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
                <div class="login__buttons" type="submit">
                  <button class="login__button"  type="submit">Log In</button>
                  
                  <button class="login__button login__button-ghost" type="button" onClick={handleSignUp}>
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
    </>
  );
};

export default Login;
