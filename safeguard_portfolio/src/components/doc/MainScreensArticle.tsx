import { Clapperboard } from 'lucide-react'
import { IMPLEMENTATION_VIDEOS } from '../../data/implementationVideos'

function VideoFigure({
  title,
  description,
  src,
  label,
}: {
  title: string
  description: string
  src: string
  label: string
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-baseline gap-2 border-b border-slate-200/90 pb-2">
        <span className="rounded-md bg-teal-900/[0.08] px-2 py-0.5 text-xs font-bold text-teal-900">
          {label}
        </span>
        <h4 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h4>
      </div>
      <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
        {description}
      </p>
      <div className="overflow-hidden rounded-xl border-2 border-teal-800/80 bg-black/5 shadow-sm ring-1 ring-teal-900/[0.12]">
        <video
          className="block w-full max-h-[min(70vh,560px)] bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          title={title}
          src={src}
        >
          브라우저에서 video 태그를 지원하지 않습니다.
        </video>
      </div>
    </div>
  )
}

export function MainScreensArticle() {
  return (
    <div className="max-w-none space-y-10">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/90 pb-2">
        <Clapperboard className="h-5 w-5 text-teal-700" aria-hidden />
        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          주요 화면 구현
        </h3>
      </div>
      <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
        로그인, 실시간 영상, 업로드 영상 분석, 파일 분석·DB 저장까지 네 가지
        기능 흐름을 영상으로 정리했습니다. (총 5개 클립 — 영상 분석은 시나리오
        두 가지)
      </p>

      <VideoFigure
        label="9-1"
        title="로그인"
        description="OAuth·JWT 기반 로그인 및 세션 진입 흐름을 보여줍니다."
        src={IMPLEMENTATION_VIDEOS.login}
      />

      <VideoFigure
        label="9-2"
        title="실시간 영상"
        description="실시간으로 영상을 분석해 로그를 출력·스트리밍하는 기능입니다."
        src={IMPLEMENTATION_VIDEOS.realtime}
      />

      <div className="space-y-6">
        <div className="flex flex-wrap items-baseline gap-2 border-b border-slate-200/90 pb-2">
          <span className="rounded-md bg-teal-900/[0.08] px-2 py-0.5 text-xs font-bold text-teal-900">
            9-3
          </span>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">
            영상 분석 (시나리오 2종)
          </h4>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-600 sm:text-base">
          업로드한 영상을 분석해 로그를 남기는 기능입니다. 첫 클립은 전원
          안전모를 착용한 경우, 둘째 클립은 한 명이 안전모를 벗은 경우를
          담았습니다.
        </p>
        <VideoFigure
          label="9-3-a"
          title="영상 분석 — 전원 착용"
          description="모든 작업자가 안전모를 착용한 상태에서의 탐지·로그 흐름입니다."
          src={IMPLEMENTATION_VIDEOS.analysis1}
        />
        <VideoFigure
          label="9-3-b"
          title="영상 분석 — 미착용 감지"
          description="미착용자가 발생했을 때 경고·로그가 어떻게 쌓이는지 보여줍니다."
          src={IMPLEMENTATION_VIDEOS.analysis2}
        />
      </div>

      <VideoFigure
        label="9-4"
        title="파일 분석 및 데이터 저장"
        description="동영상 파일을 넣으면 재생 UI 없이 텍스트 형태로 분석 결과를 DB에 저장하는 흐름입니다. 대용량 영상도 경로·메타만 DB에 남기고 본문 바이너리는 스토리지에 둡니다."
        src={IMPLEMENTATION_VIDEOS.fileAnalysis}
      />
    </div>
  )
}
