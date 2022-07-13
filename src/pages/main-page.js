import { Node } from '../components/Node.js';
import { makePageClassname } from '../utils/make-page-classname.js';
import { PROJECTS } from '../data.js';
import { ProjectCard } from '../components/ProjectCard.js';

export const MainPage = () => {
  const projectsNodes = PROJECTS.map((project) => new ProjectCard(project));
  const heading = new Node({ tag: 'h1', textContent: 'Projects' });
  const main = new Node({
    tag: 'main',
    children: projectsNodes,
    className: 'project-cards-container',
  });

  return new Node({
    className: makePageClassname('main'),
    children: [heading, main],
    addToParent: true,
  });
};
