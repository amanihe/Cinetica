// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f8f8f8', padding: '20px' }}>
      <h2>📽️ Cinetica</h2>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link href="/discover">Discover</Link></li>
          <li>
            <h3>Movies</h3>
            <ul>
              <li><Link href="/movies/now-playing">Now Playing</Link></li>
              <li><Link href="/movies/popular">Popular</Link></li>
              <li><Link href="/movies/top-rated">Top Rated</Link></li>
            </ul>
          </li>
          <li>
            <h3>TV Shows</h3>
            <ul>
              <li><Link href="/tv/on-the-air">On The Air</Link></li>
              <li><Link href="/tv/popular">Popular</Link></li>
              <li><Link href="/tv/top-rated">Top Rated</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
