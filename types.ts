export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  defaultVibe: string;
}

export interface PlaylistItem {
  title: string;
  artist: string;
  duration: string;
}

export enum ViewMode {
  GALLERY = 'GALLERY',
  ABOUT = 'ABOUT'
}