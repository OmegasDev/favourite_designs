/*
  # Portfolio Management Schema

  1. New Tables
    - `artworks`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `created_date` (date)
      - `medium` (text)
      - `dimensions` (text)
      - `price` (numeric, nullable)
      - `exhibition_history` (text[])
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `user_id` (uuid, references auth.users)
    
    - `artwork_images`
      - `id` (uuid, primary key)
      - `artwork_id` (uuid, references artworks)
      - `url` (text)
      - `position` (integer)
      - `created_at` (timestamp)
    
    - `artwork_categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `created_at` (timestamp)
    
    - `artwork_category_relations`
      - `artwork_id` (uuid, references artworks)
      - `category_id` (uuid, references artwork_categories)
      - PRIMARY KEY (artwork_id, category_id)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create artworks table
CREATE TABLE IF NOT EXISTS artworks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  created_date date NOT NULL,
  medium text,
  dimensions text,
  price numeric,
  exhibition_history text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

-- Create artwork_images table
CREATE TABLE IF NOT EXISTS artwork_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artwork_id uuid REFERENCES artworks ON DELETE CASCADE NOT NULL,
  url text NOT NULL,
  position integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create artwork_categories table
CREATE TABLE IF NOT EXISTS artwork_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create artwork_category_relations table
CREATE TABLE IF NOT EXISTS artwork_category_relations (
  artwork_id uuid REFERENCES artworks ON DELETE CASCADE,
  category_id uuid REFERENCES artwork_categories ON DELETE CASCADE,
  PRIMARY KEY (artwork_id, category_id)
);

-- Enable RLS
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE artwork_category_relations ENABLE ROW LEVEL SECURITY;

-- Policies for artworks
CREATE POLICY "Artworks are viewable by everyone"
  ON artworks FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their own artworks"
  ON artworks FOR ALL
  USING (auth.uid() = user_id);

-- Policies for artwork_images
CREATE POLICY "Artwork images are viewable by everyone"
  ON artwork_images FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their artwork images"
  ON artwork_images FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM artworks
      WHERE artworks.id = artwork_images.artwork_id
      AND artworks.user_id = auth.uid()
    )
  );

-- Policies for categories
CREATE POLICY "Categories are viewable by everyone"
  ON artwork_categories FOR SELECT
  USING (true);

CREATE POLICY "Only authenticated users can manage categories"
  ON artwork_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Policies for category relations
CREATE POLICY "Category relations are viewable by everyone"
  ON artwork_category_relations FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their artwork category relations"
  ON artwork_category_relations FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM artworks
      WHERE artworks.id = artwork_category_relations.artwork_id
      AND artworks.user_id = auth.uid()
    )
  );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for artworks
CREATE TRIGGER update_artworks_updated_at
    BEFORE UPDATE ON artworks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();