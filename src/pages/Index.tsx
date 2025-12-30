import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-secondary">ЭлектроТех</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">Связаться</Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  30 лет на рынке
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-secondary leading-tight">
                Электромонтажные работы любой сложности
              </h1>
              <p className="text-xl text-muted-foreground">
                Проектирование и монтаж систем электроснабжения для промышленных и жилых объектов. 
                Опытный квалифицированный коллектив гарантирует качество.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="group">
                  Заказать консультацию
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-pulse-glow"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-2xl border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Award" className="mx-auto mb-3 text-primary" size={40} />
                    <div className="text-4xl font-heading font-bold text-secondary">30+</div>
                    <div className="text-sm text-muted-foreground mt-2">Лет опыта</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                    <div className="text-4xl font-heading font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground mt-2">Проектов</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Building2" className="mx-auto mb-3 text-primary" size={40} />
                    <div className="text-4xl font-heading font-bold text-secondary">100+</div>
                    <div className="text-sm text-muted-foreground mt-2">Объектов</div>
                  </div>
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Icon name="Shield" className="mx-auto mb-3 text-primary" size={40} />
                    <div className="text-4xl font-heading font-bold text-secondary">100%</div>
                    <div className="text-sm text-muted-foreground mt-2">Гарантия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
              О компании
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 30 лет мы создаём надёжные системы электроснабжения, соединяя традиции качества с современными технологиями
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50">
              <Icon name="Lightbulb" className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Инновации</h3>
              <p className="text-muted-foreground">
                Применяем передовые технологии и современное оборудование для реализации проектов любой сложности
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50">
              <Icon name="Users" className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Опыт</h3>
              <p className="text-muted-foreground">
                Устоявшийся коллектив квалифицированных специалистов с многолетним опытом выполнения сложных задач
              </p>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-2 hover:border-primary/50">
              <Icon name="ShieldCheck" className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Надёжность</h3>
              <p className="text-muted-foreground">
                Гарантируем качество всех работ, соблюдение сроков и полное соответствие стандартам безопасности
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр электромонтажных работ от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'FileText',
                title: 'Проектирование',
                description: 'Разработка проектной документации систем электроснабжения с учётом всех норм и требований'
              },
              {
                icon: 'Building',
                title: 'Промышленные объекты',
                description: 'Электромонтаж на заводах, складах, производственных комплексах любого масштаба'
              },
              {
                icon: 'Home',
                title: 'Жилые объекты',
                description: 'Электроснабжение жилых домов, коттеджей, квартир с современными решениями'
              },
              {
                icon: 'Cable',
                title: 'Силовые сети',
                description: 'Прокладка силовых кабелей, монтаж распределительных щитов и подстанций'
              },
              {
                icon: 'Cpu',
                title: 'Автоматика',
                description: 'Системы автоматического управления, диспетчеризация, умные решения'
              },
              {
                icon: 'Settings',
                title: 'Обслуживание',
                description: 'Техническое обслуживание, ремонт и модернизация электрооборудования'
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={service.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
              Портфолио
            </h2>
            <p className="text-xl text-muted-foreground">
              Реализованные проекты, которыми мы гордимся
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Производственный комплекс',
                category: 'Промышленность',
                description: 'Полное электроснабжение завода площадью 15,000 м²',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/77f54fd1-9ed7-48c4-a3a8-8c9813c9b3e1.jpg'
              },
              {
                title: 'Жилой комплекс "Новый квартал"',
                category: 'Жилая недвижимость',
                description: 'Электромонтаж в 5 жилых корпусах, 200 квартир',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/fd083cd6-4670-4792-981f-97225b1fe62a.jpg'
              },
              {
                title: 'Торговый центр',
                category: 'Коммерция',
                description: 'Проектирование и монтаж систем электроснабжения ТЦ',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/666baa9f-b041-40f5-ba02-088eb68e5978.jpg'
              },
              {
                title: 'Логистический центр',
                category: 'Промышленность',
                description: 'Силовое оборудование и автоматизация склада',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/77f54fd1-9ed7-48c4-a3a8-8c9813c9b3e1.jpg'
              },
              {
                title: 'Частный коттеджный посёлок',
                category: 'Жилая недвижимость',
                description: 'Электроснабжение 30 домов премиум-класса',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/fd083cd6-4670-4792-981f-97225b1fe62a.jpg'
              },
              {
                title: 'Административное здание',
                category: 'Коммерция',
                description: 'Офисный центр класса А, умные системы управления',
                image: 'https://cdn.poehali.dev/projects/713049cf-4b81-4cce-a2cd-fb2f6be7de42/files/666baa9f-b041-40f5-ba02-088eb68e5978.jpg'
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-6">
                  Свяжитесь с нами
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Готовы обсудить ваш проект? Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-secondary">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-secondary">Email</div>
                      <div className="text-muted-foreground">info@elektrotech.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-secondary">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Электродная, 2с1</div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={28} />
                <span className="text-xl font-heading font-bold">ЭлектроТех</span>
              </div>
              <p className="text-white/70">
                Профессиональные электромонтажные работы с 1993 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-white/70 hover:text-primary transition-colors">Главная</a>
                <a href="#about" className="block text-white/70 hover:text-primary transition-colors">О компании</a>
                <a href="#services" className="block text-white/70 hover:text-primary transition-colors">Услуги</a>
                <a href="#portfolio" className="block text-white/70 hover:text-primary transition-colors">Портфолио</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <div className="space-y-2">
                <div className="text-white/70">Проектирование</div>
                <div className="text-white/70">Монтаж</div>
                <div className="text-white/70">Обслуживание</div>
                <div className="text-white/70">Автоматизация</div>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div>+7 (495) 123-45-67</div>
                <div>info@elektrotech.ru</div>
                <div>Москва, ул. Электродная, 2с1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            © 2024 ЭлектроТех. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;