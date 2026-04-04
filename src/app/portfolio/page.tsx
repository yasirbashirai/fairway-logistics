"use client";

import { useState, useRef } from "react";
import {
  Upload,
  X,
  Camera,
  Truck,
  MapPin,
  Calendar,
  Image as ImageIcon,
  Plus,
  ChevronDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

/* ──────────────────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────────────────── */

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: string;
  images: string[];
}

/* ──────────────────────────────────────────────────────────────────────────
   Sample portfolio data (showcasing completed loads)
   ────────────────────────────────────────────────────────────────────────── */

const sampleProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Heavy Equipment Transport — Mobile to Montgomery",
    description:
      "Successfully transported oversized construction equipment including a CAT excavator and two skid steers from Mobile to a Montgomery job site. Required specialized flatbed and permit coordination.",
    location: "Mobile, AL → Montgomery, AL",
    date: "March 2026",
    category: "Heavy Haul",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    ],
  },
  {
    id: "2",
    title: "Port Drayage — 40ft Containers to Warehouse",
    description:
      "Multi-container drayage from the Port of Mobile APM Terminals to our bonded warehouse. Same-day pickup with transloading and regional distribution.",
    location: "Port of Mobile, AL",
    date: "February 2026",
    category: "Drayage",
    images: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559511260-66a68e6a684b?w=800&h=600&fit=crop&q=80",
    ],
  },
  {
    id: "3",
    title: "Flatbed Lumber Delivery — Baldwin County",
    description:
      "Regular dedicated flatbed service hauling lumber and building materials from Baldwin County suppliers to construction sites across the Gulf Coast region.",
    location: "Baldwin County, AL → Gulf Coast",
    date: "January 2026",
    category: "Flatbed",
    images: [
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop&q=80",
    ],
  },
  {
    id: "4",
    title: "Warehouse Cross-Docking — Import Distribution",
    description:
      "Received 12 ocean containers at our bonded warehouse, cross-docked and sorted inventory, then distributed via FTL to retailers across 4 states.",
    location: "Mobile, AL (Warehouse)",
    date: "March 2026",
    category: "Warehousing",
    images: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=600&fit=crop&q=80",
    ],
  },
];

const categories = [
  "All",
  "Heavy Haul",
  "Drayage",
  "Flatbed",
  "FTL",
  "Warehousing",
];

/* ──────────────────────────────────────────────────────────────────────────
   Upload Form Component
   ────────────────────────────────────────────────────────────────────────── */

function UploadForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (project: PortfolioProject) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files = e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        setError("Only JPEG and PNG images are accepted.");
        continue;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError("Each file must be under 10MB.");
        continue;
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setUploadedImages((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    }

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || uploadedImages.length === 0) {
      setError("Please fill in all fields and upload at least one photo.");
      return;
    }

    onSubmit({
      id: Date.now().toString(),
      title,
      description,
      location: location || "Gulf Coast",
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
      category: category || "FTL",
      images: uploadedImages,
    });
  };

  const inputClass =
    "w-full bg-navy-950 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-navy-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition outline-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-bold text-white">
            Upload Project Photos
          </h3>
          <button
            onClick={onClose}
            className="text-navy-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-navy-200 mb-1.5 block">
              Project Title <span className="text-gold-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Heavy Haul — Mobile to Atlanta"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-navy-200 mb-1.5 block">
              Description <span className="text-gold-400">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Describe the load, equipment used, and any special details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={inputClass + " resize-none"}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-navy-200 mb-1.5 block">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Mobile, AL"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-navy-200 mb-1.5 block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass + " appearance-none"}
              >
                <option value="" className="bg-navy-950">
                  Select
                </option>
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat} className="bg-navy-950">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="text-sm font-semibold text-navy-200 mb-1.5 block">
              Upload Photos <span className="text-gold-400">*</span>
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-navy-700 hover:border-gold-400/50 rounded-xl p-6 text-center cursor-pointer transition-colors group"
            >
              <Camera className="w-8 h-8 text-navy-500 group-hover:text-gold-400 mx-auto mb-2 transition-colors" />
              <p className="text-sm text-navy-300">
                Click to upload JPEG or PNG photos
              </p>
              <p className="text-xs text-navy-500 mt-1">Max 10MB per file</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Preview uploaded images */}
          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {uploadedImages.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`Upload ${i + 1}`}
                    className="w-full h-20 object-cover"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-black/60 rounded-full p-0.5 text-white hover:text-red-400 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 font-heading font-bold text-sm px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-200"
          >
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Portfolio Page
   ══════════════════════════════════════════════════════════════════════════ */

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>(sampleProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showUpload, setShowUpload] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleNewProject = (project: PortfolioProject) => {
    setProjects((prev) => [project, ...prev]);
    setShowUpload(false);
  };

  return (
    <>
      <title>Project Portfolio | Fairway Logistics LLC</title>
      <meta
        name="description"
        content="See our completed freight projects — heavy haul, drayage, flatbed, and FTL loads across the Gulf Coast. Fairway Logistics project portfolio."
      />

      {/* Hero */}
      <PageHero
        title="Project Portfolio"
        subtitle="See our work in action. From heavy haul to port drayage, every load tells a story of reliability and expertise."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
        backgroundImage="/images/trucks.jpg"
      />

      {/* Portfolio Section */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header + Upload Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
                Our Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Completed Projects
              </h2>
            </div>
            <button
              onClick={() => setShowUpload(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 font-heading font-bold text-sm px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-gold-400/25 transition-all duration-200"
            >
              <Plus className="w-4 h-4" />
              Upload Project
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gold-400 text-navy-950"
                    : "bg-navy-800 text-navy-300 hover:bg-navy-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Main Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-400/90 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                      <ImageIcon className="w-3 h-3" />
                      {project.images.length} photos
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-navy-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-sm text-navy-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Additional images */}
                  {project.images.length > 1 && (
                    <div className="mt-4">
                      <button
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === project.id
                              ? null
                              : project.id
                          )
                        }
                        className="flex items-center gap-1.5 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
                      >
                        {expandedProject === project.id
                          ? "Hide photos"
                          : "View all photos"}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedProject === project.id
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {expandedProject === project.id && (
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {project.images.map((img, i) => (
                            <div
                              key={i}
                              className="rounded-lg overflow-hidden"
                            >
                              <img
                                src={img}
                                alt={`${project.title} — photo ${i + 1}`}
                                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Truck className="w-12 h-12 text-navy-600 mx-auto mb-4" />
              <p className="text-navy-400 text-lg">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upload Modal */}
      {showUpload && (
        <UploadForm
          onClose={() => setShowUpload(false)}
          onSubmit={handleNewProject}
        />
      )}

      {/* CTA */}
      <CTASection
        title="Have a Load That Needs Moving?"
        description="From heavy haul to container drayage, our asset-based fleet handles it all. Get a quote today and let us add your project to our portfolio."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
