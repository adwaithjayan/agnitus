import { useEffect, useState } from 'react'
import gsap from 'gsap'

const TEXT = 'AGNITUS'

export default function Landing() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate from 0 to length
      gsap.to(
        { value: 0 },
        {
          value: TEXT.length,
          duration: 1.5,
          delay: 0.5,
          ease: 'none', // Linear typewriter speed
          onUpdate: function () {
            // Update state with current integer value
            setVisibleCount(Math.round(this.targets()[0].value))
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  // Helper to render text with precise opacity control
  const renderText = () => (
    <>
      {TEXT.split('').map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleCount ? 1 : 0,
            transition: 'opacity 0.1s ease-out', // Slight fade for smoothness
          }}
        >
          {char}
        </span>
      ))}
    </>
  )

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Mobile View */}
      <div className="relative flex h-full w-full flex-col overflow-hidden md:hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src="/mobile_logo.svg"
            alt="Mobile Background"
            className="h-full w-full object-contain opacity-50"
          />
        </div>

        {/* Text Content */}
        <div className="pointer-events-none z-20 mt-32 flex shrink-0 flex-col items-center justify-center text-center">
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
        <div className="pointer-events-none relative z-10 flex min-h-0 flex-1 items-end justify-center">
          <img
            src="/p.svg"
            alt="Phoenix"
            className="absolute -bottom-[2vh] left-[25%] h-[115%] w-auto max-w-none -translate-x-1/2 object-bottom drop-shadow-[25px_25px_35px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden h-full w-full md:block">
        <div className="flex h-dvh w-full items-center justify-center">
          <img
            src="/main_logo.svg"
            alt="Main Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Layer 1: White Text Fill (Behind Jett) */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center pb-3">
          <h1
            className="text-[14vw] leading-none font-normal text-[#F5F5F5]"
            style={{ fontFamily: 'ValorantFont' }}
          >
            {renderText()}
          </h1>
        </div>

        {/* Layer 2: Jett Character */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 flex h-screen w-full items-end justify-end pr-[10%]">
          <img
            src="/j.svg"
            alt="Jett"
            className="h-[115%] w-auto max-w-none object-contain object-bottom drop-shadow-[25px_25px_35px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Layer 3: Text Stroke (In Front of Jett) */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center pb-3">
          <h1
            className="text-[14vw] leading-none font-normal text-transparent"
            style={{
              fontFamily: 'ValorantFont',
              WebkitTextStrokeWidth: '1.84px',
              WebkitTextStrokeColor: '#F5F5F5',
            }}
          >
            {renderText()}
          </h1>
        </div>
      </div>
    </div>
  )
}
