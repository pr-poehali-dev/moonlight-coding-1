export function TeamSection() {
  const team = [
    {
      name: "Артём",
      role: "Основатель / Режиссёр",
      description: "Создатель канала KNIFE_stanik. Придумывает идеи, снимает и монтирует видео.",
      emoji: "🎬",
    },
    {
      name: "Миша — nyllprogo",
      role: "Основатель канала nyllprogo",
      description: "16 лет. Основатель канала nyllprogo. Добрый и отзывчивый участник команды.",
      emoji: "🎮",
    },
    {
      name: "Дима — ahomertic",
      role: "Основатель канала ahomertic",
      description: "16 лет. Основатель канала ahomertic. Добрый и отзывчивый участник команды.",
      emoji: "🎯",
    },
    {
      name: "Игорь — Oy_noy_shipytchka",
      role: "Участник команды",
      description: "15 лет. Добрый и отзывчивый участник команды.",
      emoji: "⚡",
    },
    {
      name: "Ярик — yarkagamer32",
      role: "Участник команды",
      description: "15 лет. Добрый и отзывчивый участник команды.",
      emoji: "🌟",
    },
    {
      name: "Дима — ✞ঔৣ𝕲𝖆𝖒𝖊°𝕺𝖛𝖊𝖗ঔৣ✞",
      role: "Участник команды",
      description: "17 лет. Добрый и отзывчивый участник команды.",
      emoji: "🔥",
    },
    {
      name: "Артём — Always better you bro",
      role: "Участник команды",
      description: "14 лет. Добрый и отзывчивый участник команды.",
      emoji: "💪",
    },
    {
      name: "Ярик — _GITARIK_TT",
      role: "Участник команды",
      description: "14 лет. Добрый и отзывчивый участник команды.",
      emoji: "🎸",
    },
    {
      name: "Тимур — Tumytd2",
      role: "Участник команды",
      description: "14 лет. Добрый и отзывчивый участник команды.",
      emoji: "🚀",
    },
    {
      name: "Евген — hachEGL",
      role: "Участник команды",
      description: "14 лет. Добрый и отзывчивый участник команды.",
      emoji: "🎮",
    },
    {
      name: "Agus3a_YT_gugugaga",
      role: "Участник команды",
      description: "14 лет. Добрый и отзывчивый участник команды.",
      emoji: "👾",
    },
  ]

  return (
    <section id="team" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Моя <span className="text-red-500">команда</span>
          </h2>
          <p className="font-space-mono text-gray-400 text-lg max-w-2xl mx-auto">
            Люди, которые помогают создавать контент на канале KNIFE_stanik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-gray-900 border border-red-500/20 rounded-2xl p-8 text-center hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="font-geist text-red-500 text-sm font-semibold mb-4 uppercase tracking-widest">
                {member.role}
              </p>
              <p className="font-space-mono text-gray-400 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}