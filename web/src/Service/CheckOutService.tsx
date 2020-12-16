import axios from 'axios'
import { Video } from '../models/Video'
const API = 'http://localhost:4000'

export const getVideos = async () => {
    return  await axios.get<Video[]>(`${API}/videos`)
}  

export const getVideo = async (id: string) => {
    return  await axios.get<Video>(`${API}/videos/${id}`)
}  

export const createVideo = async (video : Video) => {
    return  await axios.post(`${API}/videos`,video)
} 

export const updateVideo = async (video : Video,id: string) => {
    return  await axios.put(`${API}/videos/${id}`,video)
} 

export const deleteVideo = async (id: string) => {
    return  await axios.delete(`${API}/videos/${id}`)
} 

export const searchVideo = async (title:string,description:string) => {

    return  await axios.get<Video[]>(`${API}/videos/search/?title=${title}&description=${description}`)
} 


