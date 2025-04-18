import { staticSDGData } from "../data/staticSDGData";
import {
  SDGCard,
  SdgClassificationResult,
  SDGViewCard,
} from "../types/SDG/SDGCard";

export const convertSDGResultToCard = (
  data: SdgClassificationResult
): SDGCard[] => {
  const filteredSDG: SDGCard[] = [];
  Object.entries(data).forEach(([goal, value]) => {
    console.log(`Goal: ${goal}, Value: ${value}`);
    filteredSDG.push({
      title: goal,
      description: `This is a description for ${goal}`,
      image: sdgImageMapper(goal),
      percent: value,
    });
  });
  filteredSDG.sort((a, b) => b.percent - a.percent);
  return filteredSDG;
};

const sdgImageMapper = (sdgTitle: string) => {
  switch (sdgTitle) {
    case "Goal 1: No Poverty":
      return "/images/goal 1.png";
    case "Goal 2: Zero Hunger":
      return "/images/goal 2.png";
    case "Goal 3: Good Health and Well-Being":
      return "/images/goal 3.png";
    case "Goal 4: Quality Education":
      return "/images/goal 4.png";
    case "Goal 5: Gender Quality":
      return "/images/goal 5.png";
    case "Goal 6: Clean Water and Sanitation":
      return "/images/goal 6.png";
    case "Goal 7: Affordable and Clean Energy":
      return "/images/goal 7.png";
    case "Goal 8: Decent Work and Economic Growth":
      return "/images/goal 8.png";
    case "Goal 9: Industry, Innovation, and Infrastructure":
      return "/images/goal 9.png";
    case "Goal 10: Reduced Inequalities":
      return "/images/goal 10.png";
    case "Goal 11: Sustainable Cities and Communities":
      return "/images/goal 11.png";
    case "Goal 12: Responsible Consumption and Production":
      return "/images/goal 12.png";
    case "Goal 13: Climate Action":
      return "/images/goal 13.png";
    case "Goal 14: Life Below Water":
      return "/images/goal 14.png";
    case "Goal 15: Life on Land":
      return "/images/goal 15.png";
    case "Goal 16: Peace, Justice and Strong Institutions":
      return "/images/goal 16.png";
    case "Goal 17: Partnership for the Goals":
      return "/images/goal 17.png";
    default:
      return "/images/default.png";
  }
};

export const generateResearchId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const randomNumber = Math.floor(Math.random() * 1000000);
  return `${year}${month}${day}-${randomNumber}`;
};

export const createSDGViewCard = (data: SDGCard): SDGViewCard | null => {
  const item = staticSDGData.find((item) => item.title === data.title);
  if (item) {
    return {
      title: item.title,
      description: item.description,
      overview: item.overview,
      imageUrl: item.imageUrl,
      targets: item.targets,
      targetLink: item.targetLink,
    };
  }
  return null; 
};
