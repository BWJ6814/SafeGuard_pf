type RiskItem = {
  title: string
  risk: string
  resolution: string
  outcome: string
}

const RISK_ITEMS: RiskItem[] = [
  {
    title: '[성능] 실시간 영상 프레임 분석 지연',
    risk:
      '웹캠·재생 영상에서 프레임을 너무 자주 보내거나, 판별 과정이 무거울 때 화면이 버벅이고 서버 부하가 커짐.',
    resolution:
      '프레임 전송 간격과 서버 쪽 분석 주기를 조정하고, 필요 시 해상도·입력 크기를 낮춰 한 번에 처리하는 양을 줄임.',
    outcome:
      '실시간 화면이 비교적 부드럽게 유지되고, 서버 자원 사용이 안정적으로 관리됨.',
  },
  {
    title: '[연동] 영상 서버와 관리자 서버 간 기록 저장 실패',
    risk:
      '위험 판정 후 이력이 저장되지 않거나, 주소·보안 설정이 맞지 않아 요청이 거절됨.',
    resolution:
      '두 서버 주소를 환경 설정으로 통일하고, 서버끼리만 아는 비밀 값으로 저장 요청을 제한함.',
    outcome:
      '자동 기록이 안정적으로 쌓이고, 잘못된 호출은 차단됨.',
  },
  {
    title: '[실시간] 실시간 결과가 끊기거나 늦게 보임',
    risk:
      '실시간 분석 결과를 받는 연결이 중간에 끊기거나, 중간에 끼어 있는 장비 때문에 응답이 한참 뒤에 옴.',
    resolution:
      '연결이 끊기면 다시 붙도록 화면 쪽 로직을 두고, 서버는 결과를 한 번에 몰아보내지 않도록 스트림 형태로 유지함.',
    outcome: '끊김 후에도 곧바로 복구되고, 체감 지연이 줄어듦.',
  },
  {
    title: '[환경] 긴 영상 업로드 분석 시 중간에 실패',
    risk:
      '용량이 큰 동영상을 올리면 시간이 오래 걸리거나, 중간에 끊기면 처음부터 다시 해야 하는 느낌이 듦.',
    resolution:
      '지원하는 형식만 받도록 제한하고, 서버에서는 일정 간격으로만 대표 화면을 뽑아 순서대로 처리함. 시간이 걸리는 만큼 사용자에게 진행 상황을 보여 줌.',
    outcome:
      '불필요한 전체 재처리를 줄이고, 긴 영상도 끝까지 분석 가능한 흐름을 유지함.',
  },
]

function RiskSection({
  eyebrow,
  title,
  accentClass,
  items,
}: {
  eyebrow: string
  title: string
  accentClass: string
  items: RiskItem[]
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.035]">
      <div className={`h-1 bg-gradient-to-r ${accentClass}`} aria-hidden />
      <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50/90 to-white px-4 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-[13px]">
          {eyebrow}
        </p>
        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h3>
      </div>
      <ul className="divide-y divide-slate-100">
        {items.map((item, idx) => (
          <li key={item.title} className="px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <p className="min-w-0 text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                <span className="mr-2 font-bold text-slate-600">{idx + 1}.</span>
                {item.title}
              </p>
              <span className="inline-flex shrink-0 items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white shadow-sm ring-1 ring-slate-900/50 sm:text-[13px]">
                해결완료
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-300/90 bg-slate-50/95 px-3.5 py-3 shadow-sm ring-1 ring-slate-200/60 sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-700 sm:text-sm">
                  문제
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.risk}
                </p>
              </div>
              <div className="rounded-xl border border-teal-200/90 bg-teal-50/50 px-3.5 py-3 shadow-sm ring-1 ring-teal-900/[0.06] sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-teal-900/90 sm:text-sm">
                  해결
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.resolution}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200/90 bg-amber-50/60 px-3.5 py-3 shadow-sm ring-1 ring-amber-900/[0.06] sm:px-4 sm:py-3.5">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-900/85 sm:text-sm">
                  성과
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-800 sm:text-base">
                  {item.outcome}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function RiskManagementCards() {
  return (
    <div className="space-y-8">
      <RiskSection
        eyebrow="Risk management"
        title="리스크 관리"
        accentClass="from-teal-600/30 via-teal-800 to-teal-600/30"
        items={RISK_ITEMS}
      />
    </div>
  )
}
