import { useState, useEffect } from 'react';

const LEETCODE_USERNAME = 'mokshxp'; // ← change to your real username

export function useLeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const query = `
          query userProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
                reputation
                starRating
              }
              userCalendar {
                streak
                totalActiveDays
              }
            }
          }
        `;

        const res = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Referer: 'https://leetcode.com',
          },
          body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
        });

        if (!res.ok) throw new Error('LeetCode API error');

        const data = await res.json();
        const user = data?.data?.matchedUser;

        if (!user) throw new Error('User not found');

        const nums = user.submitStats.acSubmissionNum;
        const total = nums.find((n) => n.difficulty === 'All')?.count ?? 0;
        const easy = nums.find((n) => n.difficulty === 'Easy')?.count ?? 0;
        const medium = nums.find((n) => n.difficulty === 'Medium')?.count ?? 0;
        const hard = nums.find((n) => n.difficulty === 'Hard')?.count ?? 0;

        setStats({
          total,
          easy,
          medium,
          hard,
          ranking: user.profile?.ranking ?? 0,
          streak: user.userCalendar?.streak ?? 0,
          totalActiveDays: user.userCalendar?.totalActiveDays ?? 0,
        });
      } catch (err) {
        console.warn('LeetCode API failed, using fallback data');
        setStats({
          total: 120,
          easy: 65,
          medium: 45,
          hard: 10,
          ranking: 185000,
          streak: 14,
          totalActiveDays: 60,
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
