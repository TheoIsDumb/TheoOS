import { userName } from "$lib/store"
import { dev } from '$app/environment'
import { get } from "svelte/store"
import { redirect } from "@sveltejs/kit"

export async function handle({ event, resolve }) {
	if (!dev) {
		if (event.url.pathname.startsWith('/desktop')) {
			if (get(userName) === "") {
				redirect(303, '/');
			}
		}
	}

	const response = await resolve(event);
	return response;
}