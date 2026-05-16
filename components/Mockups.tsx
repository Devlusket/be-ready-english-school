'use client';

import { useLanguage } from '@/context/LanguageContext';

function PhoneRanking() {
  return (
    <div
      className="absolute left-0 top-5 z-20 w-48 rounded-3xl border-8 border-text-dark bg-text-dark shadow-2xl overflow-hidden"
      style={{ transform: 'rotate(-3deg)' }}
    >
      <div className="h-4 bg-text-dark rounded-b-lg mx-8" />
      <div className="bg-blue/10 p-2 flex flex-col gap-1.5">
        <div className="bg-blue text-white text-center text-[0.55rem] font-semibold py-1.5 rounded-md">
          Novembro 📅
        </div>
        <div className="flex justify-center gap-1">
          {['Institucional', 'Regional', 'Nacional'].map((tab) => (
            <span
              key={tab}
              className={`text-[0.4rem] px-1.5 py-0.5 rounded-full ${tab === 'Regional' ? 'bg-blue text-white' : 'bg-blue/10 text-blue'}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-center gap-2 py-1">
          <div className="text-center">
            <div className="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-[0.5rem] font-bold mx-auto mb-0.5">E</div>
            <div className="text-[0.38rem] text-text-dark">Ezequiel</div>
            <div className="text-[0.35rem] text-text-mid">6.900 Pts</div>
            <div className="w-7 h-6 bg-gray-400 rounded-t-sm mt-0.5" />
          </div>
          <div className="text-center">
            <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-white text-[0.5rem] font-bold mx-auto mb-0.5">A</div>
            <div className="text-[0.38rem] text-text-dark">Anne</div>
            <div className="text-[0.35rem] text-text-mid">7.600 Pts</div>
            <div className="w-7 h-9 bg-yellow-400 rounded-t-sm mt-0.5" />
          </div>
          <div className="text-center">
            <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[0.5rem] font-bold mx-auto mb-0.5">C</div>
            <div className="text-[0.38rem] text-text-dark">Carmella</div>
            <div className="text-[0.35rem] text-text-mid">6.960 Pts</div>
            <div className="w-7 h-7 bg-orange-400 rounded-t-sm mt-0.5" />
          </div>
        </div>
        {[
          { pos: '4ª', name: 'Clarice', pts: '6.512', color: 'bg-blue-light' },
          { pos: '5ª', name: 'Kimberly', pts: '6.420', color: 'bg-green-400' },
          { pos: '6ª', name: 'Thomas', pts: '6.122', color: 'bg-pink-400' },
        ].map((item) => (
          <div key={item.name} className="flex items-center gap-1.5 bg-white rounded px-1.5 py-1">
            <div className={`w-4 h-4 rounded-full ${item.color}`} />
            <span className="flex-1 text-[0.42rem] text-text-dark">{item.pos} {item.name}</span>
            <span className="text-[0.42rem] text-blue font-semibold">{item.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneDashboard() {
  return (
    <div
      className="absolute right-0 top-14 z-30 w-48 rounded-3xl border-8 border-text-dark bg-text-dark shadow-2xl overflow-hidden"
      style={{ transform: 'rotate(2deg)' }}
    >
      <div className="h-4 bg-text-dark rounded-b-lg mx-8" />
      <div className="bg-blue-dark p-2 flex flex-col gap-1.5">
        <div className="bg-blue rounded-md p-2">
          <div className="text-[0.4rem] text-white/70">Average english level</div>
          <div className="text-[0.85rem] font-bold text-white leading-none">A2</div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-blue-light rounded-md p-1.5 text-center">
            <div className="text-[0.38rem] text-white/80">Exercises</div>
            <div className="text-[0.65rem] font-bold text-white">5.000</div>
          </div>
          <div className="bg-blue-light rounded-md p-1.5 text-center">
            <div className="text-[0.38rem] text-white/80">Achievements</div>
            <div className="text-[0.65rem] font-bold text-white">120</div>
          </div>
        </div>
        <div className="bg-white/10 rounded-md p-2">
          <div className="text-[0.4rem] text-white/70">Progress</div>
          <div className="text-[0.7rem] font-bold text-white">64%</div>
          <div className="h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
            <div className="h-full w-[64%] bg-green-400 rounded-full" />
          </div>
        </div>
        <div className="bg-white/10 rounded-md p-2">
          <div className="text-[0.4rem] text-white/70">Current Week</div>
          <div className="text-[0.7rem] font-bold text-white">01:44</div>
        </div>
      </div>
    </div>
  );
}

export default function Mockups() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Phones */}
        <div className="relative h-80 md:h-105">
          <PhoneRanking />
          <PhoneDashboard />

          {/* Floating stats */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-4 md:top-0 md:bottom-auto flex flex-row md:flex-col gap-2 z-40">
            {[
              { label: 'Nível médio', val: 'A2' },
              { label: 'Exercícios', val: '5.000' },
              { label: 'Conquistas', val: '120' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-blue/15 rounded-lg px-3 py-2 shadow-md min-w-25">
                <div className="text-[0.6rem] text-text-mid">{s.label}</div>
                <div className="font-display text-xl font-bold text-blue leading-none">{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-blue-light mb-3">
            {t.mockups.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-4">
            {t.mockups.title}
          </h2>
          <p className="text-sm text-text-mid mb-8 leading-relaxed">
            {t.mockups.sub}
          </p>
          <div className="flex flex-col gap-5">
            {t.mockups.features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue/8 flex items-center justify-center text-lg shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-text-dark mb-1">{f.title}</div>
                  <p className="text-sm text-text-mid leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}