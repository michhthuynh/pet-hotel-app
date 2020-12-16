import React, { ChangeEvent, FormEvent, useState } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService"
import { toast } from 'react-toastify';
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

function VideoForm() {

  const history = useHistory()

  const params = useParams<Params>()
  
  const initialState = {
    title: "",
    description: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(initialState);

  const handInputChange = (e: InputChange) =>{
      setVideo({...video,[e.target.name]: e.target.value})
  }
  
  const handSubmit = async (e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(!params.id)
    {
      await videoService.createVideo(video);
      toast.success('New video added')
      setVideo(initialState)  
    }
    else
    {
      await videoService.updateVideo(video,params.id);
      toast.success('Updated video success !')
      setVideo(initialState)  
    }
     
    history.push('/')
  }

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const {title, description, url} = res.data;
    setVideo({title, description, url});
  }

  useEffect(() => {
    if(params.id) getVideo(params.id);
  }, [params.id]);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  type="url"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write some thing about video"
                  onChange={handInputChange}
                  value={video.description}
                ></textarea>
              </div>
              {
                params.id?
                <button className="btn btn-primary">Update Video</button>
                :
                <button className="btn btn-primary">Create Video</button>
              }
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
