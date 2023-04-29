interface GalleryGridProps {
  children: React.ReactNode[];
}

export const GalleryGrid = ({ children }: GalleryGridProps) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
      {children}
    </div>
  );
};
