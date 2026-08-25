"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ProjectsData } from "../../types";

import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  FolderGit2,
  ExternalLink,
  Search,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

interface ProjectsSectionProps {
  projects: ProjectsData;
}

type ProjectItem = ProjectsData["items"][number];

export function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    projects.filters.all
  );
  const [visibleCount, setVisibleCount] = useState(
    projects.itemsPerLoad
  );

  const categories = useMemo(() => {
    return [
      projects.filters.all,
      ...new Set(
        projects.items.map(
          (project) => project.category
        )
      ),
    ];
  }, [projects]);

  const featuredCount = useMemo(() => {
    return projects.items.filter(
      (project) => project.featured
    ).length;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.items
      .filter((project) => {
        const keyword = search
          .toLowerCase()
          .trim();

        const matchesSearch =
          keyword === "" ||
          project.title
            .toLowerCase()
            .includes(keyword) ||
          project.description
            .toLowerCase()
            .includes(keyword) ||
          project.category
            .toLowerCase()
            .includes(keyword) ||
          project.techStack.some((tech) =>
            tech
              .toLowerCase()
              .includes(keyword)
          );

        const matchesCategory =
          category === projects.filters.all ||
          project.category === category;

        return (
          matchesSearch &&
          matchesCategory
        );
      })
      .sort((a, b) => {
        if (
          a.featured === b.featured
        ) {
          return 0;
        }

        return a.featured ? -1 : 1;
      });
  }, [
    projects,
    search,
    category,
  ]);

  useEffect(() => {
    setVisibleCount(
      projects.itemsPerLoad
    );
  }, [
    search,
    category,
    projects.itemsPerLoad,
  ]);

  const displayedProjects =
    filteredProjects.slice(
      0,
      visibleCount
    );

  const ProjectCard = ({
    project,
  }: {
    project: ProjectItem;
  }) => (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden border-b border-border bg-muted">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <FolderGit2 className="h-10 w-10 text-muted-foreground" />
          </div>
        )}

        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge>
              {projects.labels.featured}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge variant="secondary">
            {project.category}
          </Badge>

          <div className="flex gap-3 shrink-0">
            {project.links?.github?.trim() && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}

            {project.links?.deploy?.trim() && (
              <a
                href={project.links.deploy}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="py-24 border-t border-border"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <FolderGit2 className="h-6 w-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {projects.title}
          </h2>
        </div>

        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          {projects.description}
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="rounded-2xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            {projects.statistics.total}
          </p>

          <p className="text-3xl font-bold mt-1">
            {projects.items.length}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            {projects.statistics.featured}
          </p>

          <p className="text-3xl font-bold mt-1">
            {featuredCount}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            {projects.statistics.categories}
          </p>

          <p className="text-3xl font-bold mt-1">
            {Math.max(
              0,
              categories.length - 1
            )}
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mb-10 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />

          <Input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder={
              projects.search.placeholder
            }
            className="h-11 pl-10"
          />
        </div>

        {/* Categories */}
        <div className="border-b border-border">
          <div className="flex gap-6 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  setCategory(cat)
                }
                className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                  category === cat
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* List Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">
          {projects.list.title}
        </h3>

        <span className="text-sm text-muted-foreground">
          {filteredProjects.length}{" "}
          {projects.list.resultLabel}
        </span>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border py-20 text-center">
          <FolderGit2 className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />

          <h4 className="font-semibold mb-2">
            {projects.emptyState.title}
          </h4>

          <p className="text-muted-foreground">
            {projects.emptyState.description}
          </p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            {displayedProjects.map(
              (project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              )
            )}
          </div>

          {visibleCount <
            filteredProjects.length && (
            <div className="flex justify-center mt-12">
              <Button
                size="lg"
                onClick={() =>
                  setVisibleCount(
                    (previous) =>
                      previous +
                      projects.itemsPerLoad
                  )
                }
              >
                {projects.loadMoreLabel}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}