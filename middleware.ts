import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  // Here, you can include custom logic for route protection if needed
  // Example: if (req.url.startsWith("/protected")) auth().protect();
  auth().protect(); // Apply authentication to all matched routes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
