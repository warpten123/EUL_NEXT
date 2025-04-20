import { CloudinaryFile } from "../components/User/UserSDGs";
import { staticSDGData } from "../data/staticSDGData";
import {
  SDGCard,
  SdgClassificationResult,
  SDGCollection,
  SDGViewCard,
  YourSDGCard,
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
    case "Goal 5: Gender Equality":
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

export const getSDGColor = (title: string): string => {
  const sdgColors: { [key: string]: string } = {
    "Goal 1: No Poverty": "#E5243B",
    "Goal 2: Zero Hunger": "#DDA63A",
    "Goal 3: Good Health and Well-Being": "#4C9F38",
    "Goal 4: Quality Education": "#C5192D",
    "Goal 5: Gender Equality": "#FF3A21",
    "Goal 6: Clean Water and Sanitation": "#26BDE2",
    "Goal 7: Affordable and Clean Energy": "#FCC30B",
    "Goal 8: Decent Work and Economic Growth": "#A21942",
    "Goal 9: Industry, Innovation, and Infrastructure": "#FD6925",
    "Goal 10: Reduced Inequalities": "#DD1367",
    "Goal 11: Sustainable Cities and Communities": "#FD9D24",
    "Goal 12: Responsible Consumption and Production": "#BF8B2E",
    "Goal 13: Climate Action": "#3F7E44",
    "Goal 14: Life Below Water": "#0A97D9",
    "Goal 15: Life on Land": "#56C02B",
    "Goal 16: Peace, Justice and Strong Institutions": "#00689D",
    "Goal 17: Partnership for the Goals": "#19486A",
  };
  return sdgColors[title] || "#4fc3f7";
};

// export const convertToYourSDG = (
// fromFirebase: SDGCollection[],
// fromCloudinary: CloudinaryFile[]

// ): YourSDGCard[] => {

// }

export const convertToYourSDG = (
  fromFirebase: SDGCollection[],
  fromCloudinary: CloudinaryFile[]
): YourSDGCard[] => {
  const payload: YourSDGCard[] = fromCloudinary
    .filter((cloud) =>
      fromFirebase.some((firebase) => firebase.id === parseCloudinaryPath(cloud.public_id)) // Match by public_id
    )
    .map((cloud) => {
      const matchedFirebase = fromFirebase.find(
        (firebase) => firebase.id === parseCloudinaryPath(cloud.public_id)
      );

      if (!matchedFirebase) {
        return null; // Skip if no match is found
      }

      // Change the extension of secure_url to .jpg
      const staticImage = cloud.secure_url.replace(/\.[^/.]+$/, ".jpg");

      return {
        researchId: matchedFirebase.id, // Use the Firebase document ID
        userId:matchedFirebase.id.split("-")[0], // Extract userId from the path
        url: cloud.secure_url, // Use the Cloudinary secure URL
        staticImage, // Use the modified URL with .jpg extension
        goals: matchedFirebase.goals, // Include goals from Firebase
      } as YourSDGCard;
    })
    .filter((item): item is YourSDGCard => item !== null); // Filter out null values

  return payload;
};

/**
 * Parses a Cloudinary-style path and returns a combined ID.
 * @param path A string like "users/UID/resID"
 * @returns A string like "UID-resID"
 */
export function parseCloudinaryPath(path: string): string {
  const parts = path.split("/");

  if (parts.length !== 3 || parts[0] !== "users") {
    throw new Error(
      "Invalid path format. Expected format: users/{uid}/{resId}"
    );
  }

  const uid = parts[1];
  const resId = parts[2];

  return `${uid}-${resId}`;
}
