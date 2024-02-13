import { userName } from "$lib/store"
import { get } from "svelte/store"
import { redirect } from "@sveltejs/kit"

export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/desktop')) {
        if (get(userName) === "") {
            redirect(303, '/');
        }
	}

	const response = await resolve(event);
	return response;
}