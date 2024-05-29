export const Radius = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div>
        <h2 className='text-std-28B-5'>Radius</h2>
      </div>
      <div className='flex flex-wrap gap-8'>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 bg-solid-grey-400'}></div>
          <span className='text-dns-14N-3'>none</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-8 bg-solid-grey-400'}></div>
          <span className='text-dns-14N-3'>8px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-16 bg-solid-grey-400'}></div>
          <span className='text-dns-14N-3'>16px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-32 bg-solid-grey-400'}></div>
          <span className='text-dns-14N-3'>32px</span>
        </div>
        <div className='flex flex-col gap-2'>
          <div className={'size-14 rounded-full bg-solid-grey-400'}></div>
          <span className='text-dns-14N-3'>full</span>
        </div>
      </div>
    </section>
  );
};
