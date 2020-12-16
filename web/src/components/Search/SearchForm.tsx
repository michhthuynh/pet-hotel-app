import React, { ChangeEvent, useState, MouseEvent } from "react";
import { VideoSearch } from "../Videos/Video";

interface Props{
  loadVideoSearch: (title:string,description:string) => void;
}
const SearchForm = ({loadVideoSearch} :Props) => {
    const initialState = {
        title: "",
        description: "",
        }
    const [searchParam,setSearchParam] = useState<VideoSearch>(initialState)
    
    const handInputChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setSearchParam({...searchParam, [e.target.name]: e.target.value})
    }

    const handClickSearch = async(e : MouseEvent<HTMLButtonElement>) =>{
      loadVideoSearch(searchParam.title,searchParam.description);
    }
    return (
    <div className="mb-5">
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputEmail4">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Title"
            onChange ={handInputChange}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputPassword4">Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            onChange ={handInputChange}
          />
        </div>
      </div>
      <button  type="button" className="btn btn-primary" onClick={handClickSearch}>
          Search
      </button>
    </div>
  );
}

export default SearchForm;
