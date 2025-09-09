"use client";
import { useState, useEffect, useRef } from "react";

type Review = {
  name?: string;
  role?: string;
  rating: number;
  text?: string;
};

export default function RatingForm() {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const fetchRatings = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      console.log("Fetched reviews:", data);

      // Handle API returning either array or { reviews, average }
      const reviewsArray: Review[] = Array.isArray(data)
        ? data
        : data.reviews || [];

      setReviews(reviewsArray);

      const avg =
        reviewsArray.length > 0
          ? reviewsArray.reduce((acc, r) => acc + Number(r.rating), 0) /
            reviewsArray.length
          : 0;

      setAverage(avg);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  const StarRating = ({
    rating,
    setRating,
  }: {
    rating: number;
    setRating?: (rating: number) => void;
  }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating && setRating(star)}
            className={`text-2xl transition-transform duration-200 ${
              star <= rating ? "text-amber-400 scale-110" : "text-gray-400"
            } ${
              setRating ? "hover:scale-125 cursor-pointer" : "cursor-default"
            }`}
          >
            {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      role: formData.get("role"),
      category: formData.get("category"),
      rating: Number(formData.get("rating")),
      text: formData.get("text"),
      avatar:
        (formData.get("name") as string)?.slice(0, 2).toUpperCase() || "CL",
    };

    try {
      // Submit to testimonials API
      await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setSubmitSuccess(true);
      form.reset();
      setStars(0);
      setComment("");

      // Refresh reviews and average
      fetchRatings();

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-light tracking-wider">
              SHARE YOUR EXPERIENCE
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            Share Your{" "}
            <span className="text-amber-400 font-serif italic">Feedback</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Help us improve our services by sharing your experience with S Nil
            Roy & Associates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rating Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-amber-500/20">
            <h2 className="text-2xl font-light text-amber-400 mb-6">
              Submit Your Review
            </h2>

            {submitSuccess && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6">
                Thank you for your feedback! Your review has been submitted
                successfully.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Your Role *
                  </label>
                  <input
                    name="role"
                    required
                    placeholder="e.g., Business Owner, Client"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Service Category *
                </label>
                <select
                  name="category"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="property">Real Estate Law</option>
                  <option value="ip">Intellectual Property</option>
                  <option value="family">Family Law</option>
                  <option value="criminal">Criminal Defense</option>
                </select>
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Your Rating *
                </label>
                <div className="flex items-center space-x-4">
                  <StarRating rating={stars} setRating={setStars} />
                  <input type="hidden" name="rating" value={stars} required />
                  <span className="text-amber-400 font-semibold">
                    {stars}/5
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-blue-200 text-sm font-medium mb-2">
                  Your Testimonial *
                </label>
                <textarea
                  name="text"
                  required
                  rows={4}
                  placeholder="Share your experience with our legal services..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-amber-500/30 disabled:shadow-none"
              >
                {isSubmitting ? "Submitting..." : "Submit Your Review"}
              </button>
            </form>
          </div>

          {/* Reviews Sidebar */}
          <div className="space-y-6">
            {/* Average Rating */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-amber-500/20">
              <h3 className="text-xl font-light text-white mb-4">
                Overall Rating
              </h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  {average.toFixed(1)}
                </div>
                <StarRating rating={Math.round(average)} />
                <p className="text-blue-200 text-sm mt-2">
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-amber-500/20">
              <h3 className="text-xl font-light text-white mb-4">
                Recent Reviews
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {reviews.length === 0 ? (
                  <p className="text-blue-200 text-center">
                    No reviews yet. Be the first to share your experience!
                  </p>
                ) : (
                  reviews
                    .slice(-5) // last 5 reviews
                    .reverse() // most recent first
                    .map((r, i) => (
                      <div
                        key={i}
                        className="border border-amber-500/10 rounded-lg p-4 bg-gray-800/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center mr-3">
                              <span className="text-amber-400 text-sm font-bold">
                                {r.name
                                  ? r.name.slice(0, 2).toUpperCase()
                                  : "CL"}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-white text-sm font-medium">
                                {r.name || "Anonymous"}
                              </h4>
                              <p className="text-blue-300 text-xs">
                                {r.role || "Client"}
                              </p>
                            </div>
                          </div>
                          <StarRating rating={Number(r.rating)} />
                        </div>
                        {r.text && (
                          <p className="text-blue-200 text-sm mt-2 line-clamp-3">
                            {`"${r.text}"`}
                          </p>
                        )}
                      </div>
                    ))
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-amber-500/10 text-center">
                <div className="text-2xl font-bold text-amber-400">
                  {reviews.length}
                </div>
                <div className="text-blue-200 text-sm">Total Reviews</div>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-amber-500/10 text-center">
                <div className="text-2xl font-bold text-amber-400">
                  {average.toFixed(1)}/5
                </div>
                <div className="text-blue-200 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
