import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import CampusLife from "./pages/CampusLife";
import Achievements from "./pages/Achievements";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ApplyOnline from "./pages/ApplyOnline";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";

// About Us subpages
import Overview from "./pages/about/Overview";
import VisionMission from "./pages/about/VisionMission";
import Management from "./pages/about/Management";
import ChairmanMessage from "./pages/about/ChairmanMessage";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import Infrastructure from "./pages/about/Infrastructure";
import OurFaculties from "./pages/about/OurFaculties";
import Accreditation from "./pages/about/Accreditation";
import Documents from "./pages/about/Documents";

// Academics subpages
import SchoolCurriculum from "./pages/academics/SchoolCurriculum";
import Curriculum from "./pages/academics/Curriculum";
import SubjectsOffered from "./pages/academics/SubjectsOffered";
import TimetableCalendar from "./pages/academics/TimetableCalendar";
import PUStreams from "./pages/academics/PUStreams";
import PUSyllabus from "./pages/academics/PUSyllabus";
import PUResults from "./pages/academics/PUResults";

// Admissions subpages
import AdmissionProcess from "./pages/admissions/AdmissionProcess";
import FeeStructure from "./pages/admissions/FeeStructure";

// Campus Life subpages
import Activities from "./pages/campus-life/Activities";
import EventsGallery from "./pages/campus-life/EventsGallery";

// Achievements subpages
import AcademicAchievements from "./pages/achievements/AcademicAchievements";
import CoCurricularAchievements from "./pages/achievements/CoCurricularAchievements";
import AlumniSuccess from "./pages/achievements/AlumniSuccess";
import EligibilityCriteria from "./pages/admissions/EligibilityCriteria";
import ProspectusDownload from "./pages/admissions/ProspectusDownload";
import ClubsCommittees from "./pages/campus-life/ClubsCommittees";
import EventsCelebrations from "./pages/campus-life/EventsCelebrations";
import Gallery from "./pages/campus-life/Gallery";
import QuestionPapers from "./pages/resources/QuestionPapers";
import Library from "./pages/resources/Library";

// Resources subpages
import Notices from "./pages/resources/Notices";
import StudyMaterials from "./pages/resources/StudyMaterials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/overview" element={<Overview />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/chairman-message" element={<ChairmanMessage />} />
            <Route path="/about/principal-message" element={<PrincipalMessage />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />
            <Route path="/about/faculties" element={<OurFaculties />} />
            <Route path="/about/accreditation" element={<Accreditation />} />
            <Route path="/about/documents" element={<Documents />} />
            <Route path="/mandatory-disclosure" element={<Documents />} />
            
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/school-curriculum" element={<SchoolCurriculum />} />
            <Route path="/academics/pu-streams" element={<PUStreams />} />
            
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/admissions/process" element={<AdmissionProcess />} />
            <Route path="/admissions/fee-structure" element={<FeeStructure />} />
            
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/campus-life/activities" element={<Activities />} />
            <Route path="/campus-life/events-gallery" element={<EventsGallery />} />
            
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/achievements/academic" element={<AcademicAchievements />} />
            <Route path="/achievements/co-curricular" element={<CoCurricularAchievements />} />
            <Route path="/achievements/alumni" element={<AlumniSuccess />} />
            
            {/* Academics - School */}
            <Route path="/academics/school/curriculum" element={<Curriculum />} />
            <Route path="/academics/school/subjects" element={<SubjectsOffered />} />
            <Route path="/academics/school/timetable" element={<TimetableCalendar />} />
            
            {/* Academics - PU College */}
            <Route path="/academics/pu/streams" element={<PUStreams />} />
            <Route path="/academics/pu/syllabus" element={<PUSyllabus />} />
            <Route path="/academics/pu/results" element={<PUResults />} />
            
            {/* Admissions */}
            <Route path="/admissions/eligibility" element={<EligibilityCriteria />} />
            <Route path="/admissions/prospectus" element={<ProspectusDownload />} />
            
            {/* Campus Life */}
            <Route path="/campus-life/clubs" element={<ClubsCommittees />} />
            <Route path="/campus-life/events" element={<EventsCelebrations />} />
            <Route path="/campus-life/gallery" element={<Gallery />} />
            
            {/* Resources */}
            <Route path="/resources/question-papers" element={<QuestionPapers />} />
            <Route path="/resources/library" element={<Library />} />
            
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/notices" element={<Notices />} />
            <Route path="/resources/study-materials" element={<StudyMaterials />} />
            
            <Route path="/apply-online" element={<ApplyOnline />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
