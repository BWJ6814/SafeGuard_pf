import { SectionImage } from '../components/doc/SectionImage'
import { ANALYSIS_IMAGES } from '../data/analysisImages'
import { dashLi, dashUl, midP, midWrap, ol1, strong1 } from './docHierarchy'

export function RequirementsArticle() {
  return (
    <div className="max-w-none space-y-12">
      <p className="mb-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        SafeGuard 요구사항을 기능·비기능·데이터 흐름 관점으로 정리한 정의서입니다.
        아래 캡처는{' '}
        <strong className="font-semibold text-slate-900">연속된 3장</strong>으로
        구성되어 있으며, 각 장마다 하단에 요약 설명을 붙였습니다.
      </p>

      <div className="space-y-10">
        <div>
          <SectionImage
            src={ANALYSIS_IMAGES.requirements1}
            alt="요구사항 정의서 1장"
            caption="[1/3] 범위·액터·실시간 영상 파이프라인 요구"
          />
          <ol className={`${ol1} mt-6`}>
            <li>
              <span className={strong1}>범위 고정</span>
              <div className={midWrap}>
                <p className={midP}>
                  웹캠·파일 입력, SSE 기반 실시간 로그, 관리자 알림까지를 MVP
                  범위로 명시해 이후 변경 요청과 구분했습니다.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <SectionImage
            src={ANALYSIS_IMAGES.requirements2}
            alt="요구사항 정의서 2장"
            caption="[2/3] 파일 분석·DB 이벤트·권한"
          />
          <ol className={`${ol1} mt-6`}>
            <li>
              <span className={strong1}>데이터·권한</span>
              <div className={midWrap}>
                <p className={midP}>
                  업로드 영상의 프레임 샘플링 간격, 위험 이벤트 저장 필드, JWT·OAuth
                  세션 경로를 한 장에서 추적할 수 있게 했습니다.
                </p>
                <ul className={dashUl}>
                  <li className={dashLi}>
                    파일 분석은 재생 UI 없이 텍스트 로그·DB 반영에 초점을 둡니다.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <SectionImage
            src={ANALYSIS_IMAGES.requirements3}
            alt="요구사항 정의서 3장"
            caption="[3/3] 비기능·품질·운영"
          />
          <ol className={`${ol1} mt-6`}>
            <li>
              <span className={strong1}>비기능·완료 기준</span>
              <div className={midWrap}>
                <p className={midP}>
                  응답 지연 한도, 로컬 LLM 실패 시 재시도, 로그 보존 기간 등 운영
                  관점 항목을 정의해 출시 전 체크리스트로 사용했습니다.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
