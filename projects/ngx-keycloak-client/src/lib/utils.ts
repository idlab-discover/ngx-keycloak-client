export function onCallback(): void {

}
/**
 * @dynamic
 */
export function initKeycloak(): Promise<void> {
    return new Promise((resolve, reject) => {
        console.log('initing keycloak...')
        // init keycloak client here
        // Check sso here
        resolve()
    });
}