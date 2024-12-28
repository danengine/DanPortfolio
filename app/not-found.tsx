import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="mt-24 flex items-center justify-center font-poppins">
      <div className="w-full max-w-md p-8 bg-white text-center">
        <AlertCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="w-full mb-4">
          <Link href="https://danengine.tech">Go Back Home</Link>
        </Button>
        <div className="text-sm text-gray-500">
          Powered By DanEngine
        </div>
      </div>
    </div>
  )
}