import { QuestPage } from '../../../../type/type';

type TypeImageProps = {
  quest: QuestPage;
}

export default function Image({ quest }: TypeImageProps): JSX.Element {
  return (
    <div className="decorated-page__decor" aria-hidden="true">
      <picture>
        <source type="image/webp" srcSet={`${quest.previewImgWebp}, ${quest.coverImgWebp} 2x`} />
        <img src={quest.previewImg} srcSet={`${quest.coverImg} 2x`} width="1366" height="768" alt="" />
      </picture>
    </div>
  );
}
