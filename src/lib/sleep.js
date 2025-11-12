// lib/sleep.ts

/**
 * Sleep utility function - creates an artificial delay
 * Useful for testing loading states and skeleton loaders
 *
 * @param ms - milliseconds to sleep (1000ms = 1 second)
 * @returns Promise that resolves after the specified time
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Sleep with random duration between min and max
 * Simulates more realistic loading times
 *
 * @param min - minimum milliseconds
 * @param max - maximum milliseconds
 */
export function sleepRandom(min, max) {
  const ms = Math.floor(Math.random() * (max - min + 1)) + min;
  return sleep(ms);
}

/**
 * Only sleep in development mode
 * Automatically disabled in production
 *
 * @param ms - milliseconds to sleep
 */
export function sleepDev(ms) {
  if (process.env.NODE_ENV === "development") {
    return sleep(ms);
  }
  return Promise.resolve();
}

// ============================================
// USAGE EXAMPLES
// ============================================

// Example 1: Basic usage in Server Component (App Router)
// app/profile/page.tsx
/*
  import { sleep } from '@/lib/sleep';
  
  async function getProfileData() {
    await sleep(2000); // 2 second delay
    
    const res = await fetch('http://localhost:3000/api/profile');
    return res.json();
  }
  
  export default async function ProfilePage() {
    const data = await getProfileData();
    
    return <div>{data.name}</div>;
  }
  */

// Example 2: With API Route
// app/api/profile/route.ts
/*
  import { sleep } from '@/lib/sleep';
  
  export async function GET() {
    await sleep(1500); // 1.5 second delay
    
    return Response.json({
      name: 'Saeed',
      role: 'Web front-end developer'
    });
  }
  */

// Example 3: Random delay for realistic loading
// app/posts/page.tsx
/*
  import { sleepRandom } from '@/lib/sleep';
  
  async function getPosts() {
    await sleepRandom(1000, 3000); // Random delay between 1-3 seconds
    
    const res = await fetch('http://localhost:3000/api/posts');
    return res.json();
  }
  */

// Example 4: Only delay in development
// lib/api.ts
/*
  import { sleepDev } from '@/lib/sleep';
  
  export async function fetchData(url: string) {
    await sleepDev(2000); // Only delays in dev mode
    
    const res = await fetch(url);
    return res.json();
  }
  */

// Example 5: With Suspense boundary
// app/dashboard/page.tsx
/*
  import { Suspense } from 'react';
  import { sleep } from '@/lib/sleep';
  import ProfileSkeleton from '@/components/ProfileSkeleton';
  
  async function ProfileData() {
    await sleep(2000);
    const data = await fetch('http://localhost:3000/api/profile').then(r => r.json());
    
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
      </div>
    );
  }
  
  export default function DashboardPage() {
    return (
      <Suspense fallback={<ProfileSkeleton />}>
        <ProfileData />
      </Suspense>
    );
  }
  */

// Example 6: Multiple parallel requests with sleep
/*
  async function getData() {
    const [profile, posts, comments] = await Promise.all([
      fetch('http://localhost:3000/api/profile').then(r => r.json()),
      fetch('http://localhost:3000/api/posts').then(r => r.json()),
      fetch('http://localhost:3000/api/comments').then(r => r.json()),
    ]);
    
    await sleep(1000); // Add delay after all requests complete
    
    return { profile, posts, comments };
  }
  */

// Example 7: Client-side usage (Client Component)
/*
  'use client';
  
  import { sleep } from '@/lib/sleep';
  import { useState, useEffect } from 'react';
  
  export default function ClientComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      async function loadData() {
        setLoading(true);
        await sleep(2000); // Show loader for 2 seconds
        const res = await fetch('/api/data');
        const json = await res.json();
        setData(json);
        setLoading(false);
      }
      
      loadData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    return <div>{data}</div>;
  }
  */

// Example 8: With error handling
/*
  async function fetchWithDelay(url: string, delay = 2000) {
    try {
      await sleep(delay);
      const res = await fetch(url);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      return res.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  */
