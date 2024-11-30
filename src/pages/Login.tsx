function Login(): React.JSX.Element {
    const loginUrl = `${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`;
    const loginSubmit = () => {
        window.location.href = loginUrl;
    };

    return (
        <div className="loader_container">
            <span className="loader"></span>
        </div>
    )
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="logo"
                    src="/logo.png"
                    className="mx-auto h-52 w-auto"
                />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
                <img src="/kakaoLogin.png" alt="login-image" className='hover:cursor-pointer scale-90'
                     onClick={loginSubmit}
                />
            </div>
        </div>
    )
}

export default Login;