import { Itrack } from "./track";

export interface Ialbum{
    name: string,
    releaseDate: string,
    coverImage: string,
    tracks: Itrack[]
}