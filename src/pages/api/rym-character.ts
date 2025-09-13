import type { APIRoute } from 'astro';


export const GET: APIRoute = async ({params , request}) => {
  const base = 'https://rickandmortyapi.com'
  const url = new URL('/api/character', base)

  try {
    const resp = await fetch(url.toString(), { method: 'GET', headers: {
      'Content-Type': 'application/json',
    }})
    const json = await resp.json()
    return new Response(JSON.stringify(json))
  } catch (err) {
    return new Response(String(err), { status: 502 })
  }
}
