import { useLocation, useNavigate } from "react-router-dom";

const DeleteAccount = () => {
    /*
    // 토큰 받아오기
    const location = useLocation();
    const { accessToken, refreshToken } = location.state || {};
    */
    const location = useLocation();
    const navigate = useNavigate();

    // TODO: 회원 탈퇴 api 추가\
    const signOut = async () => {
        try {
            const { accessToken, refreshToken } = location.state
            const url = `${import.meta.env.VITE_API_URL}/api/members`;
            const response = await fetch(url, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": `AccessToken=${accessToken}; RefreshToken=${refreshToken}`
                },
            });

            if(response.ok) {
                alert("회원퇄퇴를 성공적으로 마쳤습니다.\n처음 페이지로 이동합니다.")
                await navigate("/");
            } else throw Error(`요청에 실패했습니다.\n응답 코드: ${response.status}\n에러 메세지: ${response.statusText}`)
        } catch(e) {
            console.log("에러 발생")
            console.log(e)
        }
    }

    return (
        <div className='container flex flex-col justify-center items-center justify-self-center gap-5'>
            <div className='flex flex-col justify-center items-center gap-y-32'>
                <span className='text-4xl'>탈퇴하기</span>
                <span className='text-xl'>정말 잇북을 탈퇴하시겠어요?</span>
            </div>

            {/*TODO: (가능하면) 우는 여우 로고*/}

            {/* 고지 사항 */}
            <div className='bg-gray-50 px-5 py-3 rounded-md'>
                <ul className='list-inside list-disc'>
                    <li>재가입 시에도 이용 내역은 복구되지 않습니다.</li>
                    <li>탈퇴 고객의 개인정보는 관련 법령에 따라 일정 기간 안전하게 보관되며, 그 이후 자동 파기됩니다.</li>
                </ul>
            </div>
            <button
            onClick={signOut}
            className='bg-red-400 text-white mt-12 shadow-md'>탈퇴하기</button>
        </div>
    )
};

export default DeleteAccount;