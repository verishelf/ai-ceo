import { env } from "@/lib/env";

export async function getGitHubActivity() {
  if (!env.GITHUB_TOKEN || !env.GITHUB_OWNER || !env.GITHUB_REPO) {
    return {
      repository: "demo/nexusos",
      commits: 209,
      openPullRequests: 12,
      failingChecks: 1,
      deployments: [{ environment: "production", status: "healthy", sha: "demo" }],
      source: "demo",
    };
  }

  const headers = {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  };
  const base = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}`;
  const [commitsResponse, pullsResponse] = await Promise.all([
    fetch(`${base}/commits?per_page=100`, { headers, next: { revalidate: 60 } }),
    fetch(`${base}/pulls?state=open&per_page=100`, { headers, next: { revalidate: 60 } }),
  ]);

  const commits = await commitsResponse.json();
  const pulls = await pullsResponse.json();

  return {
    repository: `${env.GITHUB_OWNER}/${env.GITHUB_REPO}`,
    commits: Array.isArray(commits) ? commits.length : 0,
    openPullRequests: Array.isArray(pulls) ? pulls.length : 0,
    failingChecks: 0,
    deployments: [],
    source: "github",
  };
}
