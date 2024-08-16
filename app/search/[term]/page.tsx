type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  return <div>salam {term}</div>;
}

export default SearchPage;
