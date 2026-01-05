import { useEffect, useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { getDaysRemaining } from '../utils/dateUtils'
import Lenis from 'lenis'
import StarryBackground from '../components/StarryBackground'
import HyperText from '../components/HyperText'
import gsap from 'gsap'

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const daysRemaining = getDaysRemaining('2026-02-27')

  const mobileProgressRef = useRef<HTMLDivElement>(null)
  const desktopProgressRef = useRef<HTMLDivElement>(null)

  const mobileHeaderRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLDivElement>(null)
  const statsContainerRef = useRef<HTMLDivElement>(null)

  // Use the hook to animate both progress bars
  useScrollProgress([mobileProgressRef, desktopProgressRef])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Navbar Entrance Animations
    const ctx = gsap.context(() => {
      // Mobile Header: Slide down
      gsap.from(mobileHeaderRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
      })

      // Desktop Menu Button: Fade in
      gsap.from(menuButtonRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.4,
      })

      // Desktop Stats: Staggered slide down
      if (statsContainerRef.current) {
        const statsItems = statsContainerRef.current.children
        gsap.from(statsItems, {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.6,
        })
      }
    })

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      ctx.revert()
    }
  }, [])

  return (
    <div className="bg-background relative min-h-dvh w-full">
      <StarryBackground />
      {/* Mobile Header */}
      <div
        ref={mobileHeaderRef}
        className="border-border-custom bg-background fixed top-6 left-1/2 z-50 flex h-14 w-[90%] -translate-x-1/2 items-center justify-between overflow-hidden rounded-[5px] border px-4 md:hidden"
      >
        {/* Scroll Progress Overlay */}
        <div
          ref={mobileProgressRef}
          className="absolute top-0 bottom-0 left-0 z-0 w-0 bg-white/10"
        />
        <HyperText
          text="AGNITUS"
          className="relative z-10 pt-1 text-xl leading-none font-normal text-white"
          style={{ fontFamily: 'var(--font-valorant)' }}
          delay={1.2} // Delay until after the header slides down
        />
        <div
          className="group relative z-10 flex cursor-pointer flex-col items-end gap-1.5"
          onClick={() => setIsSidebarOpen(true)}
        >
          <div className="group-hover:bg-primary h-0.5 w-6 rounded-full bg-white transition-all duration-300" />
          <div className="group-hover:bg-primary h-0.5 w-4 rounded-full bg-white transition-all duration-300 group-hover:w-6" />
        </div>
      </div>

      {/* Desktop Grid Layout Overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 hidden px-8 py-6 md:block md:px-16 md:py-10">
        <div className="border-border-custom relative flex h-full w-full flex-col rounded-[10px] border">
          {/* Top Header Row */}
          <div className="border-border-custom relative flex h-20 w-full border-b">
            {/* Scroll Progress Overlay */}
            <div
              ref={desktopProgressRef}
              className="absolute top-0 bottom-0 left-0 z-0 w-0 bg-white/10"
            />
            {/* Menu Button (Top Left Cell) */}
            <div
              ref={menuButtonRef}
              className="group border-border-custom pointer-events-auto relative z-10 flex aspect-square h-full w-20 cursor-pointer items-center justify-center border-r transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <div className="flex flex-col items-start gap-2">
                <div className="group-hover:bg-primary h-1 w-6 rounded-full bg-white transition-all duration-300 group-hover:w-10" />
                <div className="group-hover:bg-primary h-1 w-10 rounded-full bg-white transition-all duration-300" />
              </div>
            </div>

            {/* Stats Header (Top Right Cell) */}
            <div className="relative z-10 flex flex-1 items-center justify-end px-6 sm:px-10">
              <div
                ref={statsContainerRef}
                className="flex items-center gap-4 text-xs leading-none font-medium tracking-wide text-white sm:gap-8 sm:text-sm"
              >
                {/* Events */}
                <div className="flex items-center gap-2">
                  <img src="/i1.svg" alt="Events" className="h-4 w-auto" />
                  <span>0/10 Events</span>
                </div>

                {/* Days */}
                <div className="flex items-center gap-2">
                  <img src="/i3.svg" alt="Days" className="h-4 w-auto" />
                  <span>{daysRemaining} Days</span>
                </div>

                {/* Partners */}
                <div className="flex items-center gap-2">
                  <img src="/i4.svg" alt="Partners" className="h-4 w-auto" />
                  <span>50 Partners</span>
                </div>

                {/* Participants */}
                <div className="flex items-center gap-2">
                  <img
                    src="/i5.svg"
                    alt="Participants"
                    className="h-4 w-auto"
                  />
                  <span>2000+ participants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Body Row */}
          <div className="flex w-full flex-1">
            {/* Left Sidebar Column */}
            <div className="border-border-custom w-20 border-r">
              {/* Sidebar content can go here if needed */}
            </div>
            {/* Main Content Area - This is where Outlet *could* conceptually be, but for z-index reasons we render it as a sibling or underneath */}
            <div className="relative flex-1"></div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <Outlet />

      {/* Global Sidebar (Modal) */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  )
}
