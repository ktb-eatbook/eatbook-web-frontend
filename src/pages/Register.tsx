import {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlutterAppAdaptor, WindowUtil } from "../common";

function Register(): React.JSX.Element {
    /*
    // 토큰 저장
    const [token, setToken] = useState<string | null>(null);
    */
    const location = useLocation()
    const navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState({
        gender: 'OTHER',
        ageGroup: '0',
    });

    // 유효한 추가 정보
    const ageGroups = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
    const genders = ["MALE", "FEMALE", "OTHER"];

    const register = async (): Promise<void> => {
        try {
            if(userInfo.ageGroup === "0") {
                alert("연령대를 입력 해주세요.")
                return
            }
            const token = location.search.substring(1).split("=")[1]

            const url = `${import.meta.env.VITE_API_URL}/api/signup`;
            const response = await fetch(url, {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    token,
                    ageGroup: parseInt(userInfo.ageGroup),
                    gender: userInfo.gender,
                }),
            });

            if(response.ok) {
                const result = await response.json()
                const accessToken = response.headers.get("AccessToken");
                const refreshToken = response.headers.get("RefreshToken");

                if (WindowUtil.isFlutterApp()) {
                    const data = result['data']
                    FlutterAppAdaptor.sendLoginResult({
                        data: data['member'],
                        accesstoken: accessToken,
                        refreshtoken: refreshToken,
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
            } else throw Error(`요청을 실패 했습니다.\n응답 코드: ${response.status}`)
        } catch(e) {
            console.log("에러 발생")
            console.log(e)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="logo"
                    src="/logo.png"
                    className="mx-auto h-52 w-auto"
                />
                <div className='flex-col gap-3 mt-4'>
                    {/* 성별 */}
                    <div className="flex gap-10 items-center">
                        <label className="w-12 text-sm font-medium text-gray-900">성별</label>
                        <div className="flex w-full space-x-4">
                            {["남자", "여자"].map((gender, index) => (
                                <button
                                    key={genders[index]}
                                    type="button"
                                    onClick={() => setUserInfo((prev) => ({...prev, gender: gender}))}
                                    className={`px-4 py-2 rounded-md text-sm font-medium w-full
                                    ${userInfo.gender === gender
                                            ? "bg-orange-400 text-white"
                                            : "bg-gray-100 text-gray-900"
                                    } hover:bg-orange-400 hover:text-white`}
                                >
                                    {gender}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 나이 */}
                    <div className="mt-4 flex gap-10 items-center">
                        <label className="w-12 text-sm font-medium text-gray-900">나이</label>
                        <select
                            id="ageGroup"
                            value={userInfo.ageGroup}
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    ageGroup: e.target.value,
                                }))
                            }
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring-0 sm:text-sm"
                        >
                            {ageGroups.map((ageGroup) => (
                                <option key={ageGroup} value={ageGroup}>
                                    {ageGroup}대
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button 
                onClick={register}
                className='mt-14 w-full bg-orange-800 text-sm text-white hover:bg-orange-900'>회원가입</button>
            </div>
        </div>
    );
}

export default Register;