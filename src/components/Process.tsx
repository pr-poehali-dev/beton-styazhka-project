
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/Icon';

const steps = [
  {
    icon: "Phone",
    title: "Вы звоните или пишете",
    description: "Ответим на ваши вопросы и договоримся о выезде на объект. Никаких скриптов и заученных фраз — просто расскажем как будет."
  },
  {
    icon: "Ruler",
    title: "Приезжаем, смотрим, считаем",
    description: "Делаем замеры, оцениваем состояние основания, считаем стоимость. Сразу даём точную цену, а не прикидываем \"примерно\"."
  },
  {
    icon: "FileCheck",
    title: "Согласуем, запускаемся",
    description: "Подписываем договор, согласовываем сроки и материалы. Никаких сюрпризов и скрытых доплат."
  },
  {
    icon: "HardHat",
    title: "Делаем, убираем за собой",
    description: "Работаем быстро и чисто. После нас не нужно вызывать клининг — уберём всё сами и вывезем мусор."
  },
  {
    icon: "Check",
    title: "Уезжаем, а вы ходите по ровному полу",
    description: "Принимаете работу, мы даём рекомендации по уходу за новым полом. А дальше наслаждаетесь результатом."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-concrete-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Как мы работаем</h2>
        <p className="text-concrete-600 text-lg text-center mb-10 max-w-3xl mx-auto">
          Пять простых шагов, и у вас будет новый пол без головной боли и переплат.
        </p>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="step-card relative">
              <div className="absolute -left-3 top-6 w-6 h-6 bg-accent1 rounded-full text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className="text-accent1">
                    <Icon name={step.icon} size={24} />
                  </div>
                  <span>{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-concrete-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
