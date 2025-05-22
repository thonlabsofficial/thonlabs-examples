import {validateSession, validationRedirect} from "@thonlabs/nextjs/server";
import {type NextRequest, NextResponse} from "next/server";

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};

export async function middleware(req: NextRequest) {
  const redirect = await validateSession(req);
  if (redirect) {
    return validationRedirect(redirect);
  }

  return NextResponse.next();
}
