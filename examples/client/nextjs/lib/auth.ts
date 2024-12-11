import { createClient } from "@openauthjs/openauth/client"
import { NextResponse } from "next/server"

export const client = createClient({
  clientID: "astro",
  issuer: "http://localhost:3000",
})

export function setTokens(ctx: NextResponse, access: string, refresh: string) {
  ctx.cookies.set("refresh_token", refresh, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 34560000,
  })
  ctx.cookies.set("access_token", access, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 34560000,
  })
}
