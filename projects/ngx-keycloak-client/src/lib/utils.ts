import { KeycloakService } from "keycloak-angular";

export function onCallback(): void {

}
/**
 * @dynamic
 */
export function initKeycloak(
    keycloak: KeycloakService
) {
    return () => {
        console.log('initing keycloak...');
        return keycloak.init({
            config: {
                url: 'http://localhost:8080/',
                realm: 'test',
                clientId: 'sample-app',
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: `${window.location}assets/silent-check-sso.html`,
                pkceMethod: 'S256'
            }
        });
    }
}