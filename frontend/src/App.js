import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  ArrowRight,
  Hammer,
  Wrench,
  Paintbrush,
  Zap,
  Home,
  Droplets,
  TreePine,
  Sparkles,
  Camera,
  MessageCircle,
  Bell
} from 'lucide-react';
import './App.css';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Hammer className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-blue-600">MyHammer</span>
            </div>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Aufträge finden</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Für Auftragnehmer</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Hilfe</a>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors">Anmelden</button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
              Registrieren
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8254894/pexels-photo-8254894.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Finden Sie den perfekten<br />
            <span className="text-orange-400">Handwerker</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Über 500.000 qualifizierte Handwerker warten auf Ihren Auftrag. 
            Kostenlos, einfach und sicher.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Beschreiben Sie Ihren Auftrag..."
                    className="w-full px-4 py-3 text-gray-700 border-none focus:outline-none rounded-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Suchen
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Auftrag kostenlos einstellen',
      description: 'Beschreiben Sie Ihr Projekt und erhalten Sie passende Angebote.',
      icon: <Home className="w-8 h-8" />
    },
    {
      number: '2', 
      title: 'Angebote erhalten',
      description: 'Qualifizierte Handwerker melden sich bei Ihnen.',
      icon: <Mail className="w-8 h-8" />
    },
    {
      number: '3',
      title: 'Handwerker auswählen',
      description: 'Vergleichen Sie Profile und wählen Sie den Besten.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            So funktioniert's
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In nur drei einfachen Schritten zum perfekten Handwerker
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Categories Section
const ServiceCategoriesSection = () => {
  const categories = [
    {
      title: 'Garten & Außenbereich',
      description: 'Landschaftsbau, Pflasterarbeiten',
      icon: <TreePine className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1556910638-6cdac31d44dc',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Reinigung',
      description: 'Hausreinigung, Büroreinigung',
      icon: <Sparkles className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/189533/pexels-photo-189533.jpeg',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Elektrik',
      description: 'Installation, Reparaturen',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1597502310092-31cdaa35b46d',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Sanitär',
      description: 'Rohrleitungen, Badezimmer',
      icon: <Droplets className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1618522284999-3430d5f5f2da',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Malerei',
      description: 'Innen- und Außenanstriche',
      icon: <Paintbrush className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1631064653398-fe1db29e1ca1',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Handwerk',
      description: 'Tischlerei, Reparaturen',
      icon: <Hammer className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beliebte Kategorien
          </h2>
          <p className="text-xl text-gray-600">
            Finden Sie den richtigen Handwerker für Ihr Projekt
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            >
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-full ${category.color}`}>
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Professionals Section
const FeaturedProfessionalsSection = () => {
  const professionals = [
    {
      name: 'Klaus Mueller',
      specialty: 'Elektriker',
      location: 'Berlin',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg',
      verified: true,
      description: 'Über 15 Jahre Erfahrung in der Elektroinstallation'
    },
    {
      name: 'Maria Schmidt',
      specialty: 'Malerin',
      location: 'München',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1583275830686-0e4d5ad6b4f2',
      verified: true,
      description: 'Spezialistin für hochwertige Innenanstriche'
    },
    {
      name: 'Hans Weber',
      specialty: 'Tischler',
      location: 'Hamburg',
      rating: 5.0,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1563964852179-eb5863afda4c',
      verified: true,
      description: 'Maßanfertigungen und Restaurierungen'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top bewertete Handwerker
          </h2>
          <p className="text-xl text-gray-600">
            Entdecken Sie unsere besten Fachkräfte
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {professionals.map((pro, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${pro.image}')` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pro.name}
                  </h3>
                  {pro.verified && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <p className="text-blue-600 font-medium mb-2">{pro.specialty}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{pro.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-900 font-medium">{pro.rating}</span>
                  <span className="ml-1 text-gray-600">({pro.reviews} Bewertungen)</span>
                </div>
                <p className="text-gray-600 mb-4">{pro.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Profil ansehen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Fischer',
      location: 'Frankfurt',
      project: 'Badezimmer Renovierung',
      rating: 5,
      comment: 'Perfekt! Der Handwerker war pünktlich, professionell und das Ergebnis ist fantastisch.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
      name: 'Michael Braun',
      location: 'Köln',
      project: 'Elektroinstallation',
      rating: 5,
      comment: 'Sehr zufrieden mit der Arbeit. Alles wurde sauber und termingerecht erledigt.',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg'
    },
    {
      name: 'Anna Richter',
      location: 'Stuttgart',
      project: 'Garten Landschaftsbau',
      rating: 5,
      comment: 'Unser Garten ist jetzt wunderschön! Kann MyHammer nur weiterempfehlen.',
      image: 'https://images.unsplash.com/photo-1556910638-6cdac31d44dc'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600">
            Über 2 Millionen zufriedene Kunden vertrauen uns
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 bg-cover bg-center rounded-full mr-4"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                ></div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// For Professionals Section
const ForProfessionalsSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Für Handwerker
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Erweitern Sie Ihr Geschäft und finden Sie neue Kunden
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kostenlose Registrierung</h3>
                  <p className="text-blue-100">Melden Sie sich kostenlos an und erstellen Sie Ihr Profil</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Passende Aufträge</h3>
                  <p className="text-blue-100">Erhalten Sie nur Anfragen, die zu Ihren Fähigkeiten passen</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sichere Bezahlung</h3>
                  <p className="text-blue-100">Pünktliche und sichere Auszahlung Ihrer Vergütung</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors text-lg font-semibold">
                Jetzt als Handwerker registrieren
              </button>
            </div>
          </div>
          <div 
            className="h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

// Mobile App Section
const MobileAppSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              MyHammer App
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Verwalten Sie Ihre Projekte unterwegs mit unserer mobilen App
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Camera className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Fotos direkt hochladen</span>
              </div>
              <div className="flex items-center">
                <Bell className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Push-Benachrichtigungen</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Direkte Kommunikation</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                Google Play
              </button>
            </div>
          </div>
          <div 
            className="h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Hammer className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">MyHammer</span>
            </div>
            <p className="text-gray-400 mb-4">
              Deutschlands führende Plattform für Handwerkerdienstleistungen
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hilfe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sicherheit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Versicherung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MyHammer. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <ServiceCategoriesSection />
      <FeaturedProfessionalsSection />
      <TestimonialsSection />
      <ForProfessionalsSection />
      <MobileAppSection />
      <Footer />
    </div>
  );
}

export default App;