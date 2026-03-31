import type { ReactNode } from 'react'
import { RequirementsArticle } from '../content/analysisArticles'
import { DbErdArticle } from '../content/designArticles'
import { MainScreensArticle } from './doc/MainScreensArticle'
import { RiskManagementArticle } from '../content/managementArticles'
import {
  ArchitectureArticle,
  ProjectBackgroundArticle,
  ProjectGoalsArticle,
  ScheduleArticle,
} from '../content/overviewArticles'
import { LandingIntro } from './LandingIntro'
import { NAV_CATEGORIES } from '../data/navigation'

function PlaceholderFigure({ caption }: { caption: string }) {
  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-dashed border-slate-300 bg-slate-50/80">
      <div className="flex aspect-video items-center justify-center px-6 text-center">
        <span className="text-sm text-slate-500">{caption}</span>
      </div>
      <figcaption className="border-t border-slate-200 bg-white px-4 py-2 text-center text-xs text-slate-500">
        발표 자료·다이어그램 이미지 삽입 영역
      </figcaption>
    </figure>
  )
}

const SECTION_BODIES: Record<string, ReactNode> = {
  'project-background': <ProjectBackgroundArticle />,
  'project-goals': <ProjectGoalsArticle />,
  architecture: <ArchitectureArticle />,
  schedule: <ScheduleArticle />,
  requirements: <RequirementsArticle />,
  'db-erd': <DbErdArticle />,
  'main-screens': <MainScreensArticle />,
  'risk-management': <RiskManagementArticle />,
}

export function DocMain() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:max-w-6xl lg:px-8 xl:max-w-7xl">
      <LandingIntro />

      <div
        className="mt-8 border-t border-slate-200 pt-16"
        id="document-sections"
      >
        <div className="space-y-20">
          {NAV_CATEGORIES.map((cat, catIdx) => (
            <div key={cat.id}>
              {catIdx > 0 ? (
                <div
                  className="mb-16 border-t border-slate-200 pt-16"
                  aria-hidden
                />
              ) : null}
              <div className="space-y-16">
                {cat.children.map((child) => {
                  const customBody = SECTION_BODIES[child.id]
                  return (
                    <article
                      key={child.id}
                      id={child.id}
                      className="scroll-mt-24 border-b border-slate-100 pb-16 last:border-0 last:pb-0"
                    >
                      <header className="mb-6">
                        <h2 className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 text-3xl font-bold tracking-tight sm:text-4xl">
                          <span className="text-slate-900">{cat.label}</span>
                          <span
                            className="shrink-0 font-light text-slate-300"
                            aria-hidden
                          >
                            |
                          </span>
                          <span className="text-lg font-semibold tracking-tight text-slate-800 sm:text-xl">
                            {child.label}
                          </span>
                        </h2>
                      </header>
                      {customBody ? (
                        customBody
                      ) : (
                        <>
                          <div className="max-w-none text-slate-600">
                            <p className="mb-3 leading-relaxed">
                              이 섹션은 발표·문서 작성을 위한{' '}
                              <strong className="font-medium text-slate-800">
                                플레이스홀더
                              </strong>
                              입니다. 실제 프로젝트 산출물(다이어그램, 캡처, 표)으로
                              교체해 주세요.
                            </p>
                            <p className="leading-relaxed">
                              SafeGuard는 현장 안전장구 착용 모니터링과 로컬 LLM
                              기반 분석을 목표로 합니다.
                            </p>
                          </div>
                          <PlaceholderFigure
                            caption={`${child.label} 관련 다이어그램 또는 슬라이드`}
                          />
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                            <li>핵심 메시지 한 줄 요약 (추가 예정)</li>
                            <li>이해관계자·범위·제약 사항 (추가 예정)</li>
                            <li>참고 링크·부록 (추가 예정)</li>
                          </ul>
                        </>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
