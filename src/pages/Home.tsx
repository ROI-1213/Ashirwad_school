import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Trophy, Heart, Library, Monitor, FlaskConical, School, Quote, Users, Award, BookOpen } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import heroCarousel1 from "@/assets/hero-banner-1.jpg";
import heroCarousel2 from "@/assets/hero-banner-2.jpg";
import heroCarousel3 from "@/assets/hero-banner-3.jpg";
import heroCarousel4 from "@/assets/hero-banner-4.jpg";
import aboutSchool from "@/assets/about-school.jpg";
import library from "@/assets/library.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import sportsGround from "@/assets/sports.jpg";
import scienceLab from "@/assets/lab.jpg";
import smartClassroom from "@/assets/smartclass.jpg";
import chairman from "@/assets/chairman-new.jpg";
import principal from "@/assets/principal-AGI.jpg";
import culturalEventNew from "@/assets/cultural-event-new.jpg";
import sportsNew from "@/assets/sports-new.jpg";
import schoolTrip from "@/assets/school-trip.jpg";
import newsScienceExhibition from "@/assets/news-science-exhibition.jpg";
import newsQuizCompetition from "@/assets/news-quiz-competition.jpg";
import newsDigitalLibrary from "@/assets/news-digital-library.jpg";
// Teaching Staff Images
import teachingStaff01 from "@/assets/teaching-staff-01.jpg";
import teachingStaff02 from "@/assets/teaching-staff-02.jpg";
import teachingStaff03 from "@/assets/teaching-staff-03.jpg";
import teachingStaff04 from "@/assets/teaching-staff-04.jpg";
import teachingStaff05 from "@/assets/teaching-staff-05.png";
import teachingStaff06 from "@/assets/teaching-staff-06.png";
import teachingStaff07 from "@/assets/teaching-staff-07.jpeg";
import teachingStaff08 from "@/assets/teaching-staff-08.jpg";
import teachingStaff10 from "@/assets/teaching-staff-10.jpg";
import teachingStaff11 from "@/assets/teaching-staff-11.png";
import teachingStaff12 from "@/assets/teaching-staff-12.png";
import teachingStaff13 from "@/assets/teaching-staff-13.jpg";
import teachingStaff14 from "@/assets/teaching-staff-14.jpg";


