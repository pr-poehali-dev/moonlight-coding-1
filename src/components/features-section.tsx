export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron uppercase">Обо мне</h2>
          <p className="text-lg text-muted-foreground">Привет! Меня зовут Артём, никнейм — <span className="text-red-500 font-bold">KNIFE</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Левая колонка — основная биография */}
          <div className="space-y-6">
            <div className="glow-border rounded-xl p-6">
              <p className="text-sm text-red-500 font-orbitron uppercase mb-2">Возраст</p>
              <p className="text-foreground text-lg font-bold">16 лет</p>
            </div>
            <div className="glow-border rounded-xl p-6">
              <p className="text-sm text-red-500 font-orbitron uppercase mb-2">Чем занимаюсь</p>
              <p className="text-muted-foreground leading-relaxed">
                Снимаю ролики на YouTube, а также создаю фильмы и сериалы в Minecraft. 4 месяца назад во мне проснулись режиссёрские способности — и я начал воплощать свои идеи в жизнь прямо в игре.
              </p>
            </div>
            <div className="glow-border rounded-xl p-6">
              <p className="text-sm text-red-500 font-orbitron uppercase mb-2">Канал</p>
              <p className="text-muted-foreground leading-relaxed">
                Мой YouTube-канал называется <span className="text-white font-bold">«KNIFE»</span> — веду его активно с 31 августа 2023 года.
              </p>
            </div>
          </div>

          {/* Правая колонка — история */}
          <div className="glow-border rounded-xl p-6 space-y-5">
            <p className="text-sm text-red-500 font-orbitron uppercase mb-2">Моя история</p>
            <p className="text-muted-foreground leading-relaxed">
              Начинал я с канала <span className="text-white font-semibold">«Зомби школа»</span> — мы с другом снимали всякую ерунду, и к удивлению это набирало просмотры. Но, к сожалению, канал забанили.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              После этого я ушёл из всех соцсетей на три года. И 31 августа 2023 года зародился новый канал — <span className="text-white font-semibold">KNIFE</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Раз ты зашёл на этот сайт — значит, я тебя заинтересовал как ютубер, который снимает фильмы и сериалы. Добро пожаловать!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}