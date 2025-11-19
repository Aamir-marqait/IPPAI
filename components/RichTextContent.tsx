import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

interface RichTextContentProps {
  content: any[];
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-600 bg-red-50 p-6 my-6 italic text-gray-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-700 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    'strike-through': ({ children }) => (
      <span className="line-through text-gray-500">{children}</span>
    ),
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined;
      const rel = value?.blank ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-red-600 hover:text-red-700 underline font-medium transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      return (
        <div className="my-8 rounded-lg overflow-hidden border-2 border-gray-200">
          <Image
            src={value.asset.url}
            alt={value.alt || 'Content image'}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600 text-center border-t border-gray-200">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
};

export default function RichTextContent({ content }: RichTextContentProps) {
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="rich-text-content prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
}
