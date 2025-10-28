import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12">
  <BlurFade delay={BLUR_FADE_DELAY * 3}>
    <h2 className="text-xl font-bold mb-6 text-center">About</h2>
  </BlurFade>

  <BlurFade delay={BLUR_FADE_DELAY * 4}>
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-6">

      {/* Title + Description */}
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Full-Stack Developer
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Sunaina Bisht</strong> is a passionate developer dedicated to
          building clean, performant, and scalable digital experiences. She’s
          currently pursuing <strong>Computer Science Engineering</strong> and
          has hands-on experience from BharatPe and Greenfuel Energy.
        </p>
      </div>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-muted-foreground/20 my-2" />

      {/* Tech Stack */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
          Tech Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-2">
          {DATA.skills.slice(0, 8).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-muted-foreground/20 my-2" />

      {/* Info Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="rounded-lg border bg-background/50 px-6 py-3 text-sm shadow-sm">
          <h4 className="font-medium">Computer Science & Engineering</h4>
          <p className="text-muted-foreground text-xs">
            Graphic Era Hill University
          </p>
        </div>
        <div className="rounded-lg border bg-background/50 px-6 py-3 text-sm shadow-sm">
          <h4 className="font-medium">Location</h4>
          <p className="text-muted-foreground text-xs">
            India · Open to Remote Work
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link
          href={DATA.resume as string}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg bg-primary/90 text-white px-5 py-2 text-sm font-medium hover:bg-primary transition-colors"
        >
          Download Resume
        </Link>
        <Link
          href={`mailto:${DATA.contact.email}`}
          className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-5 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
        >
          Let's Connect
        </Link>
      </div>
    </div>
  </BlurFade>
</section>


      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <p className="max-w-md text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question, want to work together, or just want
              to say hi, feel free to reach out!
            </p>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="inline-block rounded-lg border border-primary bg-primary/10 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary/20"
            >
              {DATA.contact.email}
            </Link>
            <Link
              href={`tel:${DATA.contact.tel}`}
              className="inline-block rounded-lg border border-primary bg-primary/10 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary/20 ml-4"
            >
              {DATA.contact.tel}
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
