
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько стоит стяжка пола?",
    answer: "От 350 ₽/м², точнее скажем после замера. Цена зависит от площади, толщины слоя, состояния основания и дополнительных работ. Никаких скрытых доплат — называем полную стоимость сразу."
  },
  {
    question: "А вы точно приедете?",
    answer: "Приезжаем, не оправдываемся. Если назначили время — будем. Мы дорожим своей репутацией и не бросаем клиентов. В случае форс-мажора (что крайне редко) — предупредим заранее."
  },
  {
    question: "Топинг — это что вообще?",
    answer: "Усилитель бетона. Это специальная сухая смесь, которая втирается в верхний слой свежего бетона. Ваш пол проживёт дольше, чем ваша кухня. Топинг повышает прочность поверхности в 2-3 раза и защищает от пыления."
  },
  {
    question: "Нужно ли готовить помещение?",
    answer: "Мы скажем, что надо. И что не надо. Обычно требуется освободить помещение от мебели, обеспечить доступ к воде и электричеству. Остальное расскажем при замере — каждый объект индивидуален."
  },
  {
    question: "Сколько сохнет стяжка?",
    answer: "Полусухая стяжка: ходить можно через 12-24 часа, полное высыхание 7-10 дней. Бетонная стяжка: ходить можно через 2-3 дня, полное высыхание 28 дней. Но мы расскажем, как ускорить процесс без потери качества."
  },
  {
    question: "Работаете ли вы с юридическими лицами?",
    answer: "Да, работаем с ИП, ООО и другими организациями. Предоставляем полный пакет документов, включая смету, договор, акты выполненных работ и счета-фактуры. Возможна оплата по безналичному расчету."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-concrete-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Часто задаваемые вопросы</h2>
        <p className="text-concrete-600 text-lg text-center mb-10 max-w-3xl mx-auto">
          Отвечаем на вопросы прямо и без маркетинговой воды. Если не нашли ответа — звоните.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-concrete-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-concrete-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
