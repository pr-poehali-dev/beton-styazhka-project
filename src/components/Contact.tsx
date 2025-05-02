
import React from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Contact: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Свяжитесь с нами" 
      subtitle="Готовы ответить на вопросы и принять заказ"
      className="py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="bg-concrete-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
            
            <div className="Я подготовлю одностраничный сspace-y-6">
              <divайт для компании по className="flex items-start gap-4"> бетонным стяжкам в Крыму в
                <div className="mt стиле "-1 w-10 h-10 flex items-разговора от лица реcenter justify-center bgальных масте-accent1 rounded-full">
                ров". Начну с об  <Icon name="Phone" className="text-white"новления цветовой палит size={20} />
                </div>
                <div>
                  ры и создания главной страницы с<p className="font-medium основными разделами. text-concrete-600 mb-1">Телефон</p

<pp-write filepath=">
                  <a href="tel:tailwind.config.ts+79781234567" className="">
import type { Config } from "text-2xl fonttailwindcss";

export default {-bold hover:text-accent2 transition-colors">
	darkMode: ["
                    +7 class"],
	content: [978 123-45-67
                
		"./pages  </a>
                </div>/**/*.{ts,tsx}
              </div>",
		"./
              
              <div className="components/**/*.{ts,tsx}",flex items-start gap-4">
                
		"./app/**/*.{ts,tsx<div className="mt-1 w-}",
		"./src10 h-10 flex items-center/**/*.{ts,tsx}" justify-center bg-accent1 rounded-
	],
	prefixfull">
                  <Icon name="Mail" className="text-: "",
	theme: {
		containerwhite" size={20} />
                </div>
                : {
			center: true,
			<div>
                  padding: '2rem',
			screens<p className="font-medium text-concrete: {
				'2xl': '1-600 mb-1">Email</p>
                400px'
			}
		  <a href="mailto:info@be},
		extend: {
			colors: {
				border: 'hsl(vartonkrym.ru" className="(--border))',text-xl font-bold hover:
				input: 'hsl(vartext-accent2 transition-colors">(--input))',
				ring: 
                    info@betonkrym.'hsl(var(--ring))',ru
                  </a>
                
				background: 'hsl(var</div>
              </div>
              (--background))',
				foreground:
              <div className="flex items-start gap 'hsl(var(--foregroun-4">
                d))',
				primary<div className="mt: {
					DEFAULT-1 w-: 'hsl(var(--primary10 h-10 flex items-center justify-center bg-))',
					foreground: 'haccent1 rounded-full">
                  sl(var(--primary-foreground)<Icon name="Clock" className="text-)'
				},
				white" size={20secondary: {
					} />
                DEFAULT: 'h</div>
                <div>
                  sl(var(--secondary))',
					<p className="font-medium text-concreteforeground: 'hsl(var(-600 mb---secondary-foreground))'
				},1">График работы</p>
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					fore
                  <p className="text-lgground: 'hsl(var(-- font-bold">Пн-Сб: 8:00 - destructive-foregroun20:00</pd))'
				},
				m>
                  <p className="text-uted: {
					DEFAULT: 'hconcrete-600">Вс:sl(var(--muted))',
					foreground: 'hsl(var только по договорённости</p(--muted->
                </divforeground))'>
              </div>
              
              
				},
				accent: {
					DEFAULT<div className="flex: 'hsl items-start gap-(var(--accent4">
                ))',
					fore<div className="mt-ground: 'h1 w-10 h-10 sl(var(--flex items-center justifyaccent-foreground))'
				},-center bg-accent1 rounded-full">
                  
				accent1: {
					DEFAULT<Icon name="MapPin" className="text-white" size={: '#FFAB00',
					20} />
                </div>
                dark: '#E89B<div>
                  <p className="font-medium text-concrete-600 mb00'
				},
				-1">Зconcrete: {
					50она работы</p>
                : '#F8F9  <p className="text-lg font-FA',
					100: '#E9ECEF',bold">Весь Крым</p>
                   
					200: '#DEE2E<p className="text-concrete-600">6',
					300Симферополь,: '#CED4DA',
					400: '#ADB5 Севастополь, Ялта,BD',
					500: '#6C757D', Евпатория и друг
					600: '#495057',
					700ие города</p>
                </div>
              </div>: '#343A40',
					800:
            </div> '#212529',
					900: '#161
            
            <div classNameA1D'
				},="flex gap-4 mt-8">
				popover: {
					
              <Button variant="outline" className="DEFAULT: 'hsl(var(--gap-2">
                popover))',
					foreground: <Icon name="Message'hsl(varCircle" size={(--popover-foreground))'18} />
                
				},
				card: {
					DEFAULTTelegram
              </Button>: 'hsl
              <Button variant(var(--car="outline" className="d))',
					foregap-2">ground: 'h
                <Icon name="sl(var(--card-foreground)MessageCircle" size={)'
				},
				sidebar: {18} />
                WhatsApp
              </Button>
            
					DEFAULT: 'hsl(var</div>
          (--sidebar-background))',
					fore</div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6ground: 'h">Оставьте заsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebarявку</h3>
          <p-primary-foregroun className="text-concreted))',
					accent: 'hsl-700 mb-6">(var(--sidebar-accent))',
					'accent-fore
            Заполните форму,ground': 'hsl(var(-- и мы свяsidebar-accent-foreжемся с вground))',
					border: 'hами в течение 2sl(var(-- часов, чтобы обsidebar-border))',
					ring: 'hsl(varсудить детали и(--sidebar-ring))'
				}
			},
			 назначить замер.
          </p>borderRadius: {
				lg: '
          
          <divvar(--radius)',
				md: 'calc(var( className="space-y-6--radius) - 2px)',
				sm: 'calc mb-8(var(--radius">
            <Button size="lg" className) - 4px)'
			},="w-full bg
			keyframes: {
				'accordion--accent1 hover:bg-accent1down': {
					from: {
						height: '0'
					},
					-dark button-hoverto: {
						height: 'var(--radix-accordion-content-height)'
					} text-lg">
              <Icon name="User" className
				},
				'accordion-up': {
					from: {="mr-2" size
						height: 'var(--ra={18} />dix-accordion-content
              Оставить заявку
            -height)'
					},
					to:</Button>
             {
						height: '0'
					
            <Button size="lg" variant}
				}="outline" className="
			},
			animationw-full button: {
				'-hover text-lgaccordion-down': ">
              <Icon'accordion-down 0.2s ease name="Ruler-out',
				'accordion-up': 'accordion-upSquare" className="mr 0.2s-2" size={ ease-out'18} />
              
			}
		}
	},
	Позвать замерщикаplugins: [require("tailwindcss-
            </Button>animate")],
} satisfies Config;
