import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// This middleware function will enforce authentication on the specified routes
export default withClerkMiddleware((req) => {
  // Custom logic can be added here if needed
  console.log("Request URL:", req.url);

  // Continue to the next middleware or route handler
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
