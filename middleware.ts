import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Use a custom afterAuth function to control behavior after authentication
export default withClerkMiddleware((req) => {
  return NextResponse.next();
}, {
  afterAuth(auth, req, evt) {
    // Custom logic based on authentication status
    if (!auth.userId) {
      // Allow access to the home page even if not authenticated
      if (req.nextUrl.pathname === "/") {
        return NextResponse.next();
      }
      // Redirect unauthenticated users to a sign-in page or other location
      return NextResponse.redirect("/sign-in");
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
