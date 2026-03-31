import type { ReactNode } from 'react'
import {
  type LucideIcon,
  Braces,
  Calendar,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Globe,
  KeyRound,
  Layers,
  Monitor,
  Radio,
  Server,
  Shield,
  User,
  Video,
  Zap,
} from 'lucide-react'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const HERO_IMAGE = `${base}/images/hero/safeguard-main-hero.png`

function TechChip({
  icon: Icon,
  children,
  compact,
}: {
  icon: LucideIcon
  children: ReactNode
  compact?: boolean
}) {
  return (
    <span
      className={
        compact
          ? 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-1 text-xs font-medium text-slate-800 shadow-sm sm:gap-1.5 sm:px-2 sm:text-sm'
          : 'inline-flex items-center gap-1 rounded-md border border-slate-200/90 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-800 shadow-sm sm:gap-1.5 sm:px-2 sm:py-1 sm:text-[11px]'
      }
    >
      <Icon
        className="h-3 w-3 shrink-0 text-teal-700 sm:h-3.5 sm:w-3.5"
        aria-hidden
      />
      {children}
    </span>
  )
}

function TechCategoryBox({
  label,
  children,
  className = '',
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex min-h-0 min-w-0 flex-col gap-1 rounded-lg border border-slate-200/90 bg-slate-50/90 p-1.5 shadow-sm ring-1 ring-slate-900/[0.03] sm:gap-1.5 sm:p-2 ${className}`}
    >
      <p className="text-center text-[11px] font-bold uppercase tracking-wide text-slate-800 sm:text-xs">
        {label}
      </p>
      <div className="flex min-w-0 flex-col gap-1.5 sm:gap-2">{children}</div>
    </div>
  )
}

export function LandingIntro() {
  return (
    <section
      id="intro"
      className="flex min-h-[calc(88svh-3.5rem)] flex-col gap-1.5 px-2 pb-1.5 pt-2 sm:gap-2 sm:px-4 sm:pb-2 sm:pt-3 lg:gap-2.5 lg:px-6"
    >
      {/* 메인 히어로 — 우하단 Gemini 워터마크는 그라데이션으로 가림 */}
      <div className="relative aspect-[3/1] w-full shrink-0 overflow-hidden rounded-2xl border border-slate-300/90 bg-[#0a0a0c] shadow-[0_14px_44px_-18px_rgba(15,23,42,0.12),0_6px_20px_-10px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/[0.06] sm:rounded-[1.125rem]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-slate-200/80"
          aria-hidden
        />
        <img
          src={HERO_IMAGE}
          alt="SafeGuard — AI 기반 현장 안전장구(PPE) 실시간 모니터링"
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[18%] min-h-[52px] w-[22%] min-w-[72px] bg-gradient-to-tl from-[#0b1218] via-[#0b1218]/75 to-transparent sm:h-[16%] sm:w-[18%]"
          aria-hidden
        />
      </div>

      {/* 프로젝트 소개 | 개발 환경 */}
      <div className="grid min-h-0 shrink-0 grid-cols-1 gap-1.5 sm:gap-2 lg:grid-cols-2 lg:items-stretch lg:gap-2.5">
        <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-3">
          <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
            <Calendar className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            프로젝트 소개
          </h2>
          <div className="mb-2 flex shrink-0 flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-600 sm:text-sm">
            <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
              <Calendar className="h-3.5 w-3.5 text-slate-600 sm:h-4 sm:w-4" aria-hidden />
              03-03 ~ 03-31
            </span>
            <span className="inline-flex items-center gap-0.5 font-medium text-slate-800">
              <User className="h-3.5 w-3.5 text-slate-600 sm:h-4 sm:w-4" aria-hidden />
              1인
            </span>
          </div>
          <p className="min-h-0 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm sm:leading-snug">
            로컬 LLM과 영상 분석 기술을 결합하여, 외부 유출 없는 철저한 보안 속에서
            현장 작업자의 안전장구 착용을 실시간 관리합니다. 사고 예방과 산업 안전을
            강화하는 동시에 불필요한 관리 인건비를 줄여 획기적인 비용 절감을
            실현합니다.
          </p>
        </article>

        <article className="flex h-full min-h-0 flex-col rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2.5 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-3">
          <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
            <Monitor className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
            개발 환경
          </h2>
          <div className="min-h-0 flex-1 overflow-x-auto rounded-lg border border-slate-200/90 bg-white/80">
            <table className="w-full min-w-[200px] border-collapse text-left text-xs text-slate-700 sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/90">
                  <th className="px-2 py-1.5 font-bold text-slate-900 sm:px-2.5">
                    구분
                  </th>
                  <th className="px-2 py-1.5 font-bold text-slate-900 sm:px-2.5">
                    도구
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="whitespace-nowrap px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    IDE / Editor
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">
                    Cursor, IntelliJ IDEA
                  </td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    OS
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">Windows</td>
                </tr>
                <tr>
                  <td className="px-2 py-1.5 font-medium text-slate-800 sm:px-2.5">
                    Runtime
                  </td>
                  <td className="px-2 py-1.5 text-slate-700 sm:px-2.5">
                    Node.js, Python
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>

      {/* 핵심 기술: 2열 그리드 — 1행 백엔드 병합, 2행 DATABASE | FRONTEND */}
      <article className="flex shrink-0 flex-col overflow-hidden rounded-xl border border-slate-300/90 bg-gradient-to-br from-white to-slate-50/90 p-2 shadow-sm ring-1 ring-slate-900/[0.06] sm:p-2.5">
        <h2 className="mb-1.5 flex shrink-0 items-center gap-1.5 text-sm font-bold text-slate-900 sm:text-base">
          <Layers className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden />
          핵심 기술
        </h2>
        <div className="grid min-w-0 grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
          <TechCategoryBox label="BACKEND" className="sm:col-span-2">
            <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-3">
              <div className="min-w-0">
                <p className="mb-1 text-center text-[10px] font-bold text-slate-700 sm:text-[11px]">
                  Node
                </p>
                <div className="flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-1.5">
                  <TechChip compact icon={Server}>
                    Express
                  </TechChip>
                  <TechChip compact icon={KeyRound}>
                    JWT
                  </TechChip>
                  <TechChip compact icon={Shield}>
                    Kakao·Google OAuth
                  </TechChip>
                  <TechChip compact icon={Globe}>
                    REST API
                  </TechChip>
                </div>
              </div>
              <div className="min-w-0">
                <p className="mb-1 text-center text-[10px] font-bold text-slate-700 sm:text-[11px]">
                  Python
                </p>
                <div className="flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-1.5">
                  <TechChip compact icon={Zap}>
                    FastAPI
                  </TechChip>
                  <TechChip compact icon={Radio}>
                    SSE
                  </TechChip>
                  <TechChip compact icon={Video}>
                    OpenCV
                  </TechChip>
                  <TechChip compact icon={Cpu}>
                    Ultralytics YOLO
                  </TechChip>
                  <TechChip compact icon={Layers}>
                    Ollama
                  </TechChip>
                </div>
              </div>
            </div>
          </TechCategoryBox>

          <TechCategoryBox label="DATABASE">
            <div className="flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-1.5">
              <TechChip compact icon={Database}>
                MariaDB
              </TechChip>
              <TechChip compact icon={Layers}>
                Sequelize ORM
              </TechChip>
            </div>
          </TechCategoryBox>

          <TechCategoryBox label="FRONTEND">
            <div className="flex flex-wrap justify-center gap-1 sm:justify-start sm:gap-1.5">
              <TechChip compact icon={Braces}>
                React
              </TechChip>
              <TechChip compact icon={Globe}>
                Axios
              </TechChip>
              <TechChip compact icon={Radio}>
                EventSource (SSE)
              </TechChip>
              <TechChip compact icon={Code2}>
                Tailwind
              </TechChip>
            </div>
          </TechCategoryBox>
        </div>
      </article>

      <p className="flex shrink-0 items-center justify-center gap-1.5 py-0.5 text-center text-xs text-slate-600 sm:text-sm">
        <span>프로젝트 문서는 아래로 스크롤</span>
        <ChevronDown
          className="h-3.5 w-3.5 animate-bounce text-slate-500 sm:h-4 sm:w-4"
          aria-hidden
        />
      </p>
    </section>
  )
}
