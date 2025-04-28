import axios from 'axios';
import { SdgClassificationResult, UploadResponse } from '../types/SDG/SDGCard';



const BASE_URL = process.env.NEXT_PUBLIC_ALGORITHM_PYTHON

export const fetchClassification = async (filename: string): Promise<SdgClassificationResult> => {
    try {
      const response = await axios.get(`${BASE_URL}/python/classify/${filename}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching classification:', error);
      throw error;
    }
  };


  export const uploadFile = async (file: File, researchId: string): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('research_id', researchId);
  
    try {
      const response = await axios.post<UploadResponse>(`${BASE_URL}/upload-file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };