/** `public/images/video/` — 한글 파일명은 URL 세그먼트 인코딩 필요 */
function publicVideo(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const segments = path.split('/').filter(Boolean)
  const encoded = `/${segments.map((s) => encodeURIComponent(s)).join('/')}`
  return `${base}${encoded}`
}

export const IMPLEMENTATION_VIDEOS = {
  login: publicVideo('/images/video/로그인.mp4'),
  realtime: publicVideo('/images/video/실시간.mp4'),
  analysis1: publicVideo('/images/video/영상분석1.mp4'),
  analysis2: publicVideo('/images/video/영상분석2.mp4'),
  fileAnalysis: publicVideo('/images/video/파일분석.mp4'),
} as const
