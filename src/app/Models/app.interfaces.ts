export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  project: string;
  bullets: string[];
}
export interface Navbar {
    label:string,
    section:string;
}