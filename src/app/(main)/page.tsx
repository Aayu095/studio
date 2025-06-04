import MapPlaceholder from '@/components/map-placeholder';

export default function HomePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-2 font-headline">Explore India's Cultural Landscape</h1>
      <p className="text-center text-muted-foreground mb-8 font-body">
        Navigate through the diverse cultural tapestry of India. Discover hidden gems and well-known traditions.
      </p>
      <MapPlaceholder />
      {/* Placeholder for pins/markers data that would be passed to a real map component */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Locations</h2>
        <p className="text-muted-foreground">Sample cultural items would be plotted on the map.</p>
      </div> */}
    </div>
  );
}
