import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/authors";
import { SET_POST } from "../graphql/posts";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
export const NewPost = () => {

  const history = useHistory()
  const location = useLocation()
  // const {loading:loadingA, error: errorA, data: dataA} = useQuery(GET_AUTHORS)
  const [savePost,{loading:loadingP, error:errorP,data:dataP}] = useMutation(SET_POST)

  // console.log(dataA)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [cardImg, setCardImg] = useState('')
  const [coverImg, setCoverImg] = useState('')
  
  // const { from } = { from: { pathname: '/' } }
  const slug = title.toLowerCase().replace(/ /gi, '-')
  const fecha =  new Date().toISOString()
  const setPostQuery = () => {
    savePost({
      variables:{
        title,
        body,
        cardImg,
        coverImg,
        slug:slug,
        date:fecha
      }
    })
  }
  // if (loadingA) return <p>Loading authors...</p>; 
  // if (errorA) return <p>Error in authors :(</p>;
  if (loadingP) return <p>Loading...</p>;
  if (errorP) return <p>Error :(</p>;
  if (dataP && dataP.savePost) {
    console.log("Exito")
  }

  return (
    <>
      <h2>New Posts view</h2>
      <section>
        <form>
          <ul>
            <li>
              <label>Title:</label>
              <input type="text" 
                  onChange={e => setTitle(e.target.value)}
              />
            </li>
            <li>
              <label>Body:</label>
              <textarea onChange={e => setBody(e.target.value)}
              />
            </li>
            <li>
              <label>Card Imagen:</label>
              <input type="img" 
                  onChange={e => setCardImg(e.target.value)}
              />
            </li>
            <li>
              <label>Cover Imagen:</label>
              <input type="img" 
                  onChange={e => setCoverImg(e.target.value)}
              />
            </li>
            <li>
              <label>Author</label>
              <select name="authors" id="author-select">
                {/* {dataA.authors.map(author => (
                  <option key={author.id} value={author.name}>
                    {author.name}
                  </option>
                )

                )} */}
                <option value="">--Authors--</option>
                <option value="Gilberto">Gilbert</option>
                <option value="Laura">Laura</option>
                <option value="Allesandra">Allesandra</option>
              </select>
            </li>
            <li>
              <label>Category</label>
              <select name="categories" id="category-select">
                <option value="">--Category--</option>
                <option value="Astronomy">Astronomy</option>
                <option value="Maths">Maths</option>
                <option value="SoftwareEngineer">Software engineer</option>
                <option value="AI">Artificial Intelligence</option>
              </select>
            </li>
            <li class="button">
              <button onClick={setPostQuery}>Save Post</button>
            </li>
          </ul>
        </form>
      </section>
    </>
  )
}