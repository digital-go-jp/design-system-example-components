type Props = {
  title: string;
  colorClasses: string[];
};

export const ColorItem = (props: Props) => {
  const { title, colorClasses } = props;

  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-std-24B-5'>{title}</h3>
      <div className='flex flex-wrap gap-8'>
        {colorClasses.map((colorClass) => {
          return (
            <div className='c flex flex-col gap-2' key={colorClass}>
              <div className={`size-14 ${colorClass}`}></div>
              <span className='text-dns-14N-3'></span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
