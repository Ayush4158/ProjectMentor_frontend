import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AiSuggestionCard from '../../components/AiSuggestionCard';
import ConnectToGithub from '../../components/ConnectToGithub';
import Loading from '../../components/Loading';

type AiSuggestionProp = {
    commitMessage: string,
    suggestion: string,
    createdAt: Date
  }

type ThemeType = {
  theme: string;
};

const AiGithubPushEventSuggestion:React.FC<ThemeType> = ({theme}) => {

  const { id } = useParams();
  const [isAccessToken, setIsAccessToken] = useState(false)
  // const [projectName, setProjectName] = useState('')
  const [aiSuggestion, setAiSuggestion] = useState<AiSuggestionProp[]>([])
  const [loading, setLoading] = useState(true)


  const fetchData = async() => {
    try {
      const [statusRes, ProjectRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/github-status`, {withCredentials: true}),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/project/getProject/${id}`, {withCredentials: true})
      ])

      setIsAccessToken(statusRes.data.data.connected);

      if(ProjectRes.status === 200){
        // setProjectName(ProjectRes.data.name);
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

  if(loading) return <Loading/>

  return (
    <div>
      {
        !isAccessToken ? (
          <ConnectToGithub theme={theme}/>
        ) : (
          <div>
            {
              aiSuggestion ? (
                aiSuggestion.map((sug:AiSuggestionProp) => {
                  return <div>
                    <AiSuggestionCard suggestion={sug} />
                  </div>
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