const Home = () => {
  const heroSlides = [
    {
      image: heroCarousel1,
      title: "Empowering Minds, Building Futures",
      subtitle: "Quality education with modern facilities and experienced faculty"
    },
    {
      image: heroCarousel2,
      title: "Excellence in Education with Indian Values",
      subtitle: "Nurturing young minds in a culturally rich environment"
    },
    {
      image: heroCarousel3,
      title: "Celebrating Diversity & Unity",
      subtitle: "Where tradition meets innovation in education"
    },
    {
      image: heroCarousel4,
      title: "Innovating Tomorrow, Today",
      subtitle: "Preparing students for the future with cutting-edge technology"
    }
  ];

  const whyChooseUs = [
    { icon: GraduationCap, title: "Quality Education", description: "Comprehensive curriculum aligned with Karnataka State Board and PU standards" },
    { icon: Trophy, title: "Holistic Development", description: "Focus on academics, sports, arts, and cultural activities for all-round growth" },
    { icon: Users, title: "Experienced Faculty", description: "Dedicated and qualified teachers committed to student success" },
    { icon: Heart, title: "Value-Based Learning", description: "Character building, moral education, and leadership development" },
  ];

  const facilities = [
    { icon: Library, title: "Modern Library", description: "Well-stocked with books and digital resources", image: library },
    { icon: Monitor, title: "Computer Labs", description: "State-of-the-art technology infrastructure", image: computerLab },
    { icon: School, title: "Sports Ground", description: "Facilities for cricket, football, and athletics", image: sportsGround },
    { icon: FlaskConical, title: "Science Labs", description: "Fully equipped physics, chemistry, and biology labs", image: scienceLab },
    { icon: null, title: "Smart Classrooms", description: "Interactive digital learning environments", image: smartClassroom },
  ];

  const management = [
    { 
      name: "Dr. Veerabhadra Gouda", 
      role: "Founder & Chairman", 
      image: chairman, 
      message: "It is matter of pride and honour for me to declare that Ashirwad Group of Institutes has succeeded in establishing excellent standards of education and meeting the expectations of parents.\n\nWhen we started the Ashirwad Group of Institutes, we made a promise to the people of the region that the children will henceforth receive an education that will enable them to fully realize their potential, and they will not be left disadvantaged anymore on account of being geographically far from major cities and the centres of economic development.\n\nAshirwad Group of Institutes has brought best practices in education that include advanced curriculum, state of the art infrastructure and exposure to the world through a diverse set of activities. In an effort to create an environment for constant personal growth and intellectual development, we have set high standards of performance and discipline. We have encouraged the practice of constant involvement with the children to ensure their intellectual, personal and emotional development.\n\nTeachers at Ashirwad Group of Institutes demonstrate ongoing professional growth in order to increase the quality of instruction. They continually work to inspire students and fire their imaginations through innovative ways.\n\nWe have tried and created an institution that will address educational needs of the children and prepare them for the rigors of higher education and the 21st-century industry.\n\nWe thank you for your support and promise that we will leave no stone unturned to ensure a bright future for your child."
    },
    { 
      name: "Basavaraj S Haitapur", 
      role: "Principal", 
      image: principal, 
      message: "Greetings from the Principal's Desk — As we stand on the threshold of a new academic session, I extend a hearty and warm welcome to all my students, staff and parents. Each academic year is a new height scaled, another dream realized with new targets set for the future. Each member of this institution is devoted to turning dreams and aspirations into reality through sincerity and perseverance.\n\nWe at ASHIRWAD GROUP OF INSTITUTES always try to maintain the highest quality in academic standards and provide the most conducive environment for our student's holistic growth and development. We also strive to instil the core values of Respect, Integrity, Compassion and Excellence in our students so they can meet the ever-changing global challenges. Our dedicated and highly qualified staff stand as exemplary role models for our students thereby keeping the ethos of our school shining bright.\n\nNelson Mandela rightly said, \"Education is the most powerful weapon you can use to change the world.\" If there is one thing that can change the world, it is education and ASHIRWAD GROUP OF INSTITUTES is the pillar of formal education. Along with providing academics, we aspire to instil values, life skills and habits that make our students stand out and make a difference in society. We provide our students with ample opportunities to develop 21st-century skills such as collaboration, teamwork, critical thinking, emotional balance, time management and much more.\n\n\"Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.\" We wish to thank all the parents for their faith in ASHIRWAD GROUP OF INSTITUTES. Let's partner together, so that we can see children being successful in whatever path they choose to tread.\n\nAt Ashirwad, we believe that every child is unique and deserves an education that nurtures their individual strengths. Our commitment to continuous improvement in teaching methodologies, infrastructure, and co-curricular programmes ensures that our students are well-prepared for the challenges of tomorrow. Together, let us build a future where every student shines with confidence, knowledge, and integrity."
    },
  ];

  const faculty = [
    { name: "SHARANAPPA", subject: "Mathematics", image: teachingStaff01, qualification: "M.Sc, B.Ed" },
    { name: "SNEHAL REVANKAR", subject: "Science", image: teachingStaff02, qualification: "B.Sc, B.Ed" },
    { name: "PRIYANKA SURPUR", subject: "Social Studies", image: teachingStaff03, qualification: "MA, B.Ed" },
    { name: "HIMA M.M", subject: "English", image: teachingStaff04, qualification: "MA, D.Ed" },
    { name: "VIJAYALAXMI S.G", subject: "EVS", image: teachingStaff05, qualification: "BA, B.Ed" },
    { name: "KALPANA", subject: "Computer", image: teachingStaff06, qualification: "B.Tech" },
    { name: "BHIMARAY", subject: "Kannada", image: teachingStaff07, qualification: "BA, B.Ed" },
    { name: "SHANKAR RATHOD", subject: "PE Teacher", image: teachingStaff08, qualification: "BA, BP.Ed" },
    { name: "YALLALINGA BIRADAR", subject: "Hindi", image: teachingStaff10, qualification: "BA, B.Ed" },
    { name: "SHAILA B", subject: "Kannada", image: teachingStaff11, qualification: "BA, B.Ed" },
    { name: "DHANASHREE", subject: "Pre-Primary", image: teachingStaff12, qualification: "MA, D.Ed" },
    { name: "SPOORTI GOKHALE", subject: "Maths", image: teachingStaff13, qualification: "B.Sc, B.Ed" },
    { name: "CHANGALARAY", subject: "Art & Craft", image: teachingStaff14, qualification: "AMC" },
    
  ];

  const testimonials = [
    { parent: "Mr. & Mrs. Patil", text: "Ashirwad Global School has transformed our daughter's life. The teachers are caring and the education quality is excellent.", student: "Parent of Class 8 student" },
    { parent: "Mrs. Kavitha Reddy", text: "We are grateful for the holistic development our son receives here. The school focuses not just on academics but overall personality development.", student: "Parent of Class 10 student" },
    { parent: "Mr. Suresh Kumar", text: "The infrastructure and teaching methods are at par with city schools. Our children get the best education right here in Hunasagi.", student: "Parent of PU College student" },
  ];

  const campusLifeActivities = [
    {
      title: "Cultural Activities",
      description: "Students participate in vibrant cultural events, celebrating diversity and showcasing their talents in music, dance, and drama.",
      image: culturalEventNew,
    },
    {
      title: "Sports",
      description: "Our comprehensive sports program includes cricket, football, kabaddi, and various outdoor activities to promote physical fitness and teamwork.",
      image: sportsNew,
    },
    {
      title: "School Trips",
      description: "Educational excursions and field trips provide students with real-world learning experiences and memorable adventures.",
      image: schoolTrip,
    },
  ];

  const newsEvents = [
    { date: "2025-03-20", title: "Annual Science Exhibition", category: "Event", description: "Students showcase innovative projects with creative displays and demonstrations across various scientific disciplines", image: newsScienceExhibition },
    { date: "2025-03-15", title: "State Level Quiz Competition - First Place", category: "Achievement", description: "Our students secured top position in the state level quiz competition, bringing glory to the institution", image: newsQuizCompetition },
    { date: "2025-03-10", title: "New Digital Library Inauguration", category: "News", description: "Modern e-learning resources and digital books are now available to all students in our state-of-the-art facility", image: newsDigitalLibrary },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
                  </div>
                  <div className="container mx-auto px-4 z-10 relative">
                    <div className="max-w-3xl text-white animate-fade-in">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-glow">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl mb-4 text-white/95 font-semibold animate-pulse-subtle">
                        "The Future Begins Here!"
                      </p>
                      <p className="text-lg md:text-xl mb-8 text-white/90">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link to="/admissions">
                          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-glow">
                            Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                        <Link to="/about/overview">
                          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Our Vision</h2>
            <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
              "To bring unlimited educational opportunities to the local community and make the future generations capable of original thought, creation, leadership and accomplishment even in face of adversity"
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Our School */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <img src={aboutSchool} alt="Ashirwad School Building" loading="lazy" decoding="async" className="rounded-2xl shadow-lg w-full card-elevated h-[500px] object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">About Our School</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Ashirwad Global School & PU College is a premier educational institution committed to providing quality education with Indian values and global perspectives.
              </p>
              <p className="text-muted-foreground mb-4">
                With state-of-the-art infrastructure, experienced faculty, and a comprehensive curriculum, we nurture young minds to become responsible global citizens.
              </p>
              <p className="text-muted-foreground mb-4">
                Our campus features modern classrooms, well-equipped laboratories, a vast library, sports facilities, and a conducive learning environment that inspires excellence.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded by Dr. Veerabhadra Gouda, our institution has grown to become one of the most trusted educational institutions in the region, preparing students not just for examinations but for success in higher education and life.
              </p>
              <Link to="/about/overview">
                <Button className="bg-primary hover:bg-primary/90">Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Why Choose Ashirwad?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a unique blend of academic excellence, modern infrastructure, and value-based education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth card-elevated animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Our Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to provide the best learning environment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth card-elevated group">
                <div className="h-48 overflow-hidden">
                  <img src={facility.image} alt={facility.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {facility.icon && (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <facility.icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h3 className="text-xl font-heading font-bold text-primary">{facility.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Words of Wisdom - Redesigned */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Words of Wisdom</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inspiring messages from our visionary leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {management.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-background border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-40 w-full h-48 sm:h-52 flex-shrink-0 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top" 
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {index === 0 ? <Heart className="w-5 h-5 text-primary" /> : <Award className="w-5 h-5 text-primary" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-bold text-primary">{member.name}</h3>
                          <p className="text-sm text-accent font-medium">{member.role}</p>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-primary/20 mb-2" />
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                        {member.message.split('\n\n')[0]}
                      </p>
                      <Link to={index === 0 ? "/about/chairman-message" : "/about/principal-message"} className="inline-flex items-center gap-1 mt-4 text-primary hover:text-accent text-sm font-semibold transition-colors">
                        Read Full Message
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Faculty - Redesigned */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Meet Our Faculties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Qualified and dedicated teachers passionate about student success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {faculty.slice(0, 4).map((teacher, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-sm md:text-base font-heading font-bold text-primary mb-1 truncate">{teacher.name}</h3>
                  <p className="text-xs md:text-sm text-accent font-medium flex items-center justify-center gap-1">
                    <BookOpen className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{teacher.subject}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <GraduationCap className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{teacher.qualification}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about/faculties">
              <Button className="bg-primary hover:bg-primary/90">
                View More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Parents Say */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">What Parents Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from the parents who trust us with their children's education
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth card-elevated">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.parent}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.student}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campus Life */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Our Campus Life</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A vibrant community where students grow, learn, and celebrate together
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {campusLifeActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth card-elevated group">
                <div className="h-64 overflow-hidden relative">
                  <img src={activity.image} alt={activity.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-heading font-bold text-white">{activity.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/campus-life/events-gallery">
              <Button className="bg-accent hover:bg-accent/90">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">News & Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest happenings at Ashirwad Global
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newsEvents.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth card-elevated group">
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-smooth" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All News & Events <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Join the Ashirwad Family</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Give your child the gift of quality education in a nurturing environment. Admissions are now open!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6">
                Apply for Admission <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
