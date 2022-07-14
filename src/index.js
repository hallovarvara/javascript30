import { MainPage } from './pages/main-page.js';
import { DrumKit } from './projects/drum-kit/index.js';
import { PROJECTS } from './data.js';
import { Node } from './components/Node.js';

const projectData = PROJECTS[0];

const projectStyles = new Node({
  addToParent: true,
  attributes: [
    { key: 'type', value: 'text/css' },
    { key: 'rel', value: 'stylesheet' },
    { key: 'href', value: `./projects/${projectData.id}/index.css` },
  ],
  parent: document.head,
  tag: 'link',
});

// MainPage();

const currentProject = new DrumKit();
