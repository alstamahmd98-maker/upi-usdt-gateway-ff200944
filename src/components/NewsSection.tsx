import { ArrowRight, Calendar, User } from "lucide-react";

const newsItems = [
  {
    category: "Hot Topics in India",
    date: "Jul, Tue, 2025",
    author: "DJI",
    title: "Chinese rare earth export controls impact on Indian manufacturing sector",
    excerpt: "Recent developments in export regulations affecting production capabilities in the technology sector...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
  },
  {
    category: "Hot Topics in India",
    date: "Jul, Tue, 2025",
    author: "DJI",
    title: "Cross-border payment trends in the Indian fintech ecosystem",
    excerpt: "Analysis of emerging payment solutions and their impact on international trade...",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80"
  },
  {
    category: "Hot Topics in India",
    date: "Jul, Mon, 2025",
    author: "DJI",
    title: "Digital payment adoption accelerates across tier-2 cities",
    excerpt: "New data shows significant growth in UPI transactions outside metropolitan areas...",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Blog & News
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            News & Updates
          </h2>
          <p className="text-muted-foreground">
            India Payment Trends & Latest Compliance Updates.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>

                <a 
                  href="#"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
