/* eslint-disable @typescript-eslint/no-explicit-any */
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const presetFile = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;
const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET_KEY;
const baseURL = `https://api.cloudinary.com/v1_1/${cloudName}`;

export const uploadToCloudinary = async (file: File, folderName: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", `${presetFile}`);
  formData.append("folder", `users/${folderName}`);

  const response = await fetch(`${baseURL}/upload`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.secure_url;
};

export const fetchFilesFromCloudinary = async (folderName: string) => {


  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `folder:${folderName}`,
        max_results: 100,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Cloudinary fetch failed: ${response.statusText} - ${errorText}`
    );
  }

  const data = await response.json();

  const files = data.resources.map((resource: any) => ({
    url: resource.secure_url,
    publicId: resource.public_id,
    format: resource.format,
    createdAt: resource.created_at,
  }));

  return files;
};
