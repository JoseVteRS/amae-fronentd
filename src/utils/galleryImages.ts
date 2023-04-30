export const galleryImages = (images: []) => {
    if (!images || images.length < 0) return [];
    return images.map((image: any) => ({
      src: `${process.env.NEXT_PUBLIC_API_URL}${image.attributes.url}`,
      width: image.attributes.width,
      height: image.attributes.height,
    }));
  };