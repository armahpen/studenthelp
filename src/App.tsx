
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Subjects from "./pages/Subjects";
import Contact from "./pages/Contact";
import TeacherRecruitment from "./pages/TeacherRecruitment";
import TeacherAptitudeTest from "./pages/TeacherAptitudeTest";
import CurriculumSelection from "./pages/CurriculumSelection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teacher-recruitment" element={<TeacherRecruitment />} />
          <Route path="/teacher-aptitude-test" element={<TeacherAptitudeTest />} />
          <Route path="/curriculum-selection" element={<CurriculumSelection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
