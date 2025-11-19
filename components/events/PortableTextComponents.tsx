import React from 'react';
import { PortableTextComponents } from '@portabletext/react';

/**
 * Custom Portable Text Components for Event Content
 *
 * Provides styled rendering for rich text content from Sanity CMS
 * with custom styling for headings, lists, and other block elements.
 */
export const eventPortableTextComponents: PortableTextComponents = {
  block: {
    // H1 - Red color, large and bold
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 mt-8 leading-tight">
        {children}
      </h1>
    ),

    // H2 - Bold black color
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-6 leading-tight">
        {children}
      </h2>
    ),

    // H3 - Bold black color, slightly smaller
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-5 leading-tight">
        {children}
      </h3>
    ),

    // H4 - Semi-bold
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-4">
        {children}
      </h4>
    ),

    // H5 - Medium weight
    h5: ({ children }) => (
      <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-3">
        {children}
      </h5>
    ),

    // H6 - Slightly bolder than normal
    h6: ({ children }) => (
      <h6 className="text-base font-semibold text-gray-800 mb-2 mt-3">
        {children}
      </h6>
    ),

    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        {children}
      </p>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-600 bg-red-50 pl-6 pr-4 py-4 my-6 italic text-gray-800">
        {children}
      </blockquote>
    ),
  },

  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),

    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    // Bullet list item
    bullet: ({ children }) => (
      <li className="leading-relaxed pl-2">
        {children}
      </li>
    ),

    // Numbered list item
    number: ({ children }) => (
      <li className="leading-relaxed pl-2">
        {children}
      </li>
    ),
  },

  marks: {
    // Strong/Bold text
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">
        {children}
      </strong>
    ),

    // Emphasis/Italic text
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),

    // Underline
    underline: ({ children }) => (
      <span className="underline">
        {children}
      </span>
    ),

    // Strike-through
    'strike-through': ({ children }) => (
      <span className="line-through">
        {children}
      </span>
    ),

    // Code
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),

    // Links
    link: ({ children, value }) => {
      const rel = value?.href?.startsWith('/') ? undefined : 'noopener noreferrer';
      const target = value?.href?.startsWith('/') ? undefined : '_blank';

      return (
        <a
          href={value?.href}
          rel={rel}
          target={target}
          className="text-red-600 hover:text-red-700 underline font-medium transition-colors"
        >
          {children}
        </a>
      );
    },
  },

  // Handle hard breaks
  hardBreak: () => <br className="my-2" />,
};
