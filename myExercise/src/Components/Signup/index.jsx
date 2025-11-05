import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import React, { useState } from "react";

function Signup() {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    const specialChar = /[@!#$^]/;
    const specialEmail = /@gmail\.com$/;
    const Submitner = (e) => {
        e.preventDefault();
        if (username.length <= 8) {
            alert("không đủ số chữ");
        }
        else if (!specialEmail.test(email)) {
            alert("Vui lòng thêm @gmail.com");
        }
        else if (number.length < 10) {
            alert("vui lòng nhập lại số điện thoại");
        }
        else if (!specialChar.test(password) || password.length < 8) {
            alert("có đủ 8 kí tự và có kí tự đặc biết");
        }
        else {
            alert("đăng nhập thành công")
        }


    }
    return (
        <>
            <div className='mainSignup'>
                <div className='container mt-5' style={{ maxWidth: "400px" }}>

                    <div className='card'>
                        <h3 className="text-center mb-4 text-primary">Đăng ký tài khoản</h3>
                        <form>
                            <div className='mb-3'>
                                <label className="form-label">Tên người dùng</label>
                                <input value={username} onChange={e => setusername(e.target.value)} type="text" className="form-control" placeholder="Nhập username" />
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Email</label>
                                <input value={email} onChange={e => setemail(e.target.value)} type="text" className="form-control" placeholder="Nhập email" />
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Số điện thoại</label>
                                <input value={number} onChange={e => setnumber(e.target.value)} type="text" className="form-control" placeholder="Nhập số điện thoại" />
                            </div>



                            <div className="mb-3">
                                <label className="form-label">Mật khẩu</label>
                                <input value={password} onChange={e => setpassword(e.target.value)} type="password" className="form-control" placeholder="Nhập mật khẩu" />
                            </div>

                            <button onClick={Submitner} type='submit' className='btn  w-100'>
                                Đăng ký
                            </button>

                        </form>

                    </div>

                </div>






            </div>
        </>
    )
}
export default Signup