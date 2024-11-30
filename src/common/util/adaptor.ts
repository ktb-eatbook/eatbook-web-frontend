/**
 * 플러터 앱과 연결을 위한 네임 스페이스 입니다. </br>
 * 
 * 확장을 고려해서 FlutterAppAdaptor 네임 스페이스로 묶어 관리하고 있습니다. </br>
 * 
 * 로그인 결과는 아래의 onSuccessLogin을 호출해 데이터를 앱에 전달할 수 있습니다. </br>
 * 
 * 이벤트를 하나로 처리하려 했지만 회원가입과 로그인의 리스폰 객체 타입이 달라 두 개로 분리했습니다. </br>
 * 
 * sendLoginResult는 로그인의 결과를 sendSignUpWithLoginResult은 회원가입 이후 로그인의 결과를 전달합니다.
 */
export namespace FlutterAppAdaptor {
    export const sendLoginResult = ({
        data,
        accesstoken,
        refreshtoken,
    }: ISendLoginResult) => {
        const connector = window['flutter_inappwebview']
        connector.callHandler(
            'onSuccessLogin',
            {
                member: data,
                accesstoken,
                refreshtoken,
            } as const
        )
    }
    export const sendSignUpWithLoginResult = ({
        data,
        accesstoken,
        refreshtoken,
    }: ISendLoginResult) => {
        const connector = window['flutter_inappwebview']
        connector.callHandler(
            'onSuccessSignUpAndLogin',
            {
                member: data,
                accesstoken,
                refreshtoken,
            } as const
        )
    }
}

export interface ISendLoginResult {
    data: unknown
    accesstoken: string
    refreshtoken: string
}