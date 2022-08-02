export interface ITitlePage {
  title: string;
}
export const TitlePage = ({ title }: ITitlePage) => {
  return (
        <div className="h-25 w-25">
      <h1 className="w-auto h-auto border-bottom text-center">{title}</h1>
    </div>
  );
};
