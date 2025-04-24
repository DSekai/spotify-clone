/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, d as renderComponent, b as addAttribute, e as renderTransition } from '../../chunks/astro/server_DqlOYCEt.mjs';
import { $ as $$Layout, C as CardPlayButton } from '../../chunks/CardPlayButton_CQjiijkw.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_CGaVNlqr.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Time = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "E:/dev/spotify-clone/src/icons/Time.astro", void 0);

const $$Astro$1 = createAstro();
const $$MusicTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/0"> <thead> <tr class="text-gray-300 text-sm font-light"> <th class="px-4 py-2">#</th> <th class="px-4 py-2">Title</th> <th class="px-4 py-2">Album</th> <th class="px-4 py-2">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead><tbody> <tr class="h-[16px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="text-gray-400 text-sm font-light hover:bg-white/10 everflow-hidden transition duration-300"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">${index + 1}</td> <td class="px-4 py-2 flex gap-1"> <picture> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-11 h-11"> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-4 py-2 rounded-tr-lg rounded-br-lg ">${song.duration}</td> </tr>`)} </tbody> </table>`;
}, "E:/dev/spotify-clone/src/components/MusicTable.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full overflow-x-hidden bg-zinc-900"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- <-- <PageHeader /> --> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square w-52 h-52 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title} by ${playlist?.artists}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "jkadwh6j", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">PlayList</h2> <div> <h1 class="text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "7qurg64c", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "h7a2vprm", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="nt-1"> <span class="text-white">${playListSongs.length} songs</span>, 3h aprox
</p> </div> </div> </div> </header> <div class="pl-6 pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "size": "large", "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/dev/spotify-clone/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <div class="relative z-10 px-6 pt-10"> <!-- <Greetings/> --> <div class="flex flex-wrap mt-6 gap-4"></div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-10"></div> <section class="p-6"> ${renderComponent($$result2, "MusicTable", $$MusicTable, { "songs": playListSongs })} </section> </div> ` })}`;
}, "E:/dev/spotify-clone/src/pages/playlist/[id].astro", "self");

const $$file = "E:/dev/spotify-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
