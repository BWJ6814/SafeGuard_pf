/** `public/images/발표자료이미지/` */
function publicImage(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}${path}`
}

export const ANALYSIS_IMAGES = {
  requirements1: publicImage('/images/발표자료이미지/요구사항정의서1.png'),
  requirements2: publicImage('/images/발표자료이미지/요구사항정의서2.png'),
  requirements3: publicImage('/images/발표자료이미지/요구사항정의서3.png'),
} as const
