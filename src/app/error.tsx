"use client"

import { RefreshCw } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Button } from "@/components/ui/button"
import { Wrapper } from "@/components/wrapper"

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const router = useRouter()

  return (
    <>
      {/* deco */}
      <div className="relative">
        {/* left */}
        <div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-56">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-56">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* right */}
        <div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-48 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[30rem]">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(-50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(-50%-80rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-48 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-[30rem]">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(-50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[180deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(-50%-86rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper className="flex h-full w-full items-center justify-center">
        <Wrapper className="space-y-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            OO<span className="text-primary">PS!</span> :(
          </h1>
          {error ? (
            <p className="text-lg font-semibold">
              Error: <span className="text-alert">{error.message}</span>
            </p>
          ) : null}
          <p className="text-lg text-muted-foreground">
            Looks like something went wrong. If this error persists please
            contact{" "}
            <Link
              href="/contact/support"
              className="underline underline-offset-2 hover:text-primary">
              support
            </Link>
            .
          </p>
          <div className="flex items-center justify-center gap-2">
            <Button onClick={() => router.push("/")} variant="secondary">
              Go home
            </Button>
            <Button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
              variant="secondary">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try again
            </Button>
          </div>
        </Wrapper>
      </MaxWidthWrapper>
    </>
  )
}

export default ErrorPage
