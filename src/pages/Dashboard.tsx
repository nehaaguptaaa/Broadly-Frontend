import { useEffect, useState } from 'react'
import PinCard from '../components/PinCard'
import api from '../api/axios'

export default function Dashboard() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/shots')
      .then((res) => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load shots', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="ml-64 p-6">
        <p className="text-lg text-gray-500">Loading feed...</p>
      </div>
    )
  }

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Home Feed</h2>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-6">
              <PinCard
                image={`http://localhost:8080${post.image}`}
                title={post.title}
                author={post.userName ?? 'Unknown'}
                authorAvatar={post.userAvatar ?? '/default-avatar.png'}
                likes={post.likesCount ?? 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
