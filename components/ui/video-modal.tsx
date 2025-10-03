"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type VideoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc: string;
  title: string;
};

export function VideoModal({ open, onOpenChange, videoSrc, title }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[90vw] h-[80vh] p-0 bg-black border-none shadow-2xl">
        <DialogTitle className="sr-only">
          {title}
        </DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 z-10"
            aria-label="Close video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-lg font-semibold font-poppins">
              {title}
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}