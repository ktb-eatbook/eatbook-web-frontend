/**
 * 플러터 앱과 연결을 위한 네임 스페이스 입니다
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
}

export interface ISendLoginResult {
    data: unknown
    accesstoken: string
    refreshtoken: string
}