import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { client } from "./lib/auth"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.url.includes("/api/callback")) {
    return NextResponse.next()
  }
  try {
    const accessToken = request.cookies.get("access_token")
    if (accessToken) {
      console.log("access token found")
    }
  } catch (e) {
    console.error(e)
  }
  const url = new URL(request.url)
  return NextResponse.redirect(
    client.authorize(url.origin + "/api/callback", "code"),
    302,
  )
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*"],
}
