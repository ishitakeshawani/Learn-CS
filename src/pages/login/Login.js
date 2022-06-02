import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { usePlayList, useAuth } from "../../contexts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate();
  const { playListDispatch } = usePlayList();
  const { setUser, setIsLoggedIn } = useAuth();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const testLogin = async (e) => {
    e.preventDefault();
    setUserData((prev) => ({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    }));
    const value = await axios.post("/api/auth/login", {
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
    setUser(value.data.foundUser);
    localStorage.setItem("token", value.data.encodedToken);
    setIsLoggedIn(true);
    playListDispatch({
      type: "INITIALIZE_PLAYLISTS",
      payload: value.data.foundUser.playlists,
    });
    setUserData({
      email: "",
      password: "",
    });
    navigate(from, { replace: true });
  };

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
    if (
      userData.password === "" ||
      userData.password === undefined ||
      userData.password === null
    ) {
      setPasswordError("Please enter password!");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  const onSubmitHandler = async (e) => {
    try {
      if (doValidate()) {
        e.preventDefault();
        const value = await axios.post("/api/auth/login", userData);
        setUser(value.data.foundUser);
        localStorage.setItem("token", value.data.encodedToken);
        setIsLoggedIn(true);
        setUserData({
          email: "",
          password: "",
        });
        playListDispatch({
          type: "INITIALIZE_PLAYLISTS",
          payload: value.data.foundUser.playlists,
        });
        navigate("/");
      }
    } catch (e) {
      if (e.response.status === 422) {
        const notify = () => toast("Email Already Exists.");
        notify();
      } else if (e.response.status === 404) {
        const notify = () => toast("User does not Exists.Please do signup");
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
        <div className="login">
          <h4 className="login-title">Login</h4>

          <div className="login-label">
            <label for="">Email address</label>
          </div>
          <input
            type="text"
            className="login-input"
            required
            value={userData.email}
            placeholder="xyz@gmail.com"
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
          />
          <div>
            <label for="" class="login-label">
              Password
            </label>
          </div>
          <div className="login-password">
            <input
              type="password"
              className="login-password-input"
              required
              placeholder="password"
              value={userData.password}
              onChange={(e) => {
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <button className="login-icon button-style-none">
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
          <button
            className="btn btn-login"
            onClick={(e) => onSubmitHandler(e)}
            type="submit"
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-login"
            onClick={(e) => testLogin(e)}
          >
            Login with test credentials
          </button>
          <Link to="/signup" className="link-no-style signup-link">
            Create new account{" "}
            <i className="fa-solid fa-angle-right login-icon"></i>
          </Link>
        </div>
      </div>
    </form>
  );
}
