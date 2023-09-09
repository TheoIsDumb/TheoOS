import { writable, readable } from "svelte/store";

import Music from '$lib/apps/Music.svelte';
import Terminal from '$lib/apps/Terminal.svelte';
import RizzMeter from '$lib/apps/RizzMeter.svelte';
import Browser from '$lib/apps/Browser.svelte';
import Notes from '$lib/apps/Notes.svelte';
import About from '$lib/apps/About.svelte';
import DateCalc from '$lib/apps/DateCalc.svelte';
import AspectRatioCalc from '$lib/apps/AspectRatioCalc.svelte';

import IconMusic from '$lib/icons/IconMusic.svelte';
import IconTerminal from '$lib/icons/IconTerminal.svelte';
import IconRizzMeter from '$lib/icons/IconRizzMeter.svelte';
import IconBrowser from '$lib/icons/IconBrowser.svelte';
import IconNotes from '$lib/icons/IconNotes.svelte';
import IconAbout from '$lib/icons/IconAbout.svelte';
import IconDateCalc from '$lib/icons/IconDateCalc.svelte';
import IconAspectRatioCalc from '$lib/icons/IconAspectRatioCalc.svelte';

export let openedApps = writable([]);

export let userName = writable("");

export let apps = readable([
    {
        id: "Music",
        component: Music,
        icon: IconMusic 
    },
    {
        id: "Terminal",
        component: Terminal,
        icon: IconTerminal,
    },
    {
        id: "Browser",
        component: Browser,
        icon: IconBrowser,
    },
    {
        id: "DateCalc",
        component: DateCalc,
        icon: IconDateCalc,
    },
    {
        id: "AspectRatioCalc",
        component: AspectRatioCalc,
        icon: IconAspectRatioCalc,
    },
    {
        id: "RizzMeter",
        component: RizzMeter,
        icon: IconRizzMeter,
    },
    {
        id: "Notes",
        component: Notes,
        icon: IconNotes,
    },
    {
        id: "About",
        component: About,
        icon: IconAbout,
    }
])