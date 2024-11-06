import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg">
            <p>
              I'm a passionate Flutter Developer with expertise in creating beautiful and performant mobile applications.
              My journey in mobile development has equipped me with strong skills in Dart, Flutter, and various mobile development concepts.
            </p>
            <p>
              I specialize in:
            </p>
            <ul>
              <li>Cross-platform mobile development with Flutter</li>
              <li>State management solutions</li>
              <li>UI/UX design implementation</li>
              <li>API integration and backend services</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}