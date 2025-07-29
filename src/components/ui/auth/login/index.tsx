/** @format */

import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import loginImage from "../../../../assets/login-img.png";
import "./style.scss";
import { Button, Input } from "../../..";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate(ROUTES.dashboard.users);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-container">
          <section className="left">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <img src={loginImage} alt="Illustration" className="img-banner" />
          </section>
        </div>
        <div className="right">
          <section className="right-content">
            <section className="img">
              <h2 className="light-blue">Welcome!</h2>
              <p className=" desc">Enter details to login.</p>
            </section>
            <section className="form-container">
              <Input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Email"
              />
              <section className="password-input-wrapper">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="password-input"
                />
                <span
                  className="show-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </span>
                <p className="forget-password text-secondary">
                  Forgot password?
                </p>
              </section>

              <Button text="LOG IN" onClick={handleLogin} />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
