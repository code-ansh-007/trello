import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64e9b90d27ef29892f45",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
