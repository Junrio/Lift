// Utility function to get the correct path for static assets on GitHub Pages
export const basePath = '/Lift';

export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

