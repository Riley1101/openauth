import { NextResponse } from "next/server"

// Before
export async function GET() {
  return NextResponse.json({ hello: "world" })
}
