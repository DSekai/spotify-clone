import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, f as renderSlot, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_DqlOYCEt.mjs';
import cn from 'clsx';
import { p as playlists } from './data_CGaVNlqr.mjs';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "E:/dev/spotify-clone/src/icons/Library.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "E:/dev/spotify-clone/src/icons/Home.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "E:/dev/spotify-clone/src/icons/Search.astro", void 0);

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "E:/dev/spotify-clone/src/components/SideMenuItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400">${artistsString}</span> </div> </a>`;
}, "E:/dev/spotify-clone/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})}
Home
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", $$Search, {})}
Search
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Library", $$Library, {})}
Your Library
` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "E:/dev/spotify-clone/src/components/AsideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "E:/dev/spotify-clone/node_modules/.pnpm/astro@4.16.18_@types+node@22.15.0_rollup@4.40.0_typescript@5.8.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { playList: null, song: null, songs: []},
    volume: 1,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic})
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = ({ className }) => /* @__PURE__ */ jsx("svg", { className, role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" }) });
const Play = ({ className }) => /* @__PURE__ */ jsx("svg", { className, role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" }) });
const VolumeSilence = () => /* @__PURE__ */ jsxs("svg", { fill: "currentColor", role: "presentation", height: "16", width: "16", "aria-hidden": "true", "aria-label": "Volumen apagado", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
  /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
] });
const Volume = () => /* @__PURE__ */ jsxs("svg", { fill: "currentColor", role: "presentation", height: "16", width: "16", "aria-hidden": "true", "aria-label": "Volumen alto", id: "volume-icon", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
  /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
] });
const CurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `
        flex items-center gap-5 relative
        overflow-hidden
      `,
      children: [
        /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
        ] })
      ]
    }
  );
};
const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  const formatTime = (time) => {
    if (time == null) return `0:00`;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const duration = audio?.current?.duration ?? 0;
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3 text-xs pt-2", children: [
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12 text-right", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        value: [currentTime],
        max: audio?.current?.duration ?? 0,
        min: 0,
        className: "w-[400px]",
        onValueChange: (value) => {
          const [newCurrentTime] = value;
          audio.current.currentTime = newCurrentTime;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "opacity-50 w-12", children: duration ? formatTime(duration) : "0:00" })
  ] });
};
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilence = volume < 0.1;
  const handleClickVolume = () => {
    if (isVolumeSilence) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2", children: [
    /* @__PURE__ */ jsx("button", { className: "opacity-70 hover:opacity-100 transition", onClick: handleClickVolume, children: isVolumeSilence ? /* @__PURE__ */ jsx(VolumeSilence, {}) : /* @__PURE__ */ jsx(Volume, {}) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [100],
        max: 100,
        min: 0,
        value: [volume * 100],
        className: "w-[95px]",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};
function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore((state) => state);
  const audioRef = useRef();
  useRef();
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    const { song, playList, songs } = currentMusic;
    if (song) {
      const src = `/music/${playList?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full px-1 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-col items-center", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-2", onClick: handleClick, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
      /* @__PURE__ */ jsx(SongControl, { audio: audioRef }),
      /* @__PURE__ */ jsx("audio", { ref: audioRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(VolumeControl, {}) })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex-col flex overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] h-[80px]" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "E:/dev/spotify-clone/src/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>  </body></html>`;
}, "E:/dev/spotify-clone/src/layouts/Layout.astro", "self");

function CardPlayButton({ id, size = "small" }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore((state) => state);
  const isPlayingPlayList = isPlaying && currentMusic?.playList.id === id;
  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playList } = data;
      setIsPlaying(true);
      setCurrentMusic({ songs, playList, song: songs[0] });
    });
  };
  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";
  return /* @__PURE__ */ jsx("button", { onClick: handleClick, className: "card-play-button rounded-full bg-green-500 hover:scale-105 transition hover:bg-green-400 p-4", children: isPlayingPlayList ? /* @__PURE__ */ jsx(Pause, { className: iconClassName }) : /* @__PURE__ */ jsx(Play, { className: iconClassName }) });
}

export { $$Layout as $, CardPlayButton as C };
