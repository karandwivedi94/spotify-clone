import {IoAlbums,IoPulse} from "react-icons/io5"
import { MdPodcasts} from "react-icons/md"
import { IoMdMicrophone} from "react-icons/io"
import {BiBroadcast} from "react-icons/bi"
import {GiSydneyOperaHouse} from "react-icons/gi"


const SmallMenu = [
    {
    id: 1,
    icon: <GiSydneyOperaHouse/>,
    name: "Home",
    },
    {
    id: 2,
    icon: <IoAlbums/>,
    name: "Albums",
    },
    {
    id: 3,
    icon: <BiBroadcast/>,
    name: "Radio",
    },
    {
    id: 4,
    icon: <IoMdMicrophone/>,
    name: "Artist",
    },
    {
    id: 5,
    icon: <MdPodcasts/>,
    name: "Podcast",
    },
    {
    id: 6,
    icon: <IoPulse/>,
    name: "Discover",
    }
];

export {SmallMenu};