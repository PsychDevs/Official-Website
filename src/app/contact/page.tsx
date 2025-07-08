export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition">Send Message</button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <div>Email: <a href="mailto:hello@aiagency.com" className="text-primary underline">hello@aiagency.com</a></div>
          <div>Phone: <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a></div>
          <div>Location: 123 AI Street, Tech City, World</div>
        </div>
      </div>
    </div>
  )
} 