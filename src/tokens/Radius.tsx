export const Radius = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h2 className='text-std-28B-150'>Radius</h2>
      </div>
      <div className='flex flex-wrap gap-8'>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 bg-solid-gray-400'}></div>
          <span className='text-dns-14N-130'>none</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-8 bg-solid-gray-400'}></div>
          <span className='text-dns-14N-130'>8px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-16 bg-solid-gray-400'}></div>
          <span className='text-dns-14N-130'>16px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-32 bg-solid-gray-400'}></div>
          <span className='text-dns-14N-130'>32px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-full bg-solid-gray-400'}></div>
          <span className='text-dns-14N-130'>full</span>
        </div>
      </div>
    </section>
  );
};
