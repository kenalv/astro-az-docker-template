import { ActionError, defineAction } from "astro:actions"
import { z } from "astro:content";

export const rickandmorty = {
        getCharacter: defineAction({
            accept: 'json',
            input: z.object({}),
            handler: async (input) => {
                
                const base = 'https://rickandmortyapi.com'
                const url = new URL('/api/character', base)
                console.log('Fetching from', url.toString());
                const res = await fetch(url, { method: 'GET' });
                if (!res.ok) {
                    const errorText = await res.text()
                    console.log('errorText', errorText);
                }
                return res.json()
            }
        }),

}