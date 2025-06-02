import React, { useState } from 'react';

const icons = [
  {
    img: (
      <img
        src="assets/logosm.png"
        alt="Logo"
        style={{
          width: '8vh',
          height: '8vh',
          objectFit: 'contain',
          borderRadius: '30%',
        }}
      />
    ),
    link: '#home',
  },
  // Text-only navigation items (no icons)
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'About Us',
    link: '#about',
  },
  {
    name: 'Mission',
    link: '#mission',
  },
  {
    name: 'Services',
    link: '#service',
  },
];

function IconButton({ icon, onClick, style, name, textOnly, ...props }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        style={style}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label={name}
        {...props}
      >
        {textOnly ? (
          <span
            style={{
              fontWeight: 500,
              fontSize: 16,
              color: 'white',
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              letterSpacing: 0.2,
              cursor: 'pointer',
            }}
          >
            {name}
          </span>
        ) : (
          icon
        )}
      </button>
      {/* Tooltip no longer needed for text-only, but keeps for hover effect */}
      {hover && !textOnly && name && (
        <span
          style={{
            position: 'absolute',
            left: '110%',
            top: '50%',
            transform: 'translateY(-50%)',
            whiteSpace: 'nowrap',
            background: 'rgba(30,30,30,0.9)',
            color: '#fff',
            padding: '3px 10px',
            borderRadius: 6,
            fontSize: 13,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            zIndex: 110,
            pointerEvents: 'none',
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleLink = (link) => {
    if (link) {
      window.location.hash = link;
    }
  };

  const navIcons = icons.slice(1); // Exclude logo
  const midPoint = Math.ceil(navIcons.length / 2);
  const topIcons = navIcons.slice(0, midPoint).reverse();
  const bottomIcons = navIcons.slice(midPoint);

  return (
    <div
      style={{
        position: 'fixed',
        left: 20,
        background:'rgba(0, 0, 0, 0.09)',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '2em',
        boxShadow: '0 2px 16px rgba(255, 255, 255, 0.2)',
        padding: expanded ? '16px 12px' : '6px 6px',
        width: expanded ? 120 : 56, // Wider for text
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.7s cubic-bezier(.42,0,.58,1)',
        zIndex: 100,
      }}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Top text links */}
      {expanded &&
        topIcons.map((icon, i) => (
          <IconButton
            key={`top-${icon.name}-${i}`}
            icon={icon.img}
            name={icon.name}
            textOnly
            style={{
              background: 'none',
              border: 'none',
              borderRadius: 8,
              width: 'fit-content',
              height: 40,
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '0 10px',
              transition: 'background 0.2s',
            }}
            onClick={() => handleLink(icon.link)}
          />
        ))}

      {/* Logo (always visible, centered) */}
      <IconButton
        icon={icons[0].img}
        name={icons[0].name}
        style={{
          background: 'rgba(255, 255, 255, 0)',
          border: 0,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        aria-label="Expand navbar"
        onMouseEnter={() => setExpanded(true)}
      />

      {/* Divider */}
      <div
        style={{
          width: 32,
          height: 1,
          margin: expanded ? '6px 0' : '0',
          background: expanded ? 'rgba(255,255,255,0.15)' : 'none',
          display: expanded ? 'block' : 'none',
          borderRadius: 2,
          opacity: 0.8,
        }}
      ></div>

      {/* Bottom text links */}
      {expanded &&
        bottomIcons.map((icon, i) => (
          <IconButton
            key={`bottom-${icon.name}-${i}`}
            icon={icon.img}
            name={icon.name}
            textOnly
            style={{
              background: 'none',
              border: 'none',
              borderRadius: 8,
              width: 'fit-content',
              height: 40,
              marginTop: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '0 10px',
              transition: 'background 0.2s',
            }}
            onClick={() => handleLink(icon.link)}
          />
        ))}
    </div>
  );
}