import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id, size = 'small' }) {
    const { currentMusic,
        isPlaying,
        setIsPlaying,
        setCurrentMusic
    } = usePlayerStore(state => state)

    const isPlayingPlayList = isPlaying && currentMusic?.playList.id === id

    const handleClick = () => {


        if (isPlayingPlayList) {
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playList } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playList, song: songs[0] })
            })

        // setCurrentMusic({
        //     playList: {
        //         id
        //     }
        // })
        // setIsPlaying(!isPlaying)
    }

    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 hover:scale-105 transition hover:bg-green-400 p-4">
            {isPlayingPlayList ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
    )
}