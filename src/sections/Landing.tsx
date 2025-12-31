export default function Landing() {
  return (
    <div className="relative h-screen w-full overflow-x-hidden bg-[#111111]">
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
          className="text-[13vw] leading-none font-normal text-[#F5F5F5]"
          style={{ fontFamily: 'ValorantFont' }}
        >
          AGNITUS
        </h1>
      </div>

      {/* Layer 2: Jett Character */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[85vh] w-auto -translate-x-1/2">
        <img src="/JET.svg" alt="Jett" className="h-full w-full object-cover" />
      </div>

      {/* Layer 3: Text Stroke (In Front of Jett) */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center pb-3">
        <h1
          className="text-[13vw] leading-none font-normal text-transparent"
          style={{
            fontFamily: 'ValorantFont',
            WebkitTextStrokeWidth: '1.84px',
            WebkitTextStrokeColor: '#F5F5F5',
          }}
        >
          AGNITUS
        </h1>
      </div>

      {/* Grid Layout Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 px-8 py-6 sm:px-12 sm:py-8 md:px-16 md:py-10">
        <div className="relative flex h-full w-full flex-col rounded-[10px] border border-white">
          {/* Top Header Row */}
          <div className="flex h-20 w-full border-b border-white">
            {/* Menu Button (Top Left Cell) */}
            <div className="pointer-events-auto flex aspect-square h-full w-20 items-center justify-center border-r border-white">
              <div className="flex flex-col items-start gap-2">
                <div className="h-1 w-6 rounded-full bg-white" />
                <div className="h-1 w-10 rounded-full bg-white" />
              </div>
            </div>

            {/* Stats Header (Top Right Cell) */}
            <div className="flex flex-1 items-center justify-end px-6 sm:px-10">
              <div className="flex items-center gap-4 text-xs leading-none font-medium tracking-wide text-white sm:gap-8 sm:text-sm">
                {/* Events */}
                <div className="flex items-center gap-2">
                  <img src="/i1.svg" alt="Events" className="h-4 w-auto" />
                  <span>0/10 Events</span>
                </div>

                {/* Days */}
                <div className="flex items-center gap-2">
                  <img src="/i3.svg" alt="Days" className="h-4 w-auto" />
                  <span>24 Days</span>
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
            <div className="w-20 border-r border-white">
              {/* Sidebar content can go here if needed */}
            </div>
            {/* Main Content Area */}
            <div className="relative flex-1">{/* Content goes here */}</div>
          </div>

          {/* Bottom Logos (Absolute positioned on corners) */}
          <div className="absolute -bottom-px -left-px flex h-14 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center bg-[#111111]">
            <img src="/logo.svg" alt="Logo" className="w-8" />
          </div>

          <div className="absolute -right-px -bottom-px flex h-14 w-12 translate-x-1/2 translate-y-1/2 items-center justify-center bg-[#111111]">
            <img src="/logo.svg" alt="Logo" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
