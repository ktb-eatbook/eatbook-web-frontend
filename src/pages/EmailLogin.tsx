// 이 파일에서 타입 검사 생략
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function EmailLogin(): React.JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        // 프레그먼트 추출
        const encryptedEmail = window.location.hash.substring(1);
        console.log("Encrypted Email: ", encryptedEmail);

        // 백엔드 API 요청
        const processEmailLogin = async ():Promise => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/api/email-login`;
                const response = await fetch(url, {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ encryptedEmail }),
                });

                if (response.ok) {
                    // 응답 헤더에서 토큰 추출
                    const accessToken = response.headers.get("AccessToken");
                    const refreshToken = response.headers.get("RefreshToken");

                    console.log("로그인 Access Token:", accessToken);
                    console.log("로그인 Refresh Token:", refreshToken);

                    if (!accessToken) {
                        await navigate('/additional-info');
                    }

                    // TODO: 분기 처리 필요
                    if (window.flutter_inappwebview !== undefined) {
                      // flutter event handler 호출
                    }
                    else { // 웹
                        // 토큰 가지고 회원탈퇴 페이지로 redirect
                        await navigate("/account", {
                            state: {
                                accessToken,
                                refreshToken,
                            },
                        });
                    }
                } else {
                    console.error("로그인 실패:", response.status);
                }
            } catch (error) {
                console.error("API 요청 중 오류 발생:", error);
            }
        };
        processEmailLogin();
    }, [navigate])

    return (
        <div>
            <h1>로그인중...</h1>
        </div>
    )
}

export default EmailLogin;