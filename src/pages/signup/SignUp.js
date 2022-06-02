import { React, useState } from "react";
import "./signup.css";
import "../login/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { usePlayList } from "../../contexts";
import { useAuth } from "../../contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  let navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const { playListDispatch } = usePlayList();
  const [type, setType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const doValidate = () => {
    if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        userData.email
      )
    ) {
      setError("Please enter a valid email address");
      return false;
    } else {
      setError("");
    }
    if (userData.password !== userData.confirmPassword) {
      setPasswordError("Password does not match!");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const onHandleSubmit = async (e) => {
    try {
      if (doValidate()) {
        e.preventDefault();
        const value = await axios.post("/api/auth/signup", userData);
        localStorage.setItem("token", value.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(userData));
        setUserData({
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
        });
        playListDispatch({
          type: "INITIALIZE_PLAYLISTS",
          payload: value.data.createdUser.playlists,
        });
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (e) {
      if (e.response.status === 422) {
        const notify = () => toast("Email Already Exists.");
        notify();
      } else if (e.response.status === 401) {
        const notify = () => toast("The credentials you entered are invalid");
        notify();
      } else {
        const notify = () => toast(e.message);
        notify();
      }
    }
  };

  return (
    <form>
      <div className="login-page">
        <ToastContainer />
        <div className="signup">
          <h4 className="login-title">Signup</h4>

          <div className="login-label">
            <label for="">First Name</label>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="Ishita"
            required
            value={userData.firstName}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />

          <div className="login-label">
            <label for="">Last Name</label>
          </div>
          <input
            type="text"
            class="login-input"
            required
            value={userData.lastName}
            placeholder="Keshawani"
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />

          <div className="login-label">
            <label for="">Email address</label>
          </div>
          <input
            type="text"
            className="login-input"
            required
            placeholder="ishitakeshawani@gmail.com"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label for="" className="login-label">
              Password
            </label>
          </div>
          <div class="login-password">
            <input
              type={type}
              className="login-password-input"
              placeholder="password"
              required
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setType("text");
                }}
              ></i>
            </button>
          </div>

          <div>
            <label for="" className="login-label">
              Confirm Password
            </label>
          </div>
          <div className="login-password">
            <input
              type={confirmPasswordType}
              className="login-password-input"
              placeholder="password"
              required
              value={userData.confirmPassword}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
            />
            <button className="login-icon button-style-none">
              <i
                className="fa-regular fa-eye password-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setConfirmPasswordType("text");
                }}
              ></i>
            </button>
          </div>
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
          <button
            className="btn btn-login"
            type="submit"
            onClick={onHandleSubmit}
          >
            Signup
          </button>
          <Link to="/login" className="link-no-style signup-link">
            Already have an account
            <i className="fa-solid fa-angle-right login-icon"></i>
          </Link>
        </div>
      </div>
    </form>
  );
}
