import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const HELMETS = [
  {
    url: "https://cdn.poehali.dev/projects/a10a316f-7d74-45f3-9bd8-8d0a2a1a703b/bucket/23dde639-fb13-4df8-b852-f6754092730c.jpg",
    label: "Белый · Звёздочки",
    color: "Классический",
  },
  {
    url: "https://cdn.poehali.dev/projects/a10a316f-7d74-45f3-9bd8-8d0a2a1a703b/bucket/b45bf7e3-35ef-49f4-8c04-204c98241169.JPG",
    label: "Розовый · Круглые отверстия",
    color: "Для девочек",
  },
  {
    url: "https://cdn.poehali.dev/projects/a10a316f-7d74-45f3-9bd8-8d0a2a1a703b/bucket/90d5b4f1-966e-4ff6-a285-7cb2c4ddd477.JPG",
    label: "Голубой · Звёздочки",
    color: "Для мальчиков",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [active, setActive] = useState(0)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            О продукте
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Краниальный ортез ORTHOCRAN</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-20">
          {/* Галерея шлемов */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
              <img
                src={HELMETS[active].url}
                alt={HELMETS[active].label}
                className="h-56 w-full object-contain p-4 transition-all duration-500 md:h-72"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 backdrop-blur-md">
                <span className="font-mono text-xs text-foreground/90">{HELMETS[active].color}</span>
              </div>
            </div>
            <div className="flex gap-3">
              {HELMETS.map((h, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 overflow-hidden rounded-xl border-2 bg-white/5 transition-all duration-300 ${
                    active === i ? "border-foreground/60 scale-95" : "border-foreground/10 hover:border-foreground/30"
                  }`}
                >
                  <img
                    src={h.url}
                    alt={h.label}
                    className="h-16 w-full object-contain p-1 md:h-20"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Этапы */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-5">
            {[
              { number: "01", title: "Индивидуальное моделирование", category: "3D-сканирование · Точная подгонка", direction: "right" },
              { number: "02", title: "Современные материалы", category: "Лёгкий полимер · Гипоаллергенно · Вентиляция", direction: "left" },
              { number: "03", title: "Медицинская сертификация", category: "ТУ 32.50.22-001-90529879-2019", direction: "right" },
              { number: "04", title: "Сопровождение лечения", category: "Осмотры · Коррекция · Консультации", direction: "left" },
            ].map((step, i) => {
              const revealClass = !isVisible
                ? step.direction === "right" ? "translate-x-16 opacity-0" : "-translate-x-16 opacity-0"
                : "translate-x-0 opacity-100"
              return (
                <div
                  key={i}
                  className={`group flex items-baseline gap-4 border-b border-foreground/10 pb-4 transition-all duration-700 hover:border-foreground/20 md:gap-6 ${revealClass}`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <span className="font-mono text-xs text-foreground/30 group-hover:text-foreground/50">{step.number}</span>
                  <div>
                    <h3 className="font-sans text-lg font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                      {step.title}
                    </h3>
                    <p className="font-mono text-xs text-foreground/50">{step.category}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
