const DeleteAccount = () => {
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
            <button className='bg-red-400 text-white mt-12 shadow-md'>탈퇴하기</button>
        </div>
    )
};

export default DeleteAccount;