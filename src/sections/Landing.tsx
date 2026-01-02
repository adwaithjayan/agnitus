import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileJettRef = useRef<HTMLDivElement>(null)
  const desktopJettRef = useRef<HTMLDivElement>(null)
  const bgLogoRef = useRef<HTMLDivElement>(null)
  const textBehindRef = useRef<HTMLHeadingElement>(null)
  const textFrontRef = useRef<HTMLHeadingElement>(null)
  const mobileTextRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
        },
      })

      // Mobile Animations
      if (mobileJettRef.current) {
        tl.to(
          mobileJettRef.current,
          {
            opacity: 0,
            scale: 1.2,
            filter: 'blur(10px)',
            y: 50,
            ease: 'power2.inOut',
          },
          0
        )
      }

      if (mobileTextRef.current) {
        tl.to(
          mobileTextRef.current,
          {
            y: -100,
            opacity: 0,
            ease: 'power2.inOut',
          },
          0
        )
      }

      // Desktop Animations
      if (desktopJettRef.current) {
        tl.to(
          desktopJettRef.current,
          {
            opacity: 0,
            scale: 1.2,
            filter: 'blur(10px)',
            y: 100,
            ease: 'power2.inOut',
          },
          0
        )
      }

      if (bgLogoRef.current) {
        tl.to(
          bgLogoRef.current,
          {
            y: 150,
            opacity: 0.2,
            scale: 0.8,
            ease: 'power2.inOut',
          },
          0
        )
      }

      if (textBehindRef.current) {
        tl.to(
          textBehindRef.current,
          {
            y: -50,
            scale: 1.15,
            transformOrigin: 'center bottom',
            ease: 'power2.inOut',
          },
          0
        )
      }

      if (textFrontRef.current) {
        tl.to(
          textFrontRef.current,
          {
            y: -50,
            scale: 1.15,
            opacity: 0,
            transformOrigin: 'center bottom',
            ease: 'power2.inOut',
          },
          0
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="relative h-dvh w-full overflow-hidden bg-[#111111]"
    >
      {/* Mobile View */}
      <div className="relative block h-full w-full overflow-hidden md:hidden">
        {/* Main Image (Jett) */}
        <div
          ref={mobileJettRef}
          className="absolute top-16 right-0 bottom-0 left-0 z-0"
        >
          <img
            src="/jet_optimized.png"
            alt="Jett"
            className="h-full w-full object-cover object-[90%_0]"
          />
        </div>

        {/* Text Content */}
        <div
          ref={mobileTextRef}
          className="pointer-events-none absolute top-32 right-0 left-0 z-10 flex flex-col items-center justify-center text-center"
        >
          <h1
            className="text-7xl leading-none font-normal text-white"
            style={{ fontFamily: 'ValorantFont' }}
          >
            AGNITUS
          </h1>
          <p
            className="mt-2 text-4xl font-normal text-white"
            style={{ fontFamily: 'ValorantFont' }}
          >
            2026
          </p>
        </div>

        {/* Phoenix Character */}
        <div className="absolute bottom-0 left-1/2 z-0 h-[65%] w-full -translate-x-1/2 overflow-hidden">
          <img
            src="/Phoenix.svg"
            alt="Phoenix"
            className="h-full w-full object-cover object-[60%_100%]"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden h-full w-full md:block">
        <div
          ref={bgLogoRef}
          className="flex h-dvh w-full items-center justify-center"
        >
          <img
            src="/main_logo.svg"
            alt="Main Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Layer 1: White Text Fill (Behind Jett) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center pb-3">
          <h1
            ref={textBehindRef}
            className="text-[14vw] leading-none font-normal text-[#F5F5F5]"
            style={{ fontFamily: 'ValorantFont' }}
          >
            AGNITUS
          </h1>
        </div>

        {/* Layer 2: Jett Character */}
        <div
          ref={desktopJettRef}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-full w-full -translate-x-1/2 md:top-auto md:-bottom-64 md:h-[160vh] md:w-[85vw]"
        >
          <img
            src="/jet_optimized.png"
            alt="Jett"
            className="h-full w-full object-cover object-top md:object-center"
          />
        </div>

        {/* Layer 3: Text Stroke (In Front of Jett) */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center pb-3">
          <h1
            ref={textFrontRef}
            className="text-[14vw] leading-none font-normal text-transparent"
            style={{
              fontFamily: 'ValorantFont',
              WebkitTextStrokeWidth: '1.84px',
              WebkitTextStrokeColor: '#F5F5F5',
            }}
          >
            AGNITUS
          </h1>
        </div>
      </div>
    </div>
  )
}
