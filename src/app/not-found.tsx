import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <h1 className="text-8xl font-headline font-bold text-primary">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page Not Found
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Oops! It seems you've ventured into uncharted territory.
      </p>
      <Link href="/">
        <Button className="mt-8">Go Back Home</Button>
      </Link>
    </div>
  )
}
