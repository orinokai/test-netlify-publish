export default async (req) => {
  return new Response(`Hello world from ${req.url} at ${new Date()}`, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Netlify-CDN-Cache-Control': 'public, max-age=20, stale-while-revalidate=60',
      'Cache-Tag': '_N_T_/home,_N_T_/home/index.html'
  }})
}

export const config = {
  path: "/*",
  preferStatic: true
};
