import React from "react";

const TermsAndConditions = (): React.JSX.Element => {

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            {/* 전체 동의 */}
            <div className='flex items-center gap-2'>
                <input type='checkbox'
                       className='rounded-md border-gray-400'
                ></input>
                <p className='text-lg'>전체 동의하기</p>
            </div>

            {/* 필수 동의 */}
            <div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox'
                           className='rounded-md border-gray-400'
                    ></input>
                    <p className='text-lg'>개인정보 수집 및 이용</p>
                </div>
                <textarea readOnly={true}
                          className='rounded-md border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-400'
                >

                </textarea>
            </div>

            {/* 선택 동의 */}
        </div>
    )
}

export default TermsAndConditions;