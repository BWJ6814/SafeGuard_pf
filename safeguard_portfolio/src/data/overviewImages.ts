/** `public/images/발표자료이미지/` — 파일명·확장자 일치 필요 */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const OVERVIEW_IMAGES = {
  projectBackground: publicImage('/images/발표자료이미지/프로젝트배경.png'),
  architecture: publicImage('/images/발표자료이미지/시스템구성도.png'),
  schedule: publicImage('/images/발표자료이미지/일정관리표.png'),
} as const
