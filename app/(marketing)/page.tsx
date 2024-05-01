import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return(<div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col
    lg:flex-row items-center justify-center p-4 gap-2">
    <div className="relative w-[204px] h-[240px] lg:w-[424px] lg:h-[424px]
    mb-8 lg:mb-0">
      <Image src="/SVG/Hello.svg" fill alt ="Anh"></Image>
    </div>
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-xl lg:text-2xl font-bold text-neutral-600 max-w-[480px] text-center">
        Learn, practice, and master new languages with Lango !
      </h1>
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full"></div>
      <div className="">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
            mode="modal"
            afterSignInUrl="/learn"
            afterSignUpUrl="/learn">
              <Button size="lg" variant="secondary" className="w-full">
                Get started!
              </Button>
            </SignUpButton>
            <SignInButton 
            mode="modal"
            afterSignInUrl="/learn"
            afterSignUpUrl="/learn">
              <Button size="lg" variant="primaryOutline" className="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
                Continue Learning
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  </div>)
}
