import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function AboutText() {
  const container = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.from(labelRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      }).from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1.2,
          delay: 0.1,
          ease: 'power2.out',
        },
        '-=0.6'
      )
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative flex w-full flex-col justify-center bg-transparent px-6 py-10 md:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Label */}
        <div ref={labelRef} className="mb-4 flex items-center gap-3 md:ml-32">
          <div className="h-1.5 w-1.5 bg-[#00ffff]" />
          <span
            className="text-sm tracking-[0.2em] text-white uppercase"
            style={{ fontFamily: 'Unison Pro', fontWeight: 400 }}
          >
            About Agnitus
          </span>
        </div>

        {/* Main Text Content */}
        <div className="w-full">
          <p
            ref={textRef}
            className="text-justify indent-20 text-xl leading-relaxed text-white md:ml-32 md:indent-48 md:text-[24px] md:leading-[1.4]"
            style={{ fontFamily: 'Unison Pro', fontWeight: 700 }}
          >
            LOREM IPSUM ET UT VOLUTPAT ERAT FAUCIBUS MAURIS VIVERRA AUCTOR RISUS
            IACULIS ULTRICES QUAM GRAVIDA AUCTOR RISUS IACULIS ULTRICES QUAM
            GRAVIDA AUCTOR RISUS IACULIS ULTRICES QUAM GRAVIDA AUCTOR RISUS
            IACULIS ULTRICES QUAM GRAVIDA .
          </p>
        </div>
      </div>
    </section>
  )
}
