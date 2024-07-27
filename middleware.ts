import { WithClerkMiddleware } from "@clerk/nextjs/server";

export default WithClerkMiddleware((req, res) => {
  // Your logic here
  const isProtected = req.url.startsWith("/api") || req.url === "/";
  if (isProtected) {
    // Protect route logic
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
