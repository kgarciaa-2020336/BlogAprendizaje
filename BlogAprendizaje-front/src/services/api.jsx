import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3632/v1',
        timeout: 3000
    }
)

export const listPublication = async()=>{
    try{
        return await apiClient.get('/publication/listPublication/')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const coursePublication = async(COURSE)=>{
    try{
        return await apiClient.get(`/publication/getCoursePublication/${COURSE}`)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const addComment = async(comment)=>{
    try{
        return await apiClient.post(`/Commentary/addComment/`, comment )
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const commentPublication = async(PUBLICATION)=>{
    try{
        return await apiClient.get(`/Commentary/getComment/${PUBLICATION}`)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}