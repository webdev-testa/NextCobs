import { Project } from "@/lib/portfolio-catalog";
import { ProductShowcase } from "@/components/ProductShowcase";

export function ProjectPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  const screens = project.screenshots?.slice(0, project.previewCount || 1);
  if (!screens?.length) {
    return <ProductShowcase src={project.heroImage} alt={project.title} type="minimal" priority={priority} />;
  }
  const mixed = screens.length > 1 && screens.some((screen) => (screen.aspectRatio || 1.6) > 1);
  return (
    <div className={screens.length > 1 ? `project-preview ${mixed ? `project-preview-mixed ${screens.length === 3 ? "project-preview-mixed-trio" : ""}` : "project-preview-mobile"}` : undefined}>
      {screens.map((screen, index) => (
        <ProductShowcase
          key={screen.src}
          src={screen.src}
          alt={screen.alt}
          imageAspectRatio={screen.aspectRatio}
          sizes={screen.aspectRatio && screen.aspectRatio < 1 ? "(max-width: 639px) 30vw, 280px" : "(max-width: 1023px) 90vw, 700px"}
          type="minimal"
          caption={screen.caption || screen.title}
          priority={priority && index === 0}
        />
      ))}
    </div>
  );
}
