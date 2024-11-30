/**
 * 윈도우 객체 관련 유틸 네임 스페이스 입니다. </br>
 * 
 * typeof의 결과는 문자열로 반환 되기 때문에 비교되는 값 또한 반드시 문자열로 비교하여야 합니다. </br>
 * 
 * ex) </br>
 * 
 * const str = "문자열" </br>
 * 
 * console.log(typeof str) // "string"
 */
export namespace WindowUtil {
    export const isBrowser = (): boolean => typeof window !== "undefined"
    export const isFlutterApp = (): boolean => typeof window['flutter_inappwebview'] !== "undefined"
}