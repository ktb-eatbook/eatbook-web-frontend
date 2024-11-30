/**
 * 윈도우 객체 관련 유틸 네임 스페이스 입니다
 */
export namespace WindowUtil {
    export const isBrowser = (): boolean => typeof window !== undefined
    export const isFlutterApp = (): boolean => typeof window['flutter_inappwebview'] !== undefined
}