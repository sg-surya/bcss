# Changelog

## v1.0.0 (2026-05-16)

### Added
- Comprehensive Basic Computer Course content (about, curriculum, projects, FAQ, SEO)
- SEO meta tags & JSON-LD structured data for course pages
- vercel.json with proper XML content-type headers

### Changed
- Course cards redesign: modern layout, removed avatar stack & three-dot menu, image edge-to-edge
- Course details page: premium minimal redesign with reduced border-radius, full-width layout
- Hero section: extended full-width with larger typography, inline stats with icons
- Mentor section: compressed to minimal avatar + name + designation
- About section: shortened to 2 clean paragraphs
- What You'll Learn: converted to minimal pill-style chips
- Career Outcomes: replaced dark card with subtle note
- Why Choose: reduced to 3 minimal pills
- Projects: square grid with right-blended icons
- Sidebar: increased border-radius to rounded-[2rem]
- Removed all emojis, replaced with Lucide icons
- Removed CalendarIcon helper & unused imports
- Reduced CoursesPage bundle 7.21kB → 6.23kB
- Reduced CourseDetailsPage bundle 34.65kB → 18.64kB

### Fixed
- Sitemap serving: vercel.json ensures application/xml Content-Type

### Removed
- Unused imports (Code, PenTool, BarChart, Database, etc.)
- CalendarIcon helper component
- ImageWithSkeleton dependency from CoursesPage
- Avatar stack from course cards
- Three-dot menu overlay from course cards
- Large stat cards from overview tab
