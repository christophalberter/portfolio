const weatherMeLogo = '../assets/projects/weatherMe.webp';
const storySwapLogo = '../assets/projects/storyswap.jpeg';

interface ProjectInterface {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const data: ProjectInterface[] = [
  {
    id: 1,
    name: 'WeatherMe',
    image: weatherMeLogo,
    description:
      'WeatherMe is an application designed to record data about the weather conditions within a greenhouse. It tracks and monitors temperature and humidity data from sensors, aiming to automate irrigation systems.',
  },

  {
    id: 3,
    name: 'StorySwap',
    image: storySwapLogo,
    description:
      'StorySwap is a tool to assist amateur writers in registering their copyright using NFTs (Non-Fungible Tokens). Users can associate a story published online with an NFT to register copyrights in a decentralized manner.',
  },
];
