import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function Login() {
    const [username, setusername] = useState("hungdeptrai")
    const [password, setpassword] = useState("hungdeptrai")
    const [inputuser, setinputuser] = useState("")
    const [inputpass, setinputpass] = useState("")

    const Submit = (e) => {
        e.preventDefault();
        if (username !== inputuser && password !== inputpass) {
            alert("đăng nhập thất bại");
        }
        else {
            alert("đăng nhập thành công");
            window.location.href = './home'
        }
    }
    return (
        <>
            <div id='mainLogin'>



                <div className='container mt-5' style={{ maxWidth: "400px", border: "5px" }}>
                    <div className='card'>

                        <h3 className="text-center mb-4 text-primary">Đăng nhập</h3>
                        <form>
                            <div className='mb-3'>
                                <label className="form-label">Tên người dùng</label>
                                <input value={inputuser} onChange={e => setinputuser(e.target.value)} type="text" className="form-control" placeholder="Nhập username" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mật khẩu</label>
                                <input value={inputpass} onChange={e => setinputpass(e.target.value)} type="password" className="form-control" placeholder="Nhập mật khẩu" />
                            </div>
                            <button onClick={Submit} type='submit' className='btn  w-100'>
                                Đăng nhập
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Chưa có tài khoản? <a href="signupper">Đăng ký</a>
                        </p>


                    </div>





                </div>
            </div>

        </>
    )
}
export default Login;