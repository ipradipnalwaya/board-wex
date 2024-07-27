import { withClerkMiddleware } from "@clerk/nextjs/server";

// This middleware function will enforce authentication on the specified routes
export default withClerkMiddleware((req, res, next) => {
  // Apply custom logic if needed before calling next()
  next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
