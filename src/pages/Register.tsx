import {useState} from "react";

function Register(): React.JSX.Element {
    const [userInfo, setUserInfo] = useState({
        sex: '',
        age: 0,
    });

    // TODO: API 코드 추가

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
                            {["남자", "여자"].map((sex) => (
                                <button
                                    key={sex}
                                    type="button"
                                    onClick={() => setUserInfo((prev) => ({...prev, sex: sex}))}
                                    className={`px-4 py-2 rounded-md text-sm font-medium w-full
                                    ${userInfo.sex === sex
                                            ? "bg-orange-400 text-white"
                                            : "bg-gray-100 text-gray-900"
                                    } hover:bg-orange-400 hover:text-white`}
                                >
                                    {sex}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 나이 */}
                    <div className="mt-4 flex gap-10 items-center">
                        <label className="w-12 text-sm font-medium text-gray-900">나이</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            min="0"
                            max="100"
                            value={userInfo.age}
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    age: parseInt(e.target.value) || 0, // 입력값이 비어있으면 0으로 설정
                                }))
                            }
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring-0 sm:text-sm"
                        />
                    </div>
                </div>

                <button className='mt-14 w-full bg-orange-800 text-sm text-white hover:bg-orange-900'>회원가입</button>
            </div>
        </div>
    );
}

export default Register;