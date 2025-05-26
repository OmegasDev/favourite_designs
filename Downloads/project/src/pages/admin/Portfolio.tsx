import React, { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Image as ImageIcon } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface Artwork {
  id: string;
  title: string;
  description: string;
  created_date: string;
  medium: string;
  dimensions: string;
  price: number | null;
  exhibition_history: string[];
  images: { id: string; url: string; position: number }[];
  categories: { id: string; name: string }[];
}

const Portfolio: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const { data: artworksData, error: artworksError } = await supabase
        .from('artworks')
        .select(`
          *,
          artwork_images (id, url, position),
          artwork_category_relations (
            artwork_categories (id, name)
          )
        `)
        .order('created_at', { ascending: false });

      if (artworksError) throw artworksError;

      const formattedArtworks = artworksData.map(artwork => ({
        ...artwork,
        images: artwork.artwork_images || [],
        categories: artwork.artwork_category_relations.map(
          (relation: any) => relation.artwork_categories
        ),
      }));

      setArtworks(formattedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      toast.error('Failed to load artworks');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this artwork?')) return;

    try {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setArtworks(artworks.filter(artwork => artwork.id !== id));
      toast.success('Artwork deleted successfully');
    } catch (error) {
      console.error('Error deleting artwork:', error);
      toast.error('Failed to delete artwork');
    }
  };

  const handleEdit = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-violet-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio Management</h1>
        <button
          onClick={() => {
            setSelectedArtwork(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New Artwork
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
          >
            <div className="aspect-square relative overflow-hidden bg-gray-800">
              {artwork.images.length > 0 ? (
                <img
                  src={artwork.images[0].url}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon size={48} className="text-gray-600" />
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium text-white mb-2">{artwork.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{artwork.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {artwork.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-2 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs"
                  >
                    {category.name}
                  </span>
                ))}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(artwork)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(artwork.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal will be implemented separately */}
    </div>
  );
};

export default Portfolio;