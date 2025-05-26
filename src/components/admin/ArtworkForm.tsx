'use client';

import React, { useEffect, useState } from 'react';
import { Upload, X, Loader } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type Category = {
  id: string;
  name: string;
};

type Artwork = {
  id: string;
  title: string;
  description: string;
  price: number;
  categories: string[];
};

const ArtworkForm = ({ artwork }: { artwork?: Artwork }) => {
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: artwork?.title || '',
    description: artwork?.description || '',
    price: artwork?.price.toString() || '',
    selectedCategories: artwork?.categories || [],
  });

  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) return;
      setUserId(data.user.id);
    };

    const fetchCategories = async () => {
      const { data, error } = await supabase.from('categories').select('*');
      if (error) return;
      setCategories(data);
    };

    getUser();
    fetchCategories();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...files]);
    setPreviewUrls(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...previewUrls];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setImages(newImages);
    setPreviewUrls(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { title, description, price, selectedCategories } = formData;

      if (!title || !description || !price || selectedCategories.length === 0) {
        alert('Please fill in all fields');
        setLoading(false);
        return;
      }

      const artworkPayload = {
        title,
        description,
        price: parseFloat(price),
        categories: selectedCategories,
        user_id: userId,
      };

      const { data: artworkData, error: insertError } = await supabase
        .from('artworks')
        .insert([artworkPayload])
        .select()
        .single();

      if (insertError) throw insertError;

      const imageUploads = await Promise.all(
        images.map(async (image, index) => {
          const filePath = `${artworkData.id}/${Date.now()}_${image.name}`;
          const { error: uploadError } = await supabase.storage
            .from('artworks')
            .upload(filePath, image);

          if (uploadError) throw uploadError;

          const {
            data: { publicUrl },
          } = supabase.storage.from('artworks').getPublicUrl(filePath);

          return {
            url: publicUrl,
            artwork_id: artworkData.id,
          };
        })
      );

      if (imageUploads.length > 0) {
        const { error: imageInsertError } = await supabase
          .from('artwork_images')
          .insert(imageUploads);
        if (imageInsertError) throw imageInsertError;
      }

      alert('Artwork uploaded successfully!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        {artwork ? 'Edit Artwork' : 'Upload New Artwork'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Price (USD)</label>
            <input
              type="number"
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Categories</label>
          <select
            multiple
            value={formData.selectedCategories}
            onChange={e =>
              setFormData({
                ...formData,
                selectedCategories: Array.from(e.target.selectedOptions, o => o.value),
              })
            }
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white h-32"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Upload Images</label>
          <div className="flex flex-wrap gap-4 mb-2">
            {previewUrls.map((url, idx) => (
              <div key={idx} className="relative w-24 h-24 border border-gray-700 rounded overflow-hidden">
                <img src={url} className="w-full h-full object-cover" alt={`preview-${idx}`} />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 bg-black/60 rounded-full p-1 text-white"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 hover:text-white">
            <Upload size={16} />
            <span>Click to upload images</span>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          disabled={loading}
        >
          {loading && <Loader className="animate-spin" size={18} />}
          {loading ? 'Saving...' : artwork ? 'Update Artwork' : 'Create Artwork'}
        </button>
      </form>
    </div>
  );
};

export default ArtworkForm;
