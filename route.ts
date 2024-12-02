/**
 * An array of routes that are accessible to the public
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * This route will redirect user to settings after authentications
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * Prefix for api authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
