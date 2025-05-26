const compawtible = '../assets/projects/compawtible.png';

interface ProjectInterface {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const data: ProjectInterface[] = [
  {
    id: 1,
    name: 'Compawtible',
    image: compawtible,
    description:
      'Compawtible is an application designed to match people with their perfect pet using AI.',
  },
];
