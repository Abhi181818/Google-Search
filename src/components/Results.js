import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import ReactPlayer from 'react-player'
import Loading from './Loading'
import { useResultContext } from '../context/GlobalContext'
const Results = () => {
  const { results, isLoading, getResult, searchTerm, title } = useResultContext();
  const location = useLocation();
  useEffect(() => {
    getResult()
    // console.log(results )
  }, [])
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='flex gap-4 flex-wrap justify-center items-center space-y-6 '>
      {results?.results?.map((elem) => {
        return (
          <div className='md:w-2/5 w-full'>
            <a href={elem.url} target='_blank' rel='noreferrer'>
              <p className='text-lg hover:underline text-blue-700'>{elem.title}</p>
              <p className='text-sm hover:underline text-blue-700'>
                {elem.url > 30 ? elem.url.substring(0, 30) : elem.url}
              </p>
              <p className='text-sm'>
                {elem.description > 30 ? elem.description.substring(0, 30) : elem.description}
              </p>
            </a>
          </div>
        )
      })}
    </div>
  )
}
export default Results
