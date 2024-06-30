// components/HomeClient.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface HomeClientProps {
  session?: unknown;
}

export default function HomeClient({ session }: HomeClientProps) {
  const cards = [
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 1' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 2' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 3' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 4' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 5' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 6' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 6' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 6' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 6' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 6' },
    { imageUrl: 'https://via.placeholder.com/300', description: 'Image 7' },
  ];

  const router = useRouter();
  const [activeButton, setActiveButton] = useState("community");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-800">
      <div className="w-1/4 bg-gray-600 flex flex-col items-center justify-center p-4 rounded-r-3xl">
        <div className="flex flex-col items-center justify-center flex-1">
          <button
            className={`w-64 text-white px-4 py-2 m-3 rounded focus:outline-none ${
              activeButton === "community"
                ? "bg-pink-600"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => handleButtonClick("community")}
          >
            Community
          </button>
          <button
            className={`w-64 text-white px-4 py-2 m-3 rounded focus:outline-none ${
              activeButton === "store"
                ? "bg-pink-600"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
            onClick={() => handleButtonClick("store")}
          >
            My Store
          </button>
        </div>
        <div className="flex flex-col items-center mt-auto">
          {!session && (
            <button
              onClick={() => router.push("/api/auth/signin")}
              className="w-64 bg-gray-400 text-white px-4 py-2 m-3 rounded"
            >
              Sign in
            </button>
          )}
          {session && (
            <button
              className="bg-red-500 text-white px-4 py-2 m-3 rounded"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>

      <div className="w-3/4 p-4 bg-gray-800 h-screen overflow-hidden">
        <div className="flex justify-between items-center m-4">
          <div>
            <h2 className="text-white text-2xl font-bold">Gallery</h2>
          </div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded" onClick={openModal}>
            Add Picture
          </button>
        </div>

        <section className="overflow-y-auto h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-5">
            {cards.map((card, index) => (
              <div key={index}>
                <img
                  className="h-52 w-full max-w-full rounded-lg object-cover object-center"
                  src={card.imageUrl}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <AddPictureModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}


function AddPictureModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 rounded">
          <div className="bg-[#212121] p-8 rounded-lg w-full max-w-4xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Add Picture</h2>
              <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={onClose}
              >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
                className="border-2 border-dashed border-gray-400 mb-4 p-4 text-center cursor-pointer"
                onDrop={handleImageDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('fileInput')?.click()}
            >
              {file ? (
                  <p className="text-white">{file.name}</p>
              ) : (
                  <p className="text-gray-500 py-8">Drag and drop your image here or click to upload</p>
              )}
              <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
              />
            </div>

            <h2 className="text-xl font-bold text-white">Title</h2>

            <input
                type="text"
                placeholder="Title"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={title}
                onChange={handleTitleChange}
            />

            <h2 className="text-xl font-bold text-white">Description</h2>
            <textarea
                placeholder="Description"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded w-full">
              Save Picture
            </button>
          </div>
        </div>
      )}
    </>
  );
}
