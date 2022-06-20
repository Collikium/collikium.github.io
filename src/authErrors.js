export const authErrors = [
    { error: "admin-restricted-operation", messeage: "This operation is restricted to administrators only.", },
    { error: "argument-error", messeage: "" },
    { error: "app-not-authorized", messeage: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console." },
    { error: "app-not-installed", messeage: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", },
    { error: "captcha-check-failed", messeage: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", },
    { error: "code-expired", messeage: "The SMS code has expired. Please re-send the verification code to try again.", },
    { error: "cordova-not-ready", messeage: "Cordova framework is not ready.", },
    { error: "cors-unsupported", messeage: "This browser is not supported.", },
    { error: "credential-already-in-use", messeage: "This credential is already associated with a different user account.", },
    { error: "custom-token-mismatch", messeage: "The custom token corresponds to a different audience.", },
    { error: "requires-recent-login", messeage: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", },
    { error: "dynamic-link-not-activated", messeage: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", },
    { error: "email-change-needs-verification", messeage: "Multi-factor users must always have a verified email.", },
    { error: "email-already-in-use", messeage: "The email address is already in use by another account.", },
    { error: "expired-action-code", messeage: "The action code has expired. ", },
    { error: "cancelled-popup-request", messeage: "This operation has been cancelled due to another conflicting popup being opened.", },
    { error: "internal-error", messeage: "An internal error has occurred.", },
    { error: "invalid-app-credential", messeage: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", },
    { error: "invalid-app-id", messeage: "The mobile app identifier is not registed for the current project.", },
    { error: "invalid-user-token", messeage: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", },
    { error: "invalid-auth-event", messeage: "An internal error has occurred.", },
    { error: "invalid-verification-code", messeage: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", },
    { error: "invalid-continue-uri", messeage: "The continue URL provided in the request is invalid.", },
    { error: "invalid-cordova-configuration", messeage: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", },
    { error: "invalid-custom-token", messeage: "The custom token format is incorrect. Please check the documentation.", },
    { error: "invalid-dynamic-link-domain", messeage: "The provided dynamic link domain is not configured or authorized for the current project.", },
    { error: "invalid-email", messeage: "The email address is badly formatted.", },
    { error: "invalid-api-key", messeage: "Your API key is invalid, please check you have copied it correctly.", },
    { error: "invalid-cert-hash", messeage: "The SHA-1 certificate hash provided is invalid.", },
    { error: "invalid-credential", messeage: "The supplied auth credential is malformed or has expired.", },
    { error: "invalid-message-payload", messeage: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", },
    { error: "invalid-multi-factor-session", messeage: "The request does not contain a valid proof of first factor successful sign-in.", },
    { error: "invalid-oauth-provider", messeage: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", },
    { error: "invalid-oauth-client-id", messeage: "The OAuth client ID provided is either invalid or does not match the specified API key.", },
    { error: "unauthorized-domain", messeage: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", },
    { error: "invalid-action-code", messeage: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", },
    { error: "wrong-password", messeage: "The password is invalid or the user does not have a password.", },
    { error: "invalid-persistence-type", messeage: "The specified persistence type is invalid. It can only be local, session or none.", },
    { error: "invalid-phone-number", messeage: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", },
    { error: "invalid-provider-id", messeage: "The specified provider ID is invalid.", },
    { error: "invalid-recipient-email", messeage: "The email corresponding to this action failed to send as the provided recipient email address is invalid.", },
    { error: "invalid-sender", messeage: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", },
    { error: "invalid-verification-id", messeage: "The verification ID used to create the phone auth credential is invalid.", },
    { error: "invalid-tenant-id", messeage: "The Auth instance's tenant ID is invalid.", },
    { error: "multi-factor-info-not-found", messeage: "The user does not have a second factor matching the identifier provided.", },
    { error: "multi-factor-auth-required", messeage: "Proof of ownership of a second factor is required to complete sign-in.", },
    { error: "missing-android-pkg-name", messeage: "An Android Package Name must be provided if the Android App is required to be installed.", },
    { error: "auth-domain-config-required", messeage: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", },
    { error: "missing-app-credential", messeage: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", },
    { error: "missing-verification-code", messeage: "The phone auth credential was created with an empty SMS verification code.", },
    { error: "missing-continue-uri", messeage: "A continue URL must be provided in the request.", },
    { error: "missing-iframe-start", messeage: "An internal error has occurred.", },
    { error: "missing-ios-bundle-id", messeage: "An iOS Bundle ID must be provided if an App Store ID is provided.", },
    { error: "missing-multi-factor-info", messeage: "No second factor identifier is provided.", },
    { error: "missing-multi-factor-session", messeage: "The request is missing proof of first factor successful sign-in.", },
    { error: "missing-or-invalid-nonce", messeage: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.", },
    { error: "missing-phone-number", messeage: "To send verification codes, provide a phone number for the recipient.", },
    { error: "missing-verification-id", messeage: "The phone auth credential was created with an empty verification ID.", },
    { error: "app-deleted", messeage: "This instance of FirebaseApp has been deleted.", },
    { error: "account-exists-with-different-credential", messeage: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", },
    { error: "network-request-failed", messeage: "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", },
    { error: "no-auth-event", messeage: "An internal error has occurred.", }, ,
    { error: "no-such-provider", messeage: "User was not linked to an account with the given provider.", }, ,
    { error: "null-user", messeage: "A null user object was provided as the argument for an operation which requires a non-null user object.", }, ,
    { error: "operation-not-allowed", messeage: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", }, ,
    { error: "operation-not-supported-in-this-environment", messeage: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', }, ,
    { error: "popup-blocked", messeage: "Unable to establish a connection with the popup. It may have been blocked by the browser.", }, ,
    { error: "popup-closed-by-user", messeage: "The popup has been closed by the user before finalizing the operation.", }, ,
    { error: "provider-already-linked", messeage: "User can only be linked to one identity for the given provider.", }, ,
    { error: "quota-exceeded", messeage: "The project's quota for this operation has been exceeded.", }, ,
    { error: "redirect-cancelled-by-user", messeage: "The redirect operation has been cancelled by the user before finalizing.", }, ,
    { error: "redirect-operation-pending", messeage: "A redirect sign-in operation is already pending.", }, ,
    { error: "rejected-credential", messeage: "The request contains malformed or mismatching credentials.", }, ,
    { error: "second-factor-already-in-use", messeage: "The second factor is already enrolled on this account.", }, ,
    { error: "maximum-second-factor-count-exceeded", messeage: "The maximum allowed number of second factors on a user has been exceeded.", }, ,
    { error: "tenant-id-mismatch", messeage: "The provided tenant ID does not match the Auth instance's tenant ID", }, ,
    { error: "timeout", messeage: "The operation has timed out.", }, ,
    { error: "user-token-expired", messeage: "The user's credential is no longer valid. The user must sign in again.", }, ,
    { error: "too-many-requests", messeage: "We have blocked all requests from this device due to unusual activity. Try again later.", },
    { error: "unauthorized-continue-uri", messeage: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", }, ,
    { error: "unsupported-first-factor", messeage: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.", }, ,
    { error: "unsupported-persistence-type", messeage: "The current environment does not support the specified persistence type.", }, ,
    { error: "unsupported-tenant-operation", messeage: "This operation is not supported in a multi-tenant context.", }, ,
    { error: "unverified-email", messeage: "The operation requires a verified email.", }, ,
    { error: "user-cancelled", messeage: "The user did not grant your application the permissions it requested.", }, ,
    { error: "user-not-found", messeage: "There is no user record corresponding to this identifier. The user may have been deleted.", }, ,
    { error: "user-disabled", messeage: "The user account has been disabled by an administrator.", }, ,
    { error: "user-mismatch", messeage: "The supplied credentials do not correspond to the previously signed in user.", }, ,
    { error: "user-signed-out", messeage: "", }, ,
    { error: "weak-password", messeage: "The password must be 6 characters long or more.", }, ,
    { error: "web-storage-unsupported", messeage: "This browser is not supported or 3rd party cookies and data may be disabled." },
];