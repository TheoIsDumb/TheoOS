import { writable, readable } from "svelte/store";

import Music from '/src/routes/apps/Music.svelte';
import Terminal from '/src/routes/apps/Terminal.svelte';
import RizzMeter from '/src/routes/apps/RizzMeter.svelte';
import Browser from '/src/routes/apps/Browser.svelte';
import Notes from '/src/routes/apps/Notes.svelte';
import About from '/src/routes/apps/About.svelte';
import DateCalc from '/src/routes/apps/DateCalc.svelte';
import AspectRatioCalc from '/src/routes/apps/AspectRatioCalc.svelte';

export let openedApps = writable([]);

export let userName = writable("");

export let apps = readable([
    {
        id: "Music",
        component: Music,
        icon: "emojione-v1:music-ascend"
    },
    {
        id: "Terminal",
        component: Terminal,
        icon: "flat-color-icons:command-line"
    },
    {
        id: "Browser",
        component: Browser,
        icon: "logos:internetexplorer"
    },
    {
        id: "DateCalc",
        component: DateCalc,
        icon: "openmoji:calendar"
    },
    {
        id: "AspectRatioCalc",
        component: AspectRatioCalc,
        icon: "icon-park:equal-ratio"
    },
    {
        id: "RizzMeter",
        component: RizzMeter,
        icon: "emojione:letter-r"
    },
    {
        id: "Notes",
        component: Notes,
        icon: "noto:spiral-notepad"
    },
    {
        id: "About",
        component: About,
        icon: "flat-color-icons:about"
    }
])