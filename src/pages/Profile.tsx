import { useState } from 'react'
import PinCard from '../components/PinCard'
import { placeholderPosts } from '../data/posts'

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts')
  const userPosts = placeholderPosts.slice(0, 6) // User's posts

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="flex items-center gap-6">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-red-600"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
              <p className="text-gray-600 mb-4">@johndoe</p>
              <div className="flex gap-6">
                <div>
                  <span className="font-semibold text-gray-800">{userPosts.length}</span>
                  <span className="text-gray-600 ml-2">Posts</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">1.2K</span>
                  <span className="text-gray-600 ml-2">Followers</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">456</span>
                  <span className="text-gray-600 ml-2">Following</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Creative designer sharing inspiration and ideas. Love photography, design, and travel.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'posts'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'saved'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Posts Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
          {activeTab === 'posts' ? (
            userPosts.map((post) => (
              <div key={post.id} className="break-inside-avoid mb-6">
                <PinCard
                  image={post.image}
                  title={post.title}
                  author={post.author}
                  authorAvatar={post.authorAvatar}
                  likes={post.likes}
                />
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 text-gray-500">
              No saved posts yet
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
