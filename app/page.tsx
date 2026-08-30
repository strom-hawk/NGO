import { ImageCarousel } from "./components/image-carousel";

const images = [
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    alt: "People working together outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
    alt: "Hands holding a small plant",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    alt: "Volunteers standing together",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <ImageCarousel images={images} />
    </main>
  );
}
