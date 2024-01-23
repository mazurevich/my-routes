export default function AboutPage() {
  return (
    <section className="w-full max-w-3xl space-y-8 py-12">
      <h1 className="text-center text-3xl font-bold">Introducing My Routes</h1>
      <p className="text-gray-600 dark:text-gray-400">
        The ultimate application for avid fitness enthusiasts and outdoor
        adventurers. This innovative app seamlessly integrates with Strava,
        empowering users to explore and visualize their fitness journeys like
        never before.
      </p>
      <h2 className="text-center text-2xl font-bold">Key Features</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Route Aggregator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            My Routes efficiently fetches all your recorded routes from Strava,
            providing a comprehensive overview of your fitness activities.
            Whether it's a morning jog, a challenging bike ride, or a scenic
            hike, all your routes are neatly organized and easily accessible.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Interactive Map Display</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Immerse yourself in a dynamic and interactive map interface that
            brings your Strava routes to life. Each route is represented with
            vibrant colors, allowing you to visually trace your past adventures.
            The map offers a user-friendly experience, making it effortless to
            navigate and explore your fitness history.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Real-time User Location</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stay connected with your current location in real-time. The app
            displays your live location on the map, enabling you to compare it
            with your recorded routes. This feature adds a new dimension to your
            outdoor experiences, helping you instantly recognize familiar paths
            and discover new ones.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Personalized History Insights</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Wondering if you've explored a specific area before? My Routes
            Explorer makes it easy to cross-reference your current location with
            your recorded routes, giving you instant insights into your past
            activities. Now, every step or pedal stroke contributes to a
            personal chronicle of your fitness journey.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Heatmap Visualization</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Uncover the popular and less-explored routes with the built-in
            heatmap feature. The app generates a visually striking heatmap
            overlay that highlights the frequency and intensity of routes in
            different areas. This powerful tool aids in discovering trending
            paths and planning your next adventure
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-medium">Customizable Preferences</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tailor the app to suit your preferences. Choose from various map
            styles, adjust route visibility, and personalize the display to
            create an experience that aligns with your unique preferences
          </p>
        </div>
      </div>
    </section>
  );
}
