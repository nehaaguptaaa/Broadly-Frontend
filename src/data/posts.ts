export interface Post {
  id: number
  image: string
  title: string
  author: string
  authorAvatar: string
  likes: number
  description?: string
}

export const placeholderPosts: Post[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400',
    title: 'Beautiful Sunset Landscape',
    author: 'John Doe',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    likes: 234,
    description: 'Amazing sunset view from the mountains'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    title: 'Modern Kitchen Design',
    author: 'Jane Smith',
    authorAvatar: 'https://i.pravatar.cc/150?img=2',
    likes: 567,
    description: 'Minimalist kitchen with modern appliances'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=400',
    title: 'Cozy Living Room',
    author: 'Mike Johnson',
    authorAvatar: 'https://i.pravatar.cc/150?img=3',
    likes: 189,
    description: 'Warm and inviting living space'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    title: 'Mountain Adventure',
    author: 'Sarah Williams',
    authorAvatar: 'https://i.pravatar.cc/150?img=4',
    likes: 892,
    description: 'Hiking through beautiful mountain trails'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400',
    title: 'Delicious Food Recipe',
    author: 'David Brown',
    authorAvatar: 'https://i.pravatar.cc/150?img=5',
    likes: 445,
    description: 'Homemade pasta with fresh ingredients'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    title: 'Workspace Setup',
    author: 'Emily Davis',
    authorAvatar: 'https://i.pravatar.cc/150?img=6',
    likes: 321,
    description: 'Productive home office environment'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
    title: 'Nature Photography',
    author: 'Chris Wilson',
    authorAvatar: 'https://i.pravatar.cc/150?img=7',
    likes: 678,
    description: 'Capturing the beauty of nature'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    title: 'Fashion Style Ideas',
    author: 'Lisa Anderson',
    authorAvatar: 'https://i.pravatar.cc/150?img=8',
    likes: 234,
    description: 'Trendy outfits for every season'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    title: 'Music Studio',
    author: 'Tom Martinez',
    authorAvatar: 'https://i.pravatar.cc/150?img=9',
    likes: 156,
    description: 'Professional music production setup'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
    title: 'Team Collaboration',
    author: 'Amy Taylor',
    authorAvatar: 'https://i.pravatar.cc/150?img=10',
    likes: 423,
    description: 'Working together for success'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400',
    title: 'Travel Destination',
    author: 'Robert Lee',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    likes: 789,
    description: 'Beautiful places to visit'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    title: 'Art Gallery',
    author: 'Maria Garcia',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    likes: 234,
    description: 'Inspiring artwork collection'
  }
]
