import { NextResponse } from "next/server";

export default function middleware(req: {
  cookies: { get: (arg0: string) => any };
  url: URL;
}) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  console.log("verify:", verify);
  console.log("url.pathname:", url.pathname);

  if (!verify && url.pathname.includes("/admin")) {
    return NextResponse.redirect("http://localhost:3000");
  }

  if (verify && url.pathname === "/") {
    return NextResponse.redirect("http://localhost:3000/admin");
  }

  return NextResponse.next();
}
