import { lazy, Suspense } from "react";
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

// Lazy-loaded main pages
const About = lazy(() => import("./pages/About"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Academics = lazy(() => import("./pages/Academics"));
const CampusLife = lazy(() => import("./pages/CampusLife"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ApplyOnline = lazy(() => import("./pages/ApplyOnline"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const Admin = lazy(() => import("./pages/Admin"));

// Lazy-loaded About Us subpages
const Overview = lazy(() => import("./pages/about/Overview"));
const VisionMission = lazy(() => import("./pages/about/VisionMission"));
const Management = lazy(() => import("./pages/about/Management"));
const ChairmanMessage = lazy(() => import("./pages/about/ChairmanMessage"));
const PrincipalMessage = lazy(() => import("./pages/about/PrincipalMessage"));
const Infrastructure = lazy(() => import("./pages/about/Infrastructure"));
const OurFaculties = lazy(() => import("./pages/about/OurFaculties"));
const Accreditation = lazy(() => import("./pages/about/Accreditation"));
const Documents = lazy(() => import("./pages/about/Documents"));

// Lazy-loaded Academics subpages
const SchoolCurriculum = lazy(() => import("./pages/academics/SchoolCurriculum"));
const Curriculum = lazy(() => import("./pages/academics/Curriculum"));
const SubjectsOffered = lazy(() => import("./pages/academics/SubjectsOffered"));
const TimetableCalendar = lazy(() => import("./pages/academics/TimetableCalendar"));
const PUStreams = lazy(() => import("./pages/academics/PUStreams"));
const PUSyllabus = lazy(() => import("./pages/academics/PUSyllabus"));
const PUResults = lazy(() => import("./pages/academics/PUResults"));

// Lazy-loaded Admissions subpages
const AdmissionProcess = lazy(() => import("./pages/admissions/AdmissionProcess"));
const FeeStructure = lazy(() => import("./pages/admissions/FeeStructure"));
const EligibilityCriteria = lazy(() => import("./pages/admissions/EligibilityCriteria"));
const ProspectusDownload = lazy(() => import("./pages/admissions/ProspectusDownload"));

// Lazy-loaded Campus Life subpages
const Activities = lazy(() => import("./pages/campus-life/Activities"));
const EventsGallery = lazy(() => import("./pages/campus-life/EventsGallery"));
const ClubsCommittees = lazy(() => import("./pages/campus-life/ClubsCommittees"));
const EventsCelebrations = lazy(() => import("./pages/campus-life/EventsCelebrations"));
const Gallery = lazy(() => import("./pages/campus-life/Gallery"));

// Lazy-loaded Achievements subpages
const AcademicAchievements = lazy(() => import("./pages/achievements/AcademicAchievements"));
const CoCurricularAchievements = lazy(() => import("./pages/achievements/CoCurricularAchievements"));
const AlumniSuccess = lazy(() => import("./pages/achievements/AlumniSuccess"));

// Lazy-loaded Resources subpages
const Notices = lazy(() => import("./pages/resources/Notices"));
const StudyMaterials = lazy(() => import("./pages/resources/StudyMaterials"));
const QuestionPapers = lazy(() => import("./pages/resources/QuestionPapers"));
const Library = lazy(() => import("./pages/resources/Library"));

const PageLoading = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <Suspense fallback={<PageLoading />}>
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
          </Suspense>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
