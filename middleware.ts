import { withClerkMiddleware } from "@clerk/nextjs/server";

export default withClerkMiddleware((req, res, next) => {
  // Your logic here
  const isProtected = req.url.startsWith("/api") || req.url === "/";
  if (isProtected) {
    // Check authentication
    if (!req.auth.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  // Proceed to the next middleware or handler
  next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
