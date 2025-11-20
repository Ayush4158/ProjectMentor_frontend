import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AiGithubPushEventSuggestion = () => {

  const { id } = useParams();
  const [isAccessToken, setIsAccessToken] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [aiSuggestion, setAiSuggestion] = useState([])
  const [loading, setLoading] = useState(true)


  const fetchData = async() => {
    try {
      const [statusRes, ProjectRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/github-status`, {withCredentials: true}),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/project/getProject/${id}`, {withCredentials: true})
      ])

      setIsAccessToken(statusRes.data.data.connected);

      if(ProjectRes.status === 200){
        setProjectName(ProjectRes.data.name);
        setAiSuggestion(ProjectRes.data.aiSuggestion)
      }
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[id])

  if(loading) return <div>Loading...</div>

  return (
    <div>
      {projectName}
      {
        !isAccessToken ? (
          <button>Connect Github</button>
        ) : (
          <div>
            {
              aiSuggestion ? (
                  aiSuggestion?.map((sug: any) => {
                    return <div key={sug.commitMessage}>{sug.suggestion}</div>
                  })
              ) : (
                <div>No suggestion</div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default AiGithubPushEventSuggestion
