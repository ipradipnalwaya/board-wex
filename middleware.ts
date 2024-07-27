import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher to identify which routes need protection
const isProtectedRoute = createRouteMatcher(["/(.*)", "/"]);

// Export the clerk middleware with a custom function
export default clerkMiddleware((auth, req) => {
  // Check if the request matches the protected routes
  if (isProtectedRoute(req)) {
    // Enforce authentication on protected routes
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
