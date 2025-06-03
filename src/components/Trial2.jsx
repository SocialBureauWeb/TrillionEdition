import React, { useState } from 'react'

export const Trial2 = () => {
  // Sample blog data array
  const blogs = [
    { 
      id: 1, 
      title: 'Understanding React Hooks', 
      author: 'Jane Doe', 
      description: 'A concise guide to effectively using React Hooks in your projects. Learn best practices and avoid common pitfalls.', 
      published: '2025-01-15',
      content: `React Hooks are special functions that let you “hook into” React state and lifecycle features from function components. This article covers useState, useEffect, and custom hooks with practical examples and tips.`
    },
    { 
      id: 2, 
      title: 'Styling in Modern CSS', 
      author: 'John Smith', 
      description: 'Explore the latest CSS features like grid, flexbox, and custom properties to create beautiful layouts.', 
      published: '2025-02-10',
      content: `Modern CSS offers powerful tools like CSS Grid and Flexbox for responsive design. This blog explains how to leverage these features and use CSS custom properties for reusable styles.`
    },
    { 
      id: 3, 
      title: 'JavaScript Performance Tips', 
      author: 'Alice Lee', 
      description: 'Improve your JavaScript app performance with these essential optimization strategies.', 
      published: '2025-03-02',
      content: `Optimizing JavaScript involves code splitting, lazy loading, and minimizing reflows. Learn practical strategies for faster, more efficient web applications.`
    },
    { 
      id: 4, 
      title: 'Accessible Web Design', 
      author: 'Tom Brown', 
      description: 'A step-by-step guide to building websites everyone can use, including those with disabilities.', 
      published: '2025-04-18',
      content: `Accessibility is about making web content usable by everyone. This post covers semantic HTML, ARIA roles, keyboard navigation, and testing tools for accessibility.`
    },
    { 
      id: 5, 
      title: 'TypeScript for Beginners', 
      author: 'Emily White', 
      description: 'Start your TypeScript journey with this beginner-friendly overview and setup guide.', 
      published: '2025-05-01',
      content: `TypeScript brings static typing to JavaScript. Learn how to set up a TypeScript project, type variables, and use interfaces for safer, more manageable code.`
    },
    { 
      id: 6, 
      title: 'Deploying with Vercel', 
      author: 'David Kim', 
      description: 'Deploy your React or Next.js apps with ease using Vercel’s platform. Step-by-step walkthrough included.', 
      published: '2025-05-19',
      content: `Vercel streamlines deployment for modern web apps. This guide covers setting up a project, connecting GitHub, and best practices for production deployments.`
    },
    { 
      id: 7, 
      title: 'State Management Patterns', 
      author: 'Sofia Martinez', 
      description: 'Compare Redux, Context API, and Zustand for managing state in large React applications.', 
      published: '2025-05-21',
      content: `Choosing the right state management tool is key to scaling React apps. This blog compares Redux, Context API, and Zustand with pros, cons, and code samples.`
    },
    { 
      id: 8, 
      title: 'Building REST APIs with Express', 
      author: 'Liam Green', 
      description: 'Learn how to quickly build and structure RESTful APIs using Node.js and Express.', 
      published: '2025-05-28',
      content: `Express makes it easy to create RESTful APIs. Discover how to organize routes, handle requests, and connect to databases for robust backend solutions.`
    },
  ];

  const [selected, setSelected] = useState(blogs[0]);

  return (
    <div 
      style={{
        width: '100%', 
        minHeight: '100vh',
        color: 'black', 
        background: "rgb(0, 0, 0)",
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative'
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px',color:'rgb(255, 255, 255)' }}>Blog</h1>
      <div
        style={{
          display: 'flex',
          maxWidth: 1200,
          margin: '0 auto',
          height: 500,
          background: '#8B0000',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        }}
      >
        {/* Vertical Scrollable List */}
        <div
          style={{
            width: 320,
            background: 'rgba(255,255,255,0.92)',
            borderRight: '1px solid #8B0000',
            overflowY: 'auto',
            height: '100%',
            padding: '18px 0',
            scrollbarWidth: 'thin'
          }}
          className="vertical-scroll-hide"
        >
          {blogs.map(blog => (
            <div
              key={blog.id}
              style={{
                padding: '14px 24px 13px 30px',
                borderBottom: selected && selected.id === blog.id ? '4px solid #8B0000' : '4px solid transparent',
                marginBottom: 10,
                background:'transparent',
                
                cursor: 'pointer',
                transition: 'background 0.2s, border 0.2s',
                boxShadow: selected && selected.id === blog.id ? '0 2px 10px rgba(96, 198, 0, 0.13)' : undefined
              }}
              onClick={() => setSelected(blog)}
            >
              <h3 style={{ margin: '0 0 6px', color: '#333', fontWeight: 600 }}>{blog.title}</h3>
              <div style={{ marginBottom: '4px', color: '#888', fontSize: 13 }}>
                By {blog.author} | {blog.published}
              </div>
              <div style={{ marginBottom: '6px', color: '#666', fontSize: 15 }}>
                {blog.description.slice(0, 46)}{blog.description.length > 46 ? '...' : ''}
              </div>
              <button
                style={{
                  padding: '5px 14px',
                  background: '#8B0000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 3,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                  transition: 'background 0.18s',
                }}
                onClick={e => {
                  e.stopPropagation();
                  setSelected(blog);
                }}
              >
                View More
              </button>
            </div>
          ))}
        </div>
        {/* Details View */}
        <div
          style={{
            flex: 1,
            background: " #8B0000 ",
            padding: '35px 38px',
            overflowY: 'auto',
            height: '100%',
            position: 'relative'
          }}
        >
          {selected ? (
            <div style={{ animation: 'fade-in-details 0.18s',}}>
              <button
                style={{
                  position: 'absolute',
                  right: 24,
                  top: 18,
                  background: 'none',
                  border: 'none',
                  fontSize: 26,
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 400,
                }}
                onClick={() => setSelected(null)}
                title="Close"
              >
                &times;
              </button>
              <h2 style={{ margin: '0 0 14px', color: 'white' }}>{selected.title}</h2>
              <div style={{ fontSize: 15, color: 'white', marginBottom: 8 }}>
                <strong>By:</strong> {selected.author}
                {' '}|{' '}
                <strong>Published:</strong> {selected.published}
              </div>
              <div style={{ fontSize: 16, color: 'white', margin: '10px 0 16px' }}>
                <strong>Description:</strong> {selected.description}
              </div>
              <div style={{ fontSize: 16, color: 'white', lineHeight: 1.6 }}>
                <strong>Content:</strong> <br />
                {selected.content}
              </div>
            </div>
          ) : (
            <div style={{ color: '#888', fontSize: 22, marginTop: 120, textAlign: 'center', opacity: 0.7 }}>
              Select a blog to see details
            </div>
          )}
        </div>
      </div>
      {/* Hide native scrollbar for the list */}
      <style>{`
        .vertical-scroll-hide {
          scrollbar-width: thin;
          scrollbar-color: #8B0000 #f8ffe2;
        }
        .vertical-scroll-hide::-webkit-scrollbar {
          width: 7px;
          background:rgb(255, 255, 255);
        }
        .vertical-scroll-hide::-webkit-scrollbar-thumb {
          background: #8B0000;
          border-radius: 8px;
        }
        @keyframes fade-in-details {
          from { opacity: 0; transform: translateX(24px);}
          to { opacity: 1; transform: none;}
        }
      `}</style>
    </div>
  )
}