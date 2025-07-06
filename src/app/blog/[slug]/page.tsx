import Link from 'next/link'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">The Future of AI in Web Development</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Mar 16, 2024</div>
        <div className="mb-8 text-gray-600 dark:text-gray-300">
          <p>Artificial intelligence is rapidly changing the way we build and maintain websites. In this post, we explore the latest trends and how your business can benefit from AI-powered solutions.</p>
        </div>
        <Link href="/blog" className="text-primary underline">← Back to Blog</Link>
      </div>
    </div>
  )
} 