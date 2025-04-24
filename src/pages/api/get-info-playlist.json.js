import { allPlaylists, songs as allSongs } from "../../lib/data";

export async function GET({ params, request}){
    // get the id from the url search params
    const { url } = request
    // const[ , querystring ] = url.split('?')
    // const searchParams = new URLSearchParams
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playList = allPlaylists.find((playList) => playList.id === id)
    const songs = allSongs.filter(song => song.albumId === playList?.albumId)

    return new Response(JSON.stringify({ playList, songs }), {
        headers: { 'content-type': 'application/json' }
    })
}