import { useState } from 'react'
import api from '../api/axios'

interface PinCardProps {
  shotId: number
  image: string
  title: string
  author: string
  authorAvatar: string
  likes: number
}

export default function PinCard({
  shotId,
  image,
  title,
  author,
  authorAvatar,
  likes
}: PinCardProps) {

  const userId = Number(localStorage.getItem('userId')) || 1

  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)

  const handleLike = async () => {
    try {
      if (isLiked) {
        await api.delete(`/likes?userId=${userId}&shotId=${shotId}`)
        setLikeCount(prev => prev - 1)
      } else {
        await api.post(`/likes?userId=${userId}&shotId=${shotId}`)
        setLikeCount(prev => prev + 1)
      }
      setIsLiked(!isLiked)
    } catch (err) {
      console.error('Like action failed', err)
    }
  }

  return (
    <div className="group relative">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-3">

              {/* LIKE */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleLike()
                }}
                className={`p-3 rounded-full ${isLiked ? 'bg-red-500' : 'bg-white'} transition-colors`}
              >
                <svg
                  className={`w-5 h-5 ${isLiked ? 'text-white fill-white' : 'text-gray-700'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* SAVE (next step) */}
              <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                🔖
              </button>

            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <img
              src={authorAvatar}
              alt={author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-600">{author}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-600">{likeCount} likes</span>
          </div>
        </div>
      </div>
    </div>
  )
}
