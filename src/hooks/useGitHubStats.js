import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'mokshxp'; // ← change to your real username

export function useGitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const user = await userRes.json();
        const repos = await reposRes.json();

        // Count total stars
        const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
        // Get languages
        const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))];

        setStats({
          followers: user.followers,
          publicRepos: user.public_repos,
          totalStars,
          topLanguages: langs.slice(0, 4),
          avatar: user.avatar_url,
          name: user.name || GITHUB_USERNAME,
          bio: user.bio,
          location: user.location,
        });
      } catch (err) {
        console.warn('GitHub API failed, using fallback data');
        setStats({
          followers: 12,
          publicRepos: 8,
          totalStars: 5,
          topLanguages: ['JavaScript', 'Python', 'Dart', 'C++'],
          avatar: null,
          name: 'Moksh Gupta',
          bio: 'Full-stack developer & AI enthusiast',
          location: 'India',
        });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}
