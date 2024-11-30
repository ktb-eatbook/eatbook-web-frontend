// 이 파일에서 타입 검사 생략
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import styles from "../css/email_login.module.css"
import { FlutterAppAdaptor, WindowUtil } from "../common";

function EmailLogin(): React.JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        // 프레그먼트 추출
        const encryptedEmail = window.location.hash.substring(1);

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
                    const result = await response.json()
                    console.log(`리스폰 객체: ${response}`)
                    console.log(`${WindowUtil.isBrowser()}`)
                    console.log(`${WindowUtil.isFlutterApp()}`)
                    console.log(typeof window['flutter_inappwebview'])
                    console.log("**************결과**************")
                    
                    for(let property in result) {
                        console.log(property)
                        console.log(Object.values(property))
                    }

                    // 응답 헤더에서 토큰 추출
                    const accessToken = response.headers.get("AccessToken");
                    const refreshToken = response.headers.get("RefreshToken");

                    if (!accessToken) {
                        await navigate('/additional-info');
                    }
                    
                    // TODO: 분기 처리 필요
                    if (WindowUtil.isFlutterApp()) {
                        const data = result['data']
                        FlutterAppAdaptor.sendLoginResult({
                            data: data['member'],
                            accesstoken,
                            refreshtoken,
                        })
                        return
                    }
                    else { // 웹
                        // // 토큰 가지고 회원탈퇴 페이지로 redirect
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
        <div className="loader_container">
            <span className="loader"></span>
        </div>
    )
}

export default EmailLogin;