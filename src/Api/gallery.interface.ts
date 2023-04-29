export interface Gallery {
    id:         number;
    attributes: GalleryAttributes;
}

export interface GalleryAttributes {
    title:       string;
    slug:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Thumbnail:   Thumbnail;
}

export interface Thumbnail {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    thumbnail: Large;
    medium:    Large;
    small:     Large;
    large:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}
