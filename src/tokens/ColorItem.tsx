type Props = {
  title: string;
  colorClasses: string[];
};

const getColorLevel = (className: string): string => {
  const classParts = className.split('-');
  return classParts[classParts.length - 1];
};

export const ColorItem = (props: Props) => {
  const { title, colorClasses } = props;

  return (
    <section className='flex flex-col gap-4'>
      <h3 className='text-std-24B-5'>{title}</h3>
      <div className='flex flex-wrap gap-2'>
        {colorClasses.map((colorClass) => {
          return (
            <div className='c flex flex-col gap-1' key={colorClass}>
              <p className='text-dns-16N-2'>{getColorLevel(colorClass)}</p>
              <p className='mb-1 text-dns-14N-2'></p>
              <div className={`w-16 h-20 ${colorClass}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
