export interface SdgClassificationResult {
  [goal: string]: number;
}

export interface SDGCard {
  title: string;
  description: string;
  image: string;
}

export interface UploadResponse {
  message: string;
  fileName: string;
  research_id: string;
}
