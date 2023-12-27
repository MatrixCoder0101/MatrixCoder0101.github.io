import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {
  //const { searchParams } = new URL(request.url)
  //const name = searchParams.get('name') 
  //console.log(name)
  return NextResponse.json({ name: 'Goutam', age: 18 }, { status: 500 })
}