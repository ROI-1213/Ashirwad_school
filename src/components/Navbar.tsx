import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, LogIn, FileText, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    items: [
      { name: "Overview", href: "/about/overview" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
      { name: "Chairman's Message", href: "/about/chairman-message" },
      { name: "Principal's Message", href: "/about/principal-message" },
      { name: "Infrastructure & Facilities", href: "/about/infrastructure" },
      { name: "Our Faculties", href: "/about/faculties" },
      { name: "Accreditation & Affiliations", href: "/about/accreditation" },
      { name: "Documents", href: "/mandatory-disclosure" },
    ],
  },
  {
    name: "Mandatory Disclosure",
    href: "/mandatory-disclosure",
  },
  {
    name: "Academics",
    href: "/academics",
    items: [
      {
        name: "School",
        items: [
          { name: "Curriculum", href: "/academics/school/curriculum" },
          { name: "Subjects Offered", href: "/academics/school/subjects" },
          { name: "Timetable & Calendar", href: "/academics/school/timetable" },
        ],
      },
      {
        name: "PU College",
        items: [
          { name: "Streams (Science, Commerce, Arts)", href: "/academics/pu/streams" },
          { name: "Syllabus & Resources", href: "/academics/pu/syllabus" },
        ],
      },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    items: [
      { name: "Admission Process", href: "/admissions/process" },
      { name: "Eligibility Criteria", href: "/admissions/eligibility" },
      { name: "Fee Structure", href: "/admissions/fee-structure" },
      { name: "Apply Online", href: "/apply-online" },
      { name: "Prospectus Download", href: "/admissions/prospectus" },
    ],
  },
  {
    name: "Campus Life",
    href: "/campus-life",
    items: [
      { name: "Sports & Cultural Activities", href: "/campus-life/activities" },
      { name: "Clubs & Committees", href: "/campus-life/clubs" },
      { name: "Events & Celebrations", href: "/campus-life/events" },
      { name: "Gallery", href: "/campus-life/gallery" },
    ],
  },
  {
    name: "Achievements",
    href: "/achievements",
    items: [
      { name: "Co-Curricular Achievements", href: "/achievements/co-curricular" },
      { name: "Alumni Success Stories", href: "/achievements/alumni" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    items: [
      { name: "Notices & Circulars", href: "/resources/notices" },
      { name: "Study Materials", href: "/resources/study-materials" },
      { name: "Question Papers", href: "/resources/question-papers" },
      { name: "Library", href: "/resources/library" },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileSection = (name: string) => {
    setExpandedMobile(expandedMobile === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Contact Info Bar */}
      <div className="bg-primary/5 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <a
                href="tel:6363694311"
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">63636 94311</span>
              </a>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <a
                href="mailto:ashirwadglobalschool@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-3 h-3" />
                <span>ashirwadglobalschool@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://erp.ashirwadglobalschool.edu.in/site/userlogin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                <LogIn className="w-3 h-3" />
                <span className="hidden sm:inline">Parent/Student Login</span>
                <span className="sm:hidden">Login</span>
              </a>
              <div className="h-4 w-px bg-border" />
              <span
                className="flex items-center gap-1 text-xs font-medium text-muted-foreground pointer-events-none opacity-50 cursor-default"
              >
                <FileText className="w-3 h-3" />
                Results
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Ashirwad Global School & PU College" className="h-16 w-auto object-contain group-hover:scale-105 transition-smooth" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-0.5 xl:gap-1">
              {navigationItems.map((item) =>
                item.items ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "bg-transparent hover:bg-muted data-[state=open]:bg-muted transition-smooth px-2.5 xl:px-4 text-xs xl:text-sm font-medium",
                        isActive(item.href) && "bg-primary/10 text-primary"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={cn(
                        "grid gap-2 p-4",
                        item.items.some((sub: any) => sub.items)
                          ? "w-[500px] md:w-[600px] lg:w-[700px] md:grid-cols-2"
                          : item.items.length <= 5
                            ? "w-[280px] grid-cols-1"
                            : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                      )}>
                        {item.items.map((subItem: any) => (
                          subItem.items ? (
                            <li key={subItem.name}>
                              <div className="font-semibold text-sm text-primary mb-2 px-3">{subItem.name}</div>
                              <ul className="space-y-1 ml-2">
                                {subItem.items.map((nestedItem: any) => (
                                  <li key={nestedItem.name}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={nestedItem.href}
                                        className="block select-none rounded-md p-2.5 pl-4 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-sm"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          )
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-medium transition-smooth hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActive(item.href) && "bg-primary text-primary-foreground hover:bg-primary/90"
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Admissions CTA */}
          <div className="hidden lg:block">
            <Link to="/apply-online">
              <Button className="bg-accent hover:bg-accent/90">Apply Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) =>
                item.items ? (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => toggleMobileSection(item.name)}
                      className={cn(
                        "flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedMobile === item.name && "rotate-180"
                        )}
                      />
                    </button>
                    {expandedMobile === item.name && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 animate-fade-in">
                        {item.items.map((subItem: any) => (
                          subItem.items ? (
                            <div key={subItem.name} className="flex flex-col ml-2">
                              <span className="px-4 py-2 text-xs font-semibold text-primary">
                                {subItem.name}
                              </span>
                              {subItem.items.map((nestedItem: any) => (
                                <Link
                                  key={nestedItem.name}
                                  to={nestedItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="px-4 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth"
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth"
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-smooth",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/apply-online" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 mt-2">Apply Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
