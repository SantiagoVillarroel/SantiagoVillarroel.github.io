"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects, getAllTags, filterProjects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n-context";

type SortOption = "recent" | "complexity" | "featured";

export default function Projects() {
  const { t } = useI18n();
  // helper: convert slug to camelCase key used in translations (e.g., "whatsapp-bot" -> "whatsappBot")
  const slugToCamelCase = (slug: string) =>
    slug
      .split("-")
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [displayCount, setDisplayCount] = useState(6);
  const storageKey = "projects.filters.v1";

  // Load saved filters from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed) {
        if (Array.isArray(parsed.selectedTags)) setSelectedTags(parsed.selectedTags);
        if (typeof parsed.searchQuery === "string") setSearchQuery(parsed.searchQuery);
        if (["recent", "complexity", "featured"].includes(parsed.sortBy))
          setSortBy(parsed.sortBy as SortOption);
        if (typeof parsed.displayCount === "number") setDisplayCount(parsed.displayCount);
      }
    } catch (e) {
      // ignore JSON parse errors
      // console.warn("Failed to load project filters", e)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist filters to localStorage whenever they change
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const payload = {
        selectedTags,
        searchQuery,
        sortBy,
        displayCount,
      };
      window.localStorage.setItem(storageKey, JSON.stringify(payload));
    } catch (e) {
      // ignore storage errors
    }
  }, [selectedTags, searchQuery, sortBy, displayCount]);

  const allTags = getAllTags();

  // No URL syncing: keep filter state purely client-side to avoid unexpected navigation/scroll jumps.

  // Filter and sort projects
  const filteredProjects = useMemo(
    () => filterProjects(projects, selectedTags, searchQuery, sortBy),
    [selectedTags, searchQuery, sortBy]
  );

  const displayedProjects = filteredProjects.slice(0, displayCount);
  const hasMore = displayCount < filteredProjects.length;

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setDisplayCount(6); // Reset pagination on filter change
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
    setSortBy("recent");
    setDisplayCount(6);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 4);
  };

  // Render immediately; filtering is client-side only.

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-3xl font-bold mb-12">{t("projects.title", "Projects")}</h2>

      {/* Filter Controls */}
      <div className="mb-8 space-y-6">
        {/* Search Input */}
        <div>
          <Input
            placeholder={t("projects.search", "Search projects by name, keywords...")}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(6);
            }}
            className="w-full max-w-md"
          />
        </div>

        {/* Tag Filters */}
<div className="flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => handleTagToggle(tag)}
                className="text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>
        

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          {t("projects.showingOf", "Showing {current} of {total} projects")
            .replace("{current}", displayedProjects.length.toString())
            .replace("{total}", filteredProjects.length.toString())}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  {/* Project Image */}
                  {project.image && (
                    <div className="h-40 w-full overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="px-4 pt-3 pb-0">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : project.status === "MVP"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <CardHeader className="py-3 pb-2">
                    <CardTitle className="text-base">{t(
                      `projectDetails.${slugToCamelCase(project.slug)}.title`,
                      project.title
                    )}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-3 py-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {t(
                        `projectDetails.${slugToCamelCase(project.slug)}.overview`,
                        project.description
                      )}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap pt-1">
                      {project.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagToggle(tag)}
                          className={`text-xs px-2 py-1 rounded-full transition-colors ${
                            selectedTags.includes(tag)
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </CardContent>

                  {/* CTA Button */}
                  <div className="px-4 py-3 pt-2">
                    <Button variant="default" size="sm" className="w-full" asChild>
                      <a href={`/projects/${project.slug}`}>{t("projects.viewProject", "View Project")}</a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                {t("projects.loadMore", "Load More Projects")}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            {t("projects.noResults", "No projects found matching your filters.")}
          </p>
          <Button variant="outline" onClick={handleClearFilters}>
            {t("projects.clearFilters", "Clear filters")}
          </Button>
        </div>
      )}
    </section>
  );
}
