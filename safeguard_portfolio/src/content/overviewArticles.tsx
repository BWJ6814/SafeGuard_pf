import {
  Database,
  Film,
  LayoutDashboard,
  ShieldAlert,
} from 'lucide-react'
import { SectionImage } from '../components/doc/SectionImage'
import { midP, midWrap, ol1, strong1 } from './docHierarchy'
import { OVERVIEW_IMAGES } from '../data/overviewImages'

export function ProjectBackgroundArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.projectBackground}
        alt="SafeGuard 프로젝트 배경"
        caption="프로젝트 배경 — 현장 안전장구 준수 모니터링"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>산업 현장의 안전·비용 압력</span>
          <div className={midWrap}>
            <p className={midP}>
              안전모·안전화 등 착용 규정은 있으나, 인력으로만 순찰·점검하기에는
              구역이 넓고 시간대가 제각각이라 누락이 발생하기 쉽습니다. 반복
              지도에도 불구하고 동일 위험이 재발하면 사고로 이어질 수 있고, 상시
              감시 인력을 두는 것은 비용 부담이 큽니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>영상·LLM을 활용한 자동 점검의 필요성</span>
          <div className={midWrap}>
            <p className={midP}>
              웹캠·녹화 영상에서 프레임 단위로 장구 착용 여부를 판별하고, 결과를
              실시간(SSE)으로 전달하면 관리자는 화면만으로도 위험 구간을 빠르게
              인지할 수 있습니다. 민감 데이터는 외부 클라우드 LLM이 아닌 로컬
              Ollama 등으로 처리해 유출 리스크를 줄이는 방향을 택했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

const GOAL_CARDS = [
  {
    icon: Film,
    title: '실시간 영상 분석',
    body:
      '웹캠 또는 재생 영상에서 프레임을 주기적으로 보내고, SSE로 판정 결과를 스트리밍합니다.',
  },
  {
    icon: LayoutDashboard,
    title: '파일 기반 영상 분석',
    body:
      'MP4 등을 업로드한 뒤 일정 간격으로 프레임별 분석·타임라인을 제공합니다.',
  },
  {
    icon: Database,
    title: 'DB 저장',
    body:
      '위험 구간(및 선택적 배치 리포트)을 이벤트로 저장하고 목록·상세 조회까지 연결합니다.',
  },
  {
    icon: ShieldAlert,
    title: '위험 노출 시 알림',
    body:
      'UI에서 위험 판정·시각적 피드백(실시간 로그·타임라인 등)으로 관리자에게 전달합니다.',
  },
] as const

export function ProjectGoalsArticle() {
  return (
    <div className="max-w-none space-y-8">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        프로젝트 목표
      </h3>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {GOAL_CARDS.map(({ icon: Icon, title, body }) => (
          <li
            key={title}
            className="flex flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/90 p-5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04]"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-900/[0.08] text-teal-800 ring-1 ring-teal-900/10">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <p className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
                {title}
              </p>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ArchitectureArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.architecture}
        alt="SafeGuard 시스템 구성도"
        caption="시스템 구성도 — 클라이언트·추론·저장소 연동"
      />

      <ol className={ol1}>
        <li>
          <span className={strong1}>브라우저·SSE 소비자</span>
          <div className={midWrap}>
            <p className={midP}>
              React와 EventSource로 실시간 판정 로그·상태를 수신하고, 영상
              플레이어·타임라인 UI와 동기화합니다. 로그인은 OAuth·JWT 흐름으로
              보호합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>Node·Python 서비스 계층</span>
          <div className={midWrap}>
            <p className={midP}>
              Express는 API·세션·파일 업로드·SSE 브로커 역할을, FastAPI·OpenCV·YOLO
              쪽은 프레임 추출·객체 검출·Ollama 추론 호출을 담당합니다. 역할이
              겹치지 않게 경계를 나누어 배포·스케일을 쉽게 했습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>MariaDB·ORM</span>
          <div className={midWrap}>
            <p className={midP}>
              이벤트·사용자·분석 작업 메타는 Sequelize로 MariaDB에 적재하고, 대용량
              영상 바이너리는 파일 경로만 참조하도록 했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function ScheduleArticle() {
  return (
    <div className="max-w-none space-y-4">
      <SectionImage
        src={OVERVIEW_IMAGES.schedule}
        alt="SafeGuard 프로젝트 일정 관리표"
      />
      <p className="text-center text-[15px] leading-relaxed text-slate-600 sm:text-base">
        총 4주 동안 프로젝트의 일정을 나타낸 일정표입니다.
      </p>
    </div>
  )
}
