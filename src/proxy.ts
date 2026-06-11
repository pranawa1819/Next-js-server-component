import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  //   console.log("Proxy middleware executed");
  //   return NextResponse.json({data: "Hello from the proxy!"});

  // return NextResponse.next()
  //   return NextResponse.redirect(new URL('/landing-page', request.url))

//   const token = request.cookies.get("token");

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

  console.log(request.cookies.get("proxyCookie"));
  const res = NextResponse.next();
  res.cookies.set({
    name: "proxyCookie",
    value: "This cookie is set by the proxy middleware",
    path: "/",
  });
  return res;
}
export const config = {
  matcher: "/about-us/:path*",
};
