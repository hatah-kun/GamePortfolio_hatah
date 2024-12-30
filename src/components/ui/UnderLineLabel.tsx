interface Props {
  content: string;
  class?: string;
}

const UnderLineLabel = ({ content, class: className }: Props) => {
  return (
    <div className={`${className} group w-fit`}>
      <span>{content}</span>
      <div className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300">
        <hr className="border-t border" />
      </div>
    </div>
  );
};

export default UnderLineLabel;
