import { SectionImage } from '../components/doc/SectionImage'
import { DESIGN_IMAGES } from '../data/designImages'
import { dashLi, dashUl, midP, midWrap, ol1, strong1 } from './docHierarchy'

export function DbErdArticle() {
  return (
    <div className="max-w-none space-y-8">
      <SectionImage
        src={DESIGN_IMAGES.erd}
        alt="SafeGuard 논리 ERD"
        caption="DB-ERD — 핵심 엔티티와 확장 여지"
      />

      <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
        <p>
          현재 스키마는{' '}
          <strong className="font-medium text-slate-800">
            사용자·인증 정보
          </strong>
          과{' '}
          <strong className="font-medium text-slate-800">
            위험 이벤트(분석 로그)
          </strong>{' '}
          두 축만으로도 서비스 시나리오를 설명할 수 있게 최소화했습니다. 테이블
          수가 적어 보일 수 있지만, 실제로는{' '}
          <strong className="font-medium text-slate-800">
            OAuth 식별자·JWT 세션·SSE 구독 주체
          </strong>
          와{' '}
          <strong className="font-medium text-slate-800">
            프레임 타임스탬프·탐지 라벨·신뢰도·소스(실시간/파일)
          </strong>
          까지 한 이벤트 행에 녹여 두어, 조회·통계·감사 추적에 필요한 정보를
          빠짐없이 담도록 설계했습니다.
        </p>
        <p>
          즉 &ldquo;엔티티가 두 개뿐&rdquo;이 아니라,{' '}
          <strong className="font-medium text-slate-800">
            도메인 경계를 과도하게 쪼개지 않고
          </strong>{' '}
          이벤트 스토어형으로 몰아 넣은 결과입니다. 이후 관리자 조직·현장
          구역·장비 단위로 정규화가 필요해지면, 이벤트의 외래키만 늘려 단계적으로
          쪼개면 됩니다.
        </p>
        <p>
          물리 DDL 단계에서는 MariaDB 제약·인덱스(시간 역순, 사용자별 최근
          이벤트)를 추가하고, 대용량 영상은 DB가 아닌 파일 스토리지 경로만
          참조합니다. ERD는 그 &ldquo;논리 뼈대&rdquo;를 발표용으로 고정해 둔
          것입니다.
        </p>
      </div>

      <ol className={ol1}>
        <li>
          <span className={strong1}>두 테이블로도 충분한 이유</span>
          <div className={midWrap}>
            <p className={midP}>
              MVP에서 필요한 질의는 &ldquo;누가 어떤 위험 이벤트를 언제
              발생시켰는가&rdquo;와 &ldquo;세션·권한은 유효한가&rdquo;로 압축됩니다.
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>
                이벤트 테이블 한 줄에 소스 메타·모델 버전·스냅샷 키를 JSON/문자열로
                함께 두면, 추후 테이블을 쪼갤 때 마이그레이션 경로가 명확합니다.
              </li>
              <li className={dashLi}>
                사용자 테이블은 OAuth provider id, role, 토큰 회전 정보까지
                포함해 인증 서버와 동일한 책임 경계를 유지합니다.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
