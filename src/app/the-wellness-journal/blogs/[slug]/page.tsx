import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return { title: "Post Not Found | SriYogalaya" };
  }

  const description = post.content[0]?.substring(0, 150) + "...";

  return {
    title: `${post.title} | The Wellness Journal`,
    description,
    alternates: { canonical: `https://sriyogalaya.com/the-wellness-journal/blogs/${slug}` },
    openGraph: {
      title: post.title,
      description,
      url: `https://sriyogalaya.com/the-wellness-journal/blogs/${slug}`,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
      authors: ["https://sriyogalaya.com/about"],
    },
  };
}

const BLOG_POSTS: Record<
  string,
  {
    title: string;
    category: string;
    author: string;
    authorImage: string;
    date: string;
    image: string;
    content: string[];
  }
> = {
  "finding-stillness-in-the-morning-light": {
    title: "Finding Stillness in the Morning Light",
    category: "Yoga Tips",
    author: "Sri Devi",
    authorImage: "/images/IMG_0509.jpeg",
    date: "OCT 10, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcS6GoQUKA_lpoCy7exYo-2UrHxC2gSItiu45S-8P9kR9yLqhRZ_Z2PCGGuJxs5JRa_CwlDXqMaT34KdA35ZxYhqQyrsnvxq-iqWzSz2EAkNGJx5zYcuja0yvNtHhvZQgjY52ZukQoLToZNgGPNqIdVvjj3sycjpAepDP1aJWihiYMJh3s2WerPn9_KJmtbNg5OQjz7_YMhtAD_0HX6CKI1DlTKXqfKH3H6J2xCeruzmXzJzCdicMNVQb-8oGt4PGWznjlHBKQRw",
    content: [
      "Rising with the sun is a timeless practice, but it's more than just a disciplined routine. The early morning hours offer a unique neurological window where the brain transitions from sleep state to alertness. In this quiet interval, a dedicated 15-minute yoga practice can anchor your nervous system, laying a calm foundation that influences your stress response for the rest of the day.",
      "Scientific research reveals that cortical awakening responses are significantly regulated by morning mindfulness exercises. When we start the day with conscious breathing and gentle movement, we dampen the amygdala's reactive firing and boost prefrontal cortex activity. This shift from 'fight or flight' to 'rest and digest' allows us to navigate daily triggers with grace and composure.",
      "To build your own morning ritual, begin with five minutes of quiet sitting. Transition into gentle stretches like Cat-Cow and downward-facing dog to awaken the spine. Conclude with three minutes of deep abdominal breathing. This simple flow is a commitment to yourself, creating a sanctuary of calm that stays with you long after you leave the mat."
    ]
  },
  "the-art-of-mindful-consumption": {
    title: "The Art of Mindful Consumption: Living with Less",
    category: "Wellness Advice",
    author: "Sri Devi",
    authorImage: "/images/IMG_0509.jpeg",
    date: "OCT 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDNaSSb83djPnVrFjJ5qce92DD1swb4vmcvKKdIreqlywh_64iLM7LnMJsas_n81UHQAtpx2dSYoB5CMEm3UBSqx3qwvjQbo43peSwKZCryHpJihj7A9ebEyD9gbI3Y6opVsaf6D-3rs0aJd6eWPre_3f-rJ6KSTCjrs88uq_rvp2r3mVdpqQsIO7yukAjrZA7AgfWP57skR1vUxnQpUe6bbJoCt9vaqOzzpNEE2GXxc-iILi430DhakHHhIYPnnnrWkT7caDPfw",
    content: [
      "In a world filled with endless notifications, curated updates, and consumerism, our minds are constantly overloaded. Mindful consumption is the practice of intentionally choosing what we allow into our physical, digital, and mental spaces. By simplifying our surroundings, we make room for internal peace and deeper contemplation.",
      "The objects and digital feeds we interact with carry subtle energetic weight. When we declutter our desks, delete unnecessary apps, and limit social media intake, we notice a direct relief in mental fatigue. This simplicity is not about deprivation; it's about curating a environment that supports self-inquiry and genuine presence.",
      "Start by auditing your digital habits. Set clear boundaries for screen time and create offline zones in your home. Slowly extend this practice to your physical space, keeping only items that serve a clear purpose or bring genuine joy. You'll find that as your outer environment simplifies, your inner landscape clears, inviting a natural state of gratitude."
    ]
  },
  "pranayama-for-deep-sleep": {
    title: "Pranayama for Deep Sleep",
    category: "Breathing",
    author: "Sri Devi",
    authorImage: "/images/IMG_0509.jpeg",
    date: "OCT 15, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT0z0DMQgBGPJExJQCRewfe6AKunczY2FUv3HJxDKcdSgI6BAZFxtpXvAV2qe3inXlr9cVNtqybEZVfBDuJCFmo9NOJ85VZf1N9vRDFsfvqQ2z45UoV8VTkHfXq9hqD98uf0m2uq1ZuqzQPICzli8Rf-g7oNay10cZcyA0qeqNshc5o9ZB8AdWfZq4kTVD6Izi29MbFYsj-4XKrdgAK7PT3sa9b1_SC6h7IQw2q8vx5Wl_fZ1HBnPBILNKJsm0-oJqOGuabFssvw",
    content: [
      "Quality sleep is the cornerstone of mental and physical wellness, yet millions struggle to turn off their minds at night. Pranayama, or yogic breath control, is a highly effective way to signal to your body that it is safe to rest. By altering the rhythm of your breath, you directly modulate the autonomic nervous system.",
      "The 'three-part breath' (Dirga Pranayama) and the '4-7-8 technique' are specifically designed to ease transitions into deep sleep. Extending the exhalation relative to the inhalation stimulates the vagus nerve. This triggers the parasympathetic system, lowering your heart rate, reducing blood pressure, and quieting racing thoughts.",
      "To practice, lie down comfortably in bed. Inhale deeply through your nose, filling your belly, then your ribs, and finally your chest. Exhale slowly in reverse order, letting go of all tension. Repeat this cycle for 5 to 10 minutes before sleeping. You will feel a gentle wave of relaxation wash over you, preparing your body for restorative sleep."
    ]
  },
  "the-silence-between-thoughts": {
    title: "The Silence Between Thoughts",
    category: "Meditation",
    author: "Sri Devi",
    authorImage: "/images/IMG_0509.jpeg",
    date: "OCT 18, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjqgCXUeh3oMz3lo8TATYXUSAJBV36cm6hKdqJuBdAwiX3GGV8fdC4c-wJfTdr_uVn6W8hwf9f7cOvF_uugI8S5WsjQbSrflYfSsPzva2C1ZLr5Jdv_ebqmISXTfrmVr-p05ZR1SP7l2jzzzg1m3KBQeUCJaBLBpMBXDUxqsnDKM-hNJsPn2sI8MKZXQzmYvcnWsirRp0Wv0uTWs5747R_-Q9JWFM5-dd-nEraYfuM1ICOHT1cEbV-GPQlzt_Fq51tBorFWgCBA",
    content: [
      "We often view meditation as the act of stopping our thoughts, which can lead to frustration. True meditation is about observing the mind without judgment and finding the quiet spaces that naturally occur between thoughts. This space—known as the gap—is where your true presence and inner stillness reside.",
      "Imagine the mind as a busy highway. Instead of trying to stop the cars (your thoughts), meditation invites you to sit by the side of the road and watch them pass. As you detach from the narrative of each thought, the space between them begins to widen. In that silent gap, you connect with a deep sense of peace that is unaffected by external circumstances.",
      "You can cultivate this awareness by focusing your attention on the brief pause at the end of each exhalation and before the next inhalation. Gently rest your attention in that still moment. Over time, you'll find that these moments of silence expand, offering a reliable oasis of calm in the midst of a busy life."
    ]
  },
  "establishing-a-ritual-space": {
    title: "Establishing a Ritual Space",
    category: "Wellness Advice",
    author: "Sri Devi",
    authorImage: "/images/IMG_0509.jpeg",
    date: "OCT 20, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCegPxVyKn_oWai-vOBWMtVRzBPlCKvONl_AMDM4pAlrVGqXlyzhVs5Cl80J0JVLh6lHZhzHHAyetYaZ4y-u7OmQRoVYgJZbEgFpPgigwYdXR_EubMVCOCW75VONL0aEROzCZQBbxd23elinQg2hjdBgJ7J5aftBEZ699c3PUU3zXEGmSiN68NuYeoxi9TJHKWvwTez2x9A_wT-ADVEtGaEu6iJZ23X94yxVfRGIX1-2l361U9NoGDEgRvXXvx8nAo8fZNfn0X64w",
    content: [
      "Our physical environment deeply impacts our mental state. Creating a dedicated sanctuary in your home—no matter how small—serves as a powerful visual cue that signals to your mind it is time to slow down, reflect, and practice. This space becomes a physical anchor for your wellness journey.",
      "Your ritual space doesn't need to be elaborate. A quiet corner, a clean yoga mat, a comfortable cushion, and perhaps a candle or a small piece of incense are more than enough. The key is consistency and intention. Keep this space clean, uncluttered, and reserved solely for your practice, reading, or contemplation.",
      "Every time you step into this space, take a deep breath and consciously leave your daily worries behind. Over time, the space will build a supportive, calm energy of its own, making it easier for you to drop into a meditative state and find peace whenever you visit."
    ]
  }
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-24 md:pt-32 pb-section-gap bg-surface">
      <article className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Back navigation */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/the-wellness-journal"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Journal
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-caps text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4 md:mb-6">
            {post.category}
          </span>
          <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-on-surface tracking-tight leading-[1.1] mb-6 md:mb-8">
            {post.title}
          </h1>

          {/* Author Details */}
          <div className="flex items-center gap-4 border-y border-on-surface/5 py-4 md:py-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-on-surface font-label-caps text-sm font-bold">
                {post.author}
              </p>
              <p className="text-outline text-xs uppercase tracking-widest font-light mt-0.5">
                Instructor & Guide
              </p>
            </div>
            <div className="ml-auto text-outline font-label-caps text-xs tracking-widest uppercase">
              {post.date}
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <div className="relative aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border border-on-surface/5 mb-10 md:mb-16">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none mb-16 md:mb-24">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="font-body-md text-base md:text-lg text-on-surface-variant/90 leading-relaxed font-light mb-6 md:mb-8"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Author Card / Call to Action */}
        <div className="bg-surface-container-low rounded-2xl md:rounded-[2rem] p-8 md:p-12 border border-on-surface/5 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display-lg text-xl md:text-2xl font-semibold text-on-surface mb-2">
              Written by {post.author}
            </h3>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant/80 font-light leading-relaxed mb-6">
              Sri Devi is the founder of SriYogalaya, dedicated to sharing authentic yoga practices, mindfulness, and breathing techniques to help you lead a balanced and peaceful life.
            </p>
            <Link
              href="/connect-with-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-full font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 group"
            >
              Connect with Sri Devi
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
