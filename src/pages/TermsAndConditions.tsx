import React from "react";
import {privacyPolicy} from "../assets/termsAndConditions.ts";

const TermsAndConditions = (): React.JSX.Element => {

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            {/* 전체 동의 */}
            {/*<div className='flex items-center gap-2'>
                <input type='checkbox'
                       className='rounded-md border-gray-400'
                ></input>
                <p className='text-lg'>전체 동의하기</p>
            </div>*/}

            {/* 필수 동의 */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='flex items-center gap-2'>
                    {/*<input type='checkbox'
                           className='rounded-md border-gray-400'
                    ></input>*/}
                    <p className='text-lg font-suit'>[필수] 개인정보 수집 및 이용</p>
                </div>
                <textarea readOnly={true}
                          rows={25}
                          className='w-full font-suit rounded-md border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-400'
                          value={privacyPolicy}
                ></textarea>
            </div>
        </div>
    )
}

export default TermsAndConditions;