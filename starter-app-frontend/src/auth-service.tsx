import { UserManager, User } from "oidc-client-ts";
import oidcConfig from "./auth-config";

const userManager = new UserManager(oidcConfig);

export const signIn = async (): Promise<void> => {
    await userManager.signinRedirect();
};

export const signOut = async (): Promise<void> => {
    await userManager.signoutRedirect();
};

export const getCurrentUser = async (): Promise<User | null> => {
    return await userManager.getUser();
};

export const handleRedirectCallback = async (): Promise<User> => {
    return await userManager.signinRedirectCallback();
};