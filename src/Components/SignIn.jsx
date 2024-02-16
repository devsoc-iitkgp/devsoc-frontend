import React from 'react'
import { useForm } from 'react-hook-form'
import { fetchUserAsync } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'

export default function SignIn({ showLogin, showPopup, setShowLogin }) {
    return showLogin ? <Login showPopup={showPopup} setShowLogin={setShowLogin} /> : <Register showPopup={showPopup} setShowLogin={setShowLogin} />
}

function Register({ showPopup, setShowLogin }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [error, setError] = React.useState(false)

    const createUserAsync = async (data) => {
        setLoading(true)
        try {
            const response = await fetch("http://localhost:5000/user", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setLoading(false)
            if (response.ok) {
                setMessage("Registration successful. You can login now!")
                setError(false)
            } else {
                setMessage("Something went wrong")
                setError(true)
                let res = await response.json()
                let e = res.error.errors[Object.keys(res.error.errors)[0]]
                console.log(e)
                if (e.kind === "unique") {
                    console.log("hey")
                    setMessage(`${e.path} is already registered.`)
                } else {
                    setMessage("Some Error occured")
                }
            }
        } catch (error) {
            setLoading(false)
            setMessage("Something went wrong")
            setError(true)
            console.log(error)
        }
    }

    return (
        <div className={`register${showPopup ? "" : " collapsed"}`} onClick={(e) => e.stopPropagation()}>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit((data) => {
                delete data.confirmPassword
                createUserAsync(data)
            })}>
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    {...register('name', { required: "Name is required" })}
                />
                {errors.name && <p style={{ color: "red" }} >*{errors.name.message}</p>}
                <input
                    type="text"
                    placeholder="Email"
                    name='email'
                    {...register('email', { required: "Email is required" })}
                />
                {errors.email && <p style={{ color: "red" }} >*{errors.email.message}</p>}
                <input
                    type="text"
                    placeholder="Mobile Number"
                    name='mobile'
                    {...register('mobile', { required: "Mobile number is required" })}
                />
                {errors.mobile && <p style={{ color: "red" }} >*{errors.mobile.message}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    {...register('password', { required: "Password is required" })}
                />
                {errors.password && <p style={{ color: "red" }} >*{errors.password.message}</p>}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name='confirmPassword'
                    {...register('confirmPassword', {
                        required: true,
                        validate: value => (value === watch('password') || "Passwords do not match")
                    })}
                />
                {errors.confirmPassword?.message && <p style={{ color: "red" }} >*{errors.confirmPassword.message}</p>}
                <div className="institute" >
                    <input
                        type="text"
                        placeholder="Institute Name"
                        name='institute'
                        {...register('institute', { required: "Institute name is required" })}
                    />
                    <select
                        name="yearOfStudy"
                        defaultValue={0}
                        {...register('yearOfStudy', {
                            required: "Year of study is required",
                            validate: value => (value !== "0" || "Year of study is required")
                        })}
                    >
                        <option value={0} disabled>Year of study</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                {errors.institute && <p style={{ color: "red" }} >*{errors.institute.message}</p> || errors.yearOfStudy && <p style={{ color: "red" }} >*{errors.yearOfStudy.message}</p>}
                
                {message && <p style={{ color: `${error ? "red" : "green"}` }}>{message}</p>}

                <button style={{ backgroundColor: `${loading ? "grey" : ""}` }}>{ loading ? "Please wait..." : "Register" }</button>
            </form>
            <p style={{textAlign: "center", fontWeight: "bold", color: "rgba(39, 36, 157, 0.76)", textDecoration: "underline", cursor: "pointer"}} onClick={() => setShowLogin(true)}>Already have an account? Login!</p>
        </div>
    )
}

function Login({ showPopup, setShowLogin }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState("")
    const [error, setError] = React.useState(false)

    const loginAsync = async (data) => {
        console.log(data)
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/user/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setLoading(false)
            if (res.ok) {
                setMessage("Login successful")
                setError(false)
                const response = await res.json()
                localStorage.setItem("token", response.token)
                dispatch(fetchUserAsync(response.token))
            } else {
                const response = await res.json()
                setMessage(response.error)
                setError(true)
                console.log(response)
            }
        } catch (error) {
            setLoading(false)
            setMessage("Something went wrong")
            setError(true)
            console.log(error)
        }
    }

    return (
        <div className={`register${showPopup ? "" : " collapsed"}`} onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit((data) => {
                loginAsync(data)
            })}>
                <input
                    type="text"
                    placeholder="Email"
                    name='email'
                    {...register('email', { required: "Email is required" })}
                />
                {errors.email && <p style={{ color: "red" }} >*{errors.email.message}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    {...register('password', { required: "Password is required" })}
                />
                {errors.password && <p style={{ color: "red" }} >*{errors.password.message}</p>}

                {message && <p style={{ color: `${error ? "red" : "green"}` }}>{message}</p>}

                <button style={{ backgroundColor: `${loading ? "grey" : ""}` }}>{loading ? "Please wait..." : "Login"}</button>
            </form>
            <p style={{textAlign: "center", fontWeight: "bold", color: "rgba(39, 36, 157, 0.76)", textDecoration: "underline", cursor: "pointer"}} onClick={() => setShowLogin(false)}>Don't have an account? Register!</p>
        </div>
    )
}