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

      {/* Crop Layout Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 p-6">
        <div className="relative h-full w-full border-r border-l border-white/20">
          <div className="absolute top-0 left-0 h-px w-[calc(50%-11rem)] bg-white/20" />
          <div className="absolute top-0 right-0 h-px w-[calc(50%-11rem)] bg-white/20" />
          <div className="absolute bottom-0 left-0 h-px w-[calc(50%-11rem)] bg-white/20" />
          <div className="absolute right-0 bottom-0 h-px w-[calc(50%-11rem)] bg-white/20" />
          {/* Top Left Corner */}
          <div className="absolute -top-[1px] -left-[1px] h-32 w-32 border-t-2 border-l-2 border-white" />
          {/* Top Right Corner */}
          <div className="absolute -top-[1px] -right-[1px] h-32 w-32 border-t-2 border-r-2 border-white" />
          {/* Bottom Right Corner */}
          <div className="absolute -right-[1px] -bottom-[1px] h-32 w-32 border-r-2 border-b-2 border-white" />
          {/* Bottom Left Corner */}
          <div className="absolute -bottom-px -left-[1px] h-32 w-32 border-b-2 border-l-2 border-white" />

          {/* Top Center Button */}
          <div className="group pointer-events-auto absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <div className="flex h-12 w-68 -skew-x-30 items-center justify-center border border-white bg-[#111111] p-1.5">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white">
                {/* Red Slide Overlay */}
                <div className="absolute inset-0 -translate-x-full bg-[#ff4655] transition-transform duration-300 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 skew-x-30 text-lg font-bold tracking-[0.2em] text-[#111111] transition-colors duration-300 group-hover:text-white">
                  Explore
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Center Text */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-6 text-sm font-medium tracking-[0.3em] text-white">
            NATIONAL LEVEL TECHFEST
          </div>

          {/* Corner Square Boxes */}
          {/* Top Left */}
          <div className="absolute -top-[1px] -left-[1px] flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#111111]">
            <img
              src="/logo.svg"
              alt="logo"
              className="aspect-square size-[32px] object-contain"
            />
          </div>
          {/* Top Right */}
          <div className="absolute -top-[1px] -right-[1px] flex h-[78px] w-[78px] translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#111111]">
            <img
              src="/logo.svg"
              alt="logo"
              className="aspect-square size-[32px] object-contain"
            />
          </div>
          {/* Bottom Right */}
          <div className="absolute -right-[1px] -bottom-[1px] flex h-[78px] w-[78px] translate-x-1/2 translate-y-1/2 items-center justify-center bg-[#111111]">
            <img
              src="/logo.svg"
              alt="logo"
              className="aspect-square size-[32px] object-contain"
            />
          </div>
          {/* Bottom Left */}
          <div className="absolute -bottom-px -left-px flex h-[78px] w-[78px] -translate-x-1/2 translate-y-1/2 items-center justify-center bg-[#111111]">
            <img
              src="/logo.svg"
              alt="logo"
              className="aspect-square size-[32px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
