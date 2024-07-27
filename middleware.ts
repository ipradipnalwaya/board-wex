import { authMiddleware } from "@clerk/nextjs";

// This configuration will ignore routes that should not require authentication
export default authMiddleware({
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)", "/"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
