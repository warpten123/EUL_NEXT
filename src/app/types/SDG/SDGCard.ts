export interface SdgClassificationResult {
  [goal: string]: number;
}

export interface SDGCard {
  title: string;
  description: string;
  image: string;
  percent: number
}

export interface UploadResponse {
  message: string;
  fileName: string;
  research_id: string;
}


export interface SDGViewCard {
  title: string
  description: string
  overview: string
  imageUrl: string
  targets: number
  targetLink: string
}