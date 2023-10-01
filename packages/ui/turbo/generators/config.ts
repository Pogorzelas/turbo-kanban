import type { PlopTypes } from '@turbo/gen';

function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of component is this?',
        choices: ['atoms', 'molecules', 'organisms'],
      }
    ],
    actions: [
      {
        type: 'add',
        path: './src/{{type}}/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/component/component.hbs',
      },
      {
        type: 'add',
        path: './src/{{type}}/{{kebabCase name}}/index.ts',
        templateFile: 'templates/component/index.hbs',
      },
      {
        type: 'add',
        path: './src/{{type}}/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: 'templates/component/types.hbs',
      },
      {
        type: 'add',
        path: '../../apps/docs/stories/{{type}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component/stories.hbs',
      },
      {
        type: 'append',
        path: './src/index.tsx',
        pattern: /(?<insertion>\/\/ generatorID)/g,
        template: 'export * from \'./{{type}}/{{kebabCase name}}\';',
      },
    ],
  });
}

export default generator;
