import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') 
  const id = searchParams.get('id')
  console.log(name, id)
  return NextResponse.json({ name, id }, { status: 500 })
}