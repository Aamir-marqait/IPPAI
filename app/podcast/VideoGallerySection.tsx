"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Video {
  _id: string;
  videoFile: string;
  videoThumbnail: string;
  videoTitle: string;
  videoDescription?: string;
  videoDuration?: string;
  videoDatePublished?: string;
  videoCategory?: string;
  featured?: boolean;
}

interface Podcast {
  _id: string;
  audioFile: string;
  podcastCoverArt: string;
  podcastTitle: string;
  podcastDescription?: string;
  podcastDuration?: string;
  episodeNumber?: number;
  host?: string;
  podcastDatePublished?: string;
  podcastCategory?: string;
  featured?: boolean;
}

interface VideoGallerySectionProps {
  videos: Video[];
  podcasts: Podcast[];
  videoCategories: string[];
  podcastCategories: string[];
}

export default function VideoGallerySection({ 
  videos, 
  podcasts,
  videoCategories,
  podcastCategories
}: VideoGallerySectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    title: string;
    type: 'video' | 'audio';
  } | null>(null);
  const [activeTab, setActiveTab] = useState("gallery");
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string>("all");
  const [selectedPodcastCategory, setSelectedPodcastCategory] = useState<string>("all");
  const [videoDisplayCount, setVideoDisplayCount] = useState(6);
  const [podcastDisplayCount, setPodcastDisplayCount] = useState(6);

  // Filter videos by category
  const filteredVideos = useMemo(() => {
    if (selectedVideoCategory === "all") return videos;
    return videos.filter(v => v.videoCategory === selectedVideoCategory);
  }, [videos, selectedVideoCategory]);

  // Filter podcasts by category
  const filteredPodcasts = useMemo(() => {
    if (selectedPodcastCategory === "all") return podcasts;
    return podcasts.filter(p => p.podcastCategory === selectedPodcastCategory);
  }, [podcasts, selectedPodcastCategory]);

  // Paginated videos and podcasts
  const visibleVideos = filteredVideos.slice(0, videoDisplayCount);
  const visiblePodcasts = filteredPodcasts.slice(0, podcastDisplayCount);

  const hasMoreVideos = videoDisplayCount < filteredVideos.length;
  const hasMorePodcasts = podcastDisplayCount < filteredPodcasts.length;

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <section className="w-full flex justify-center bg-white py-8 sm:py-12 px-2">
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        {/* Tabs Container with Slider */}
        <div className="relative bg-gray-200 rounded-full p-1 mb-2 inline-flex">
          {/* Slider Background */}
          <div
            className={`absolute top-1 bottom-1 bg-[#D3363B] rounded-full transition-all duration-300 ease-in-out shadow-[0px_4px_4px_0px_#D3363B1F] ${
              activeTab === "gallery"
                ? "left-1 w-[calc(50%-2px)]"
                : "left-[calc(50%+1px)] w-[calc(50%-2px)]"
            }`}
          />

          {/* Tab Buttons */}
          <button
            onClick={() => setActiveTab("gallery")}
            className={`relative z-10 px-7 py-2.5 font-medium text-base leading-none tracking-normal text-center transition-colors duration-300 ${
              activeTab === "gallery"
                ? "text-white"
                : "text-[#161C2D] cursor-pointer"
            }`}
            style={{
              fontFamily: "Work Sans",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Video Gallery
          </button>
          <button
            onClick={() => setActiveTab("podcasts")}
            className={`relative z-10 px-7 py-2.5 font-medium text-base leading-none tracking-normal text-center transition-colors duration-300 ${
              activeTab === "podcasts"
                ? "text-white"
                : "text-[#161C2D] cursor-pointer"
            }`}
            style={{
              fontFamily: "Work Sans",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Our Podcasts
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "gallery" && (
          <div className="w-full">
            <div
              className="text-center text-[#4D5756] text-base leading-6 tracking-normal max-w-xl mb-7 mx-auto"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              See the faces behind the impact, witness the transformative power
              of our programmes and explore visual stories of hope and
              resilience.
            </div>

            {/* Category Filters */}
            {videoCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
                <Button
                  variant={selectedVideoCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedVideoCategory("all");
                    setVideoDisplayCount(6);
                  }}
                  className={selectedVideoCategory === "all" ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                >
                  All Videos
                </Button>
                {videoCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedVideoCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedVideoCategory(category);
                      setVideoDisplayCount(6);
                    }}
                    className={selectedVideoCategory === category ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}

            {/* Results Info */}
            {filteredVideos.length > 0 && (
              <div className="w-full mb-4 text-sm text-gray-600 text-center">
                Showing {visibleVideos.length} of {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'}
              </div>
            )}

            {/* Video Grid */}
            {visibleVideos.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                {visibleVideos.map((video) => (
                  <Dialog
                    key={video._id}
                    open={modalOpen && activeVideo?.src === video.videoFile && activeVideo?.type === 'video'}
                    onOpenChange={(open) => {
                      setModalOpen(open);
                      if (!open) setActiveVideo(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group"
                        onClick={() => {
                          setActiveVideo({ src: video.videoFile, title: video.videoTitle, type: 'video' });
                          setModalOpen(true);
                        }}
                      >
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-sm border border-[#ececec] bg-gray-100">
                          {video.videoThumbnail ? (
                            <Image
                              src={video.videoThumbnail}
                              alt={video.videoTitle}
                              fill
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <video
                              src={video.videoFile}
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                          )}
                          
                          {/* Featured Badge */}
                          {video.featured && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded z-10">
                              ⭐ Featured
                            </div>
                          )}
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="rounded-full bg-white/85 flex items-center justify-center transition-transform group-hover:scale-110 shadow"
                              style={{ width: 70, height: 70 }}
                            >
                              <div
                                className="flex items-center justify-center"
                                style={{
                                  fontFamily: "Font Awesome 6 Free",
                                  fontWeight: 900,
                                  fontSize: "30px",
                                  background: "linear-gradient(180deg, #E33E5F 0%, #B00A2B 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                ▶
                              </div>
                            </div>
                          </div>
                          {/* Duration Badge */}
                          {video.videoDuration && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                              {video.videoDuration}
                            </div>
                          )}
                        </div>
                        <div 
                          className="mt-3 text-base font-bold leading-none tracking-normal text-[#243C4B]"
                          style={{
                            fontFamily: 'Red Hat Display',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0px'
                          }}
                        >
                          {video.videoTitle}
                        </div>
                        {video.videoDescription && (
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            {video.videoDescription}
                          </p>
                        )}
                        {video.videoDatePublished && (
                          <p className="mt-1 text-xs text-gray-500">
                            {formatDate(video.videoDatePublished)}
                          </p>
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-[90vw] h-[80vh] p-0 bg-black border-none shadow-2xl">
                      <DialogTitle className="sr-only">
                        {video.videoTitle}
                      </DialogTitle>
                      <div className="relative w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
                        <video
                          src={video.videoFile}
                          controls
                          autoPlay
                          className="w-full h-full object-contain"
                          style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                        {/* Close button */}
                        <button
                          onClick={() => {
                            setModalOpen(false);
                            setActiveVideo(null);
                          }}
                          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
                          aria-label="Close video"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        {/* Video info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <h3 className="text-white text-lg font-semibold font-poppins">
                            {video.videoTitle}
                          </h3>
                          {video.videoDescription && (
                            <p className="text-white/80 text-sm mt-1">
                              {video.videoDescription}
                            </p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center py-16">
                <p className="text-gray-500 text-lg font-medium">
                  No video is available at the moment.
                </p>
              </div>
            )}

            {/* Load More Button */}
            {hasMoreVideos && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setVideoDisplayCount(prev => prev + 6)}
                  className="bg-[#D3363B] hover:bg-[#B8303A] text-white px-8 py-3"
                >
                  Load More Videos
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === "podcasts" && (
          <div className="w-full">
            <div
              className="text-center text-[#4D5756] text-base leading-6 tracking-normal max-w-xl mb-7 mx-auto"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Discover insights and conversations that shape India&apos;s energy
              future through our exclusive podcast series.
            </div>

            {/* Category Filters */}
            {podcastCategories.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
                <Button
                  variant={selectedPodcastCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedPodcastCategory("all");
                    setPodcastDisplayCount(6);
                  }}
                  className={selectedPodcastCategory === "all" ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                >
                  All Podcasts
                </Button>
                {podcastCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedPodcastCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedPodcastCategory(category);
                      setPodcastDisplayCount(6);
                    }}
                    className={selectedPodcastCategory === category ? "bg-[#D3363B] hover:bg-[#B8303A] text-white" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}

            {/* Results Info */}
            {filteredPodcasts.length > 0 && (
              <div className="w-full mb-4 text-sm text-gray-600 text-center">
                Showing {visiblePodcasts.length} of {filteredPodcasts.length} {filteredPodcasts.length === 1 ? 'episode' : 'episodes'}
              </div>
            )}

            {/* Podcast Grid */}
            {visiblePodcasts.length > 0 ? (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
                {visiblePodcasts.map((podcast) => (
                  <Dialog
                    key={podcast._id}
                    open={modalOpen && activeVideo?.src === podcast.audioFile && activeVideo?.type === 'audio'}
                    onOpenChange={(open) => {
                      setModalOpen(open);
                      if (!open) setActiveVideo(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <div
                        className="cursor-pointer group"
                        onClick={() => {
                          setActiveVideo({ src: podcast.audioFile, title: podcast.podcastTitle, type: 'audio' });
                          setModalOpen(true);
                        }}
                      >
                        <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm border border-[#ececec]">
                          <Image
                            src={podcast.podcastCoverArt}
                            alt={podcast.podcastTitle}
                            fill
                            className="object-cover w-full h-full"
                          />
                          {/* Featured Badge */}
                          {podcast.featured && (
                            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded z-10">
                              ⭐ Featured
                            </div>
                          )}
                          {/* Episode Badge */}
                          {podcast.episodeNumber && (
                            <div className="absolute top-2 left-2 bg-[#D3363B] text-white text-xs font-bold px-2 py-1 rounded z-10">
                              EP {podcast.episodeNumber}
                            </div>
                          )}
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="rounded-full bg-white/90 p-4">
                              <svg className="w-8 h-8 text-[#D3363B]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                          {/* Duration Badge */}
                          {podcast.podcastDuration && (
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                              {podcast.podcastDuration}
                            </div>
                          )}
                        </div>
                        <div 
                          className="mt-3 text-base font-bold leading-none tracking-normal text-[#243C4B]"
                          style={{
                            fontFamily: 'Red Hat Display',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0px'
                          }}
                        >
                          {podcast.podcastTitle}
                        </div>
                        {podcast.host && (
                          <p className="mt-1 text-sm text-gray-600">
                            🎙️ {podcast.host}
                          </p>
                        )}
                        {podcast.podcastDescription && (
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            {podcast.podcastDescription}
                          </p>
                        )}
                        {podcast.podcastDatePublished && (
                          <p className="mt-1 text-xs text-gray-500">
                            {formatDate(podcast.podcastDatePublished)}
                          </p>
                        )}
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-[90vw] p-6 bg-white border-none shadow-2xl">
                      <DialogTitle className="text-xl font-bold mb-4">
                        {podcast.podcastTitle}
                      </DialogTitle>
                      <div className="flex flex-col items-center">
                        <Image
                          src={podcast.podcastCoverArt}
                          alt={podcast.podcastTitle}
                          width={300}
                          height={300}
                          className="rounded-lg mb-4"
                        />
                        {podcast.host && (
                          <p className="text-gray-600 mb-2">🎙️ {podcast.host}</p>
                        )}
                        {podcast.podcastDescription && (
                          <p className="text-gray-700 text-center mb-4">
                            {podcast.podcastDescription}
                          </p>
                        )}
                        <audio
                          src={podcast.audioFile}
                          controls
                          className="w-full"
                          autoPlay
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center py-16">
                <p className="text-gray-500 text-lg font-medium">
                  No podcast is available at the moment.
                </p>
              </div>
            )}

            {/* Load More Button */}
            {hasMorePodcasts && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setPodcastDisplayCount(prev => prev + 6)}
                  className="bg-[#D3363B] hover:bg-[#B8303A] text-white px-8 py-3"
                >
                  Load More Podcasts
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}