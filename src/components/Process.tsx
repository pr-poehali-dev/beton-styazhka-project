
import React from 'react';
import { Section } from '@/components/ui/section';

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: 'Вы звоните или пишете',
    description: 'Просто скажите, что нужен ровный пол, и где. Мы поймём.'
  },
  {
    id: 2,
    title: 'Приезжаем, смотрим, считаем',
    description: 'Измерим всё правильно, честно скажем, сколько стоит и сколько займёт времени.'
  },
  {
    id: 3,
    title: 'Согласуем, запускаемся',
    description: 'Подпишем договор, закупим материалы и начнём работу в оговоренный день.'
  },
  {
    id: 4,
    title: 'Делаем, убираем за собой',
    description: 'Не оставляем после себя мусор. Работаем без лишнего шума и пыли, насколько это возможно.'
  },
  {
    id: 5,
    title: 'Уезжаем, а вы ходите по ровному полу',
    description: 'И рекомендуете нас друзьям, если всё понравилось. Или звоните, если есть вопросы.'
  }
];

const Process: React.FC = () => {
  return (
    <Section 
      id="process" 
      title="Этапы работ" 
      subtitle="Предельно простая схема без лишней бюрократии"
      className="py-16 bg-concrete-800 text-white"
    >
      <div className="space-y-0">
        {steps.map((step) => (
          <div key={step.id} className="relative pl-12 pb-12 last:pb-0">
            {/* Vertical line */}
            {step.id !== steps.length && (
              <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-accent1"></div>
            )}
            {/* Circle with number */}
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent1 flex items-center justify-center text-white font-bold">
              {step.id}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-concrete-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;
