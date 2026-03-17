import { auth } from './src/lib/auth.js';

async function debugAuth() {
    console.log("Auth keys:", Object.keys(auth));
    if (auth.api) {
        console.log("Auth.api keys:", Object.keys(auth.api));
        if ((auth.api as any).admin) {
            console.log("Admin plugin found on auth.api");
        } else {
            console.log("Admin plugin NOT found on auth.api");
        }
    }
}

debugAuth();
