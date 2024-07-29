import { auth } from "@/firebase/firebaseConfig";
import { RecaptchaVerifier } from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}

const instantiateRecaptcha = (): RecaptchaVerifier => {
  return new RecaptchaVerifier(auth,
    "recaptcha-container", // The ID of the container where the recaptcha will be rendered
    {
      size: "invisible", // Set reCAPTCHA to invisible
      callback: () => {

      },
      "expired-callback": () => {

      },
    },

  );
}

const onCaptchVerify = (): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve, reject) => {
    try {
      window.recaptchaVerifier = instantiateRecaptcha();

      // Render the recaptcha verifier
      window.recaptchaVerifier.render().then(() => {
        resolve({ success: true, message: 'Recaptcha rendered successfully' });
      }).catch(() => {
        window.recaptchaVerifier = instantiateRecaptcha(); // Re-instantiate reCAPTCHA
        reject({ success: false, message: 'Error rendering recaptcha verifier' });
      });
    } catch {
      reject({ success: false, message: 'Error initializing recaptcha verifier' });
    }
  });
};

export default onCaptchVerify;
