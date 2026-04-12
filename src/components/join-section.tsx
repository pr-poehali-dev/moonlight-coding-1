import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useReveal } from "@/hooks/use-reveal"

export function JoinSection() {
  const ref = useReveal()

  return (
    <section id="join" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron uppercase reveal">
          Как принять участие в съёмках
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto reveal">
          Хочешь сыграть роль в моих фильмах или сериалах? Всё просто — следуй инструкции ниже!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glow-border rounded-xl p-6 text-left reveal">
            <div className="text-red-500 font-orbitron text-3xl font-bold mb-3">01</div>
            <h3 className="text-white font-bold text-lg mb-2">Перейди в Discord</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Нажми кнопку ниже и вступи в мой Discord-сервер.
            </p>
          </div>
          <div className="glow-border rounded-xl p-6 text-left reveal">
            <div className="text-red-500 font-orbitron text-3xl font-bold mb-3">02</div>
            <h3 className="text-white font-bold text-lg mb-2">Найди плашку</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              На сервере найди раздел <span className="text-white font-semibold">«Запись на сериал»</span>.
            </p>
          </div>
          <div className="glow-border rounded-xl p-6 text-left reveal">
            <div className="text-red-500 font-orbitron text-3xl font-bold mb-3">03</div>
            <h3 className="text-white font-bold text-lg mb-2">Подай заявку</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Заполни заявление на участие и жди ответа!
            </p>
          </div>
        </div>

        <div className="reveal">
          <a href="https://discord.gg/aATeagGf4y" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white font-orbitron text-lg px-10 py-5 gap-3">
              <Icon name="MessageCircle" size={22} />
              Перейти в Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
